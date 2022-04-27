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

function clearForm() {
  const formInputs = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");

  for (field of formInputs) {
    field.value = "";
    field.checked = false;
  }
  textArea.value = "";
}
