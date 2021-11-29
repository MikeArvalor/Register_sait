const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input_form_email = document.querySelector('.input_form_email');

function validateEmail(value) {
  return reg.test(value);
}

function updateInput() {
	if (validateEmail(input_form_email.value)) input_form_email.style.borderColor = 'green';
	else input_form_email.style.borderColor = 'red';
}

input_form_email.addEventListener('input_form_email', updateInput);

console.log()