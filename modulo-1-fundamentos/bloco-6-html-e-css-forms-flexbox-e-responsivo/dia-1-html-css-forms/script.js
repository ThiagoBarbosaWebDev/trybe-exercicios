window.onload = function () {
  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clearForm);
  const button = document.querySelector("#submit-button");
  button.addEventListener("click", submitHandler);
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

function validationHandler() {
  const nomeCompleto = document.querySelector("#nome-id").value.length;
  const nomeInvalido = nomeCompleto < 10 || nomeCompleto > 40;

  const email = document.querySelector("#email-id").value.length;
  const emailInvalido = email < 10 || email > 50;

  const textArea = document.querySelector("textarea").value.length;
  const textAreaInvalida = textArea > 500;

  if (emailInvalido || nomeInvalido || textAreaInvalida) {
    return false;
  } else {
    return true;
  }
}

function submitHandler(e) {
  e.preventDefault();
  const validation = validationHandler();
  if (validation === false) {
    alert("Dados inválidos");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}
