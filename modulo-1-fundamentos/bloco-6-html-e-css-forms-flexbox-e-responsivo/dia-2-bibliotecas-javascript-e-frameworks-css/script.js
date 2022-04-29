window.onload = function () {
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearForm);
  // const button = document.querySelector("#submit-button");
  // button.addEventListener("click", submitHandler);
  const agreement = document.querySelector("#agreement-checkbox");
  agreement.addEventListener("change", function () {
  const submitButton = document.querySelector("#submit-button");
  submitButton.disabled = !agreement.checked;
  });
};


function clearForm() {
  const formInputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");

  for (field of formInputs) {
    field.value = "";
    field.checked = false;
  }
  textArea.value = "";
}

// function validationHandler() {
//   const nomeCompleto = document.querySelector("#nome-id").value.length;
//   const nomeInvalido = nomeCompleto < 10 || nomeCompleto > 40;

//   const email = document.querySelector("#email-id").value.length;
//   const emailInvalido = email < 10 || email > 50;

//   const textArea = document.querySelector("textarea").value.length;
//   const textAreaInvalida = textArea > 500;

//   if (emailInvalido || nomeInvalido || textAreaInvalida) {
//     return false;
//   } else {
//     return true;
//   }
// }

function submitHandler(e) {
  e.preventDefault();
  // const validation = validationHandler();
  // if (validation === false) {
  //   alert("Dados inválidos");
  // } else {
  //   alert(
  //     "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
  //   );
  // }
}

// const validation = new JustValidate('#form-id', {
//   errorFieldCssClass: 'is-invalid',
// });



const validation = new JustValidate(
  '#form-id',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
    errorContainer: '.errors-container',
  },
  [
    {
      key: 'Name is too short',
      dict: {
        ru: 'Имя слишком короткое',
        es: 'El nombre es muy corto',
      },
    },
    {
      key: 'Field is required',
      dict: {
        ru: 'Обязательное поле',
        es: 'Se requiere campo',
      },
    },
  ]
);





validation
  .addField('#nome-id', [
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Name is too short!',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'Name is too long',
    },
  ])
  .addField('#email-id', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Email is too short!',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'Email is too long!',
    },
  ])
  .addField('#textarea-id', [
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'Use up to 500 characters',
    },
  ])
  .addRequiredGroup('#communication_radio_group')
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });