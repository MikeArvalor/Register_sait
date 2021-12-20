let header_burger = document.querySelector('.header_burger');

let header_nav = document.querySelector('.header_list');
 
header_burger.addEventListener('click', function(){
	console.log(1111)
	header_burger.classList.toggle('active');
	
	header_nav.classList.toggle('active');

 })