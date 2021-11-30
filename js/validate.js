// const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const input_form_email = document.querySelector('.input_form_email');

// function validateEmail(value) {
//   return reg.test(value);
// }

// function updateInput() {
// 	if (validateEmail(input_form_email.value)) input_form_email.style.borderColor = 'green';
// 	else input_form_email.style.borderColor = 'red';
// }

// input_form_email.addEventListener('input_form_email', updateInput);

// console.log()
let email = document.querySelector('.input_form_email')
let repeat_email = document.querySelector('.input_form_repeat_email')
let button = document.querySelector('.button_form')
let input_first_name = document.querySelector('.input_form_first_name')
let input_surname = document.querySelector('.input_form_surname')
let input_tel = document.querySelector('.input_form_tel')
button.addEventListener('click',check)
function check(){
	if(email.value == repeat_email.value){
		repeat_email.style.borderColor = 'green';
		email.style.borderColor = 'green'
	}
	else{
		repeat_email.style.borderColor = 'red'
		
	}
	if(email.value == ''){
		email.style.borderColor = 'red'
	}
	if(repeat_email.value == ''){
		repeat_email.style.borderColor = 'red'
	}
	if(input_first_name.value == ''){
		input_first_name.style.borderColor = 'red'
	}
	else{
		input_first_name.style.borderColor = 'green'
	}
	if(input_surname.value == ''){
		input_surname.style.borderColor = 'red'
	}
	else{
		input_surname.style.borderColor = 'green'
	}
	if(input_tel.value == ''){
		input_tel.style.borderColor = 'red'
	}
	else {
		input_tel.style.borderColor = 'green'
	}
}
