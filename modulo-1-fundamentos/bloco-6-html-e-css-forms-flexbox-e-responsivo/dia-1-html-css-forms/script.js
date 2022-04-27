const button = document.querySelector('#submit-button')

button.addEventListener('click', e => {
  e.preventDefault()
})

function enableSubmit() {
  const agreement = document.querySelector('#agreement-checkbox')
  const submitButton = document.querySelector('#submit-button')
  submitButton.disabled = !agreement.checked
}

agreement.addEventListener('change', enableSubmit);