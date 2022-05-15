window.onload = function () {
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearForm);
  const button = document.querySelector("#submit-button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
  const agreement = document.querySelector("#agreement-checkbox");
  agreement.addEventListener("change", function () {
    const submitButton = document.querySelector("#submit-button");
    submitButton.disabled = !agreement.checked;
  });
};
const submitButton = document.querySelector("#submit-button");
function clearForm() {
  const formInputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");

  for (field of formInputs) {
    field.value = "";
    field.checked = false;
  }
  textArea.value = "";
}

const inputNome = document.querySelector("#nome-id");
const inputEmail = document.querySelector("#email-id");
const inputTextarea = document.querySelector("#textarea-id");
const inputDate = document.querySelector("#date-id");

const validateForms = () => {
  const inputDestino = document.querySelector('input[name="destino"]:checked');
  if (inputNome.value.length < 10 || inputNome.value.length > 40) {
    alert("Dados Inválidos");
  } else if (inputEmail.value.length < 10 || inputEmail.value.length > 50) {
    alert("Dados Inválidos");
  } else if (!inputDestino || !inputDate) {
    alert("Dados Inválidos");
  } else if (inputTextarea.value.length > 500) {
    alert("Dados Inválidos");
  } else
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
};

submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  validateForms()
});
