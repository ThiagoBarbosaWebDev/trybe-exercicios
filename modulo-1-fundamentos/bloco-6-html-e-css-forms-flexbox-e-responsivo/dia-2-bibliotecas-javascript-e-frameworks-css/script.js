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

function submitHandler(e) {
  e.preventDefault();
}

const validation = new JustValidate(
  "#form-id",
  {
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: "top",
    },
    errorContainer: ".errors-container",
  },
  [
    {
      key: "Name is too short",
      dict: {
        ru: "Имя слишком короткое",
        es: "El nombre es muy corto",
      },
    },
    {
      key: "Field is required",
      dict: {
        ru: "Обязательное поле",
        es: "Se requiere campo",
      },
    },
  ]
);

validation
  .addField("#nome-id", [
    {
      rule: "required",
      errorMessage: "Preencha seu nome",
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Nome inválido: abaixo de 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 40,
      errorMessage: "Nome inválido: acima de 40 caracteres",
    },
  ])
  .addField("#email-id", [
    {
      rule: "required",
      errorMessage: "Preencha seu email",
    },
    {
      rule: "email",
      errorMessage: 'Email inválido: coloque no formato "nome@email.com"',
    },
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Email inválido: abaixo de 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 50,
      errorMessage: "Email inválido: acima de 50 caracteres",
    },
  ])
  .addField("#textarea-id", [
    {
      rule: "maxLength",
      value: 500,
      errorMessage: "Use no máximo 500 caracteres",
    },
  ])
  .addRequiredGroup("#communication_radio_group")
  .addField("#date-ida-id", [
    {
      rule: "required",
      errorMessage: "Preencha a sua data de ida",
    },
  ])
  .addField("#date-volta-id", [
    {
      rule: "required",
      errorMessage: "Preencha a sua data de volta",
    },
  ]);
