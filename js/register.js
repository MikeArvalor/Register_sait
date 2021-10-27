document.addEventListener('DOMContentLoaded', function(){
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let  year = d.getFullYear();
    let name_input = document.getElementById('calendar')
    name_input.placeholder = day + "-" + month + "-" + year;
});
document.addEventListener('DOMContentLoaded', function(){
    let day = new Date();
    let days = day.getDate();
    let months = day.getMonth() + 1;
    let  years = day.getFullYear();
    let name_inputs = document.getElementById('calendars')
    name_inputs.placeholder = days + "-" + months + "-" + years;
});
//////////////////////////////////////////////////////
let individ =document.getElementById('shareholder_individ')
let company =document.getElementById('shareholder_company')
let showCompany =document.getElementById('showCompany')
let showIndivid =document.getElementById('showIndivid')
 showCompany.addEventListener('click', function(){
     company.style.display="block"
     individ.style.display="none"
 })
 showIndivid.addEventListener('click', function(){
    individ.style.display="block"
    company.style.display="none"
})

///////////
let put_director =document.querySelector('.put_director')
let add_director = document.querySelector('.add_director')
let form_shareholder_individ =document.querySelector('.form_shareholder_individ')
let parent = document.getElementById('parent');
let elem = parent.querySelector('.elem');
let clone = elem.cloneNode(true);
parent.appendChild(clone);


add_director.addEventListener('click',function(){
    let result_put =put_director.value
   if(result_put==1){
    company.style.display="block"
   }
   if(result_put==2){
    parent.style.display="block"
   }
   if(result_put=3){
    parent.style.display="block"
  

   
   }
 
})

 