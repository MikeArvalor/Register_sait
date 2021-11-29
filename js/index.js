

let inner_button = document.querySelector('#switch_data')
    inner_button.addEventListener('click',fn)
let inner_block = document.querySelector('#inner')
let inner_block_window = document.querySelector('#inner_window')
let input_block = document.querySelector('.input_block')
let input_total_block = document.querySelector('.input_total_block')
let input_vat_block = document.querySelector('.input_vat_block')
// let block_total_price = document.querySelector('.subtotal_price')
// let subtotal =document.querySelector('.hb6').textContent
// let total = document.querySelector('.hb4').textContent
// let delete_class = document.querySelector('.delete_class')
// let delete_class1 = document.querySelector('.delete_class1')
// let block_subtotal_price = document.querySelector('.total_price')
// // let total_price = Number(total)
// // console.log(Number(total_price))
// let new_subtotal_price
// let new_total = Number(total)
// console.log(new_subtotal)
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
   function fn(e){
      console.log(e.target.parentNode )
      let add_block=e.target.parentNode
       let text =add_block.querySelector('.txt3')
       let price =add_block.querySelector('.txt4')
       let text_window =add_block.querySelector('.txt3')
       let price_window =add_block.querySelector('.txt4')
      //  let price_new = price
      //  let vat = document.querySelector('.hb5')
      //  console.log(vat.innerHTML)
       
       
       let div =document.createElement('div')
       let button_remove =document.createElement('input')
           button_remove.type='button'
           button_remove.addEventListener('click',rem)
           button_remove.addEventListener('click',s)
           button_remove.addEventListener('click',del)
           button_remove.value='-'
           button_remove.style.width='20px'
           button_remove.style.background='rgb(179, 128, 34)'
           button_remove.style.border='none'
           button_remove.style.marginLeft='10px'
           button_remove.style.marginRight="10px"
           button_remove.style.borderRadius="20px"
           button_remove.style.padding="2px"
    //    div.innerHTML=`${text.innerHTML}  ${price.innerHTML}` 
      /*  div.append(button_remove) */
       div.append(`${text.innerHTML}`)
       div.append(button_remove)
      
       div.append(`${price.innerHTML}`)
      //  БЛОК 2
      let div_window =document.createElement('div')
     
   //    div.innerHTML=`${text.innerHTML}  ${price.innerHTML}` 
     /*  div.append(button_remove) */
      div_window.append(`${text_window.innerHTML}`)     
      div_window.append(`${Number(price_window.innerHTML)}`)
      /*
      попытка через input
      */
     input_block.value = Number(input_block.value) + 10
     input_vat_block.value = Number(input_block.value) * 0.2
     input_total_block.value  = (Number(input_total_block.value) + 10) + (Math.round(Number(input_vat_block.value) * 0.2))
     console.log(input_block.value)
    //    div.innerHTML+=`<span>${price.innerHTML}</span>` 
    // total_price = Number(total) + Number(price_new.innerHTML)
    // new_subtotal_price = Number(total_price) + Number(vat.innerHTML)
    // delete_class.remove()
    // delete_class1.remove()
    // block_total_price.prepend(total_price)
    // block_subtotal_price.prepend(new_subtotal_price)
    // console.log(total)
    // console.log(total_price)
       inner_block.append(div)
       inner_block_window.append(div_window)
      //  inner_block_window.append(div)
      // if(total_price==total_price){
      //   block_total_price.remove(total)
      // }
      // if(total_price==''){
      //  block_total_price.append(total_price)
      // }
   }
 function del(){
  input_block.value = Number(input_block.value) - 10
  input_vat_block.value -=Math.round(Number(input_vat_block.value) * 0.2)
  input_total_block.value =(Number(input_total_block.value) - 10) - (Math.round(Number(input_vat_block.value) * 0.2))
 }
   function rem(e){
    e.target.parentNode.remove()
   
    console.log(e.target)
    console.log(1111)
   }
   function s (){
       console.log(222222)
       
   }
   /////
   

   let inner_button1 = document.querySelector('#switch_data1')
   inner_button1.addEventListener('click',fn1)
let inner_block1 = document.querySelector('#inner')
let inner_block_window1 = document.querySelector('#inner_window')
function fn1(e){
     console.log(e.target.parentNode )
     let add_block1=e.target.parentNode
      let text =add_block1.querySelector('.txt5')
      let price =add_block1.querySelector('.txt6')
      let text_window =add_block1.querySelector('.txt5')
      let price_window =add_block1.querySelector('.txt6')
      
      
      let div =document.createElement('div')
      let button_remove1 =document.createElement('input')
          button_remove1.type='button'
          button_remove1.addEventListener('click',rem)
          button_remove1.addEventListener('click',s)
          button_remove1.addEventListener('click',del1)
          button_remove1.value='-'
          button_remove1.style.width='20px'
          button_remove1.style.background='rgb(179, 128, 34)'
          button_remove1.style.border='none'
          button_remove1.style.marginLeft='20px'
          button_remove1.style.marginRight="10px"
          button_remove1.style.borderRadius="20px"
          button_remove1.style.padding="2px"
      div.append(`${text.innerHTML}`)
      div.append(button_remove1)
      div.append(`${price.innerHTML}`)
        // блок 2
        let div_window1 =document.createElement('div')
        div_window1.append(`${text_window.innerHTML}`)     
        div_window1.append(`${Number(price_window.innerHTML)}`)
        inner_block_window1.append(div_window1)
      inner_block.append(div)
      input_block.value = Number(input_block.value) + 0
    
  }
  function del1(){
    input_block.value = Number(input_block.value) - 0
    
  }
  function rem(e){
   e.target.parentNode.remove()
   console.log(e.target)
   console.log(1111)
  }
  function s (){
      
  }
///
let inner_button2 = document.querySelector('#switch_data2')
inner_button2.addEventListener('click',fn2)
let inner_block2 = document.querySelector('#inner')
let inner_block_window2 = document.querySelector('#inner_window')
function fn2(e){
 
  let add_block2=e.target.parentNode
   let text =add_block2.querySelector('.txt7')
   let price =add_block2.querySelector('.txt8')
   let text_window =add_block2.querySelector('.txt7')
   let price_window =add_block2.querySelector('.txt8')
   
   let div =document.createElement('div')
   let button_remove2 =document.createElement('input')
       button_remove2.type='button'
       button_remove2.addEventListener('click',rem)
       button_remove2.addEventListener('click',s)
       button_remove2.addEventListener('click',del2)
       button_remove2.value='-'
       button_remove2.style.width='20px'
       button_remove2.style.background='rgb(179, 128, 34)'
       button_remove2.style.border='none'
       button_remove2.style.marginLeft='20px'
       button_remove2.style.marginRight="10px"
       button_remove2.style.borderRadius="20px"
       button_remove2.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove2)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window2 =document.createElement('div')
        div_window2.append(`${text_window.innerHTML}`)     
        div_window2.append(`${Number(price_window.innerHTML)}`)
        inner_block_window2.append(div_window2)
       inner_block2.append(div)
       input_block.value = Number(input_block.value) + 60
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +72) 
       console.log(input_vat_block.value)

}
function del2(){
  input_block.value = Number(input_block.value) - 60
  input_vat_block.value = input_vat_block.value - 12
  input_total_block.value =(Number(input_total_block.value) - 72)
}
function rem(e){
e.target.parentNode.remove()
}
////
let inner_button3 = document.querySelector('#switch_data3')
inner_button3.addEventListener('click',fn3)
let inner_block3 = document.querySelector('#inner')
let inner_block_window3 = document.querySelector('#inner_window')
function fn3(e){
 
  let add_block3=e.target.parentNode
   let text =add_block3.querySelector('.txt9')
   let price =add_block3.querySelector('.txt10')
   let text_window =add_block3.querySelector('.txt9')
   let price_window =add_block3.querySelector('.txt10')
   
   let div =document.createElement('div')
   let button_remove3 =document.createElement('input')
       button_remove3.type='button'
       button_remove3.addEventListener('click',rem)
       button_remove3.addEventListener('click',s)
       button_remove3.addEventListener('click',del3)
       button_remove3.value='-'
       button_remove3.style.width='20px'
       button_remove3.style.background='rgb(179, 128, 34)'
       button_remove3.style.border='none'
       button_remove3.style.marginLeft='20px'
       button_remove3.style.marginRight="10px"
       button_remove3.style.borderRadius="20px"
       button_remove3.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove3)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window3 =document.createElement('div')
        div_window3.append(`${text_window.innerHTML}`)     
        div_window3.append(`${Number(price_window.innerHTML)}`)
        inner_block_window3.append(div_window3)
       inner_block3.append(div)
       input_block.value = Number(input_block.value) + 120
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +144)

}
function del3(){
  input_block.value = Number(input_block.value) - 120
  input_vat_block.value = input_vat_block.value - 24
  input_total_block.value =(Number(input_total_block.value) - 144)
}
function rem(e){
e.target.parentNode.remove()
}
////
let inner_button4 = document.querySelector('#switch_data4')
inner_button4.addEventListener('click',fn4)
let inner_block4 = document.querySelector('#inner')
let inner_block_window4 = document.querySelector('#inner_window')
function fn4(e){
 
  let add_block4=e.target.parentNode
   let text =add_block4.querySelector('.txt11')
   let price =add_block4.querySelector('.txt12')
   let text_window =add_block4.querySelector('.txt11')
   let price_window =add_block4.querySelector('.txt12')
   
   let div =document.createElement('div')
   let button_remove4 =document.createElement('input')
       button_remove4.type='button'
       button_remove4.addEventListener('click',rem)
       button_remove4.addEventListener('click',s)
       button_remove4.addEventListener('click',del4)
       button_remove4.value='-'
       button_remove4.style.width='20px'
       button_remove4.style.background='rgb(179, 128, 34)'
       button_remove4.style.border='none'
       button_remove4.style.marginLeft='20px'
       button_remove4.style.marginRight="10px"
       button_remove4.style.borderRadius="20px"
       button_remove4.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove4)
       div.append(`${price.innerHTML}`)
          // блок 2
          let div_window4 =document.createElement('div')
          div_window4.append(`${text_window.innerHTML}`)     
          div_window4.append(`${Number(price_window.innerHTML)}`)
          inner_block_window4.append(div_window4)
       inner_block4.append(div)
       input_block.value = Number(input_block.value) + 75
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +90)

}
function del4(){
  input_block.value = Number(input_block.value) - 75
  input_vat_block.value = input_vat_block.value - 15
  input_total_block.value =(Number(input_total_block.value) - 90)
}
function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button5 = document.querySelector('#switch_data5')
inner_button5.addEventListener('click',fn5)
let inner_block5 = document.querySelector('#inner')
let inner_block_window5 = document.querySelector('#inner_window')
function fn5(e){
 
  let add_block5=e.target.parentNode
   let text =add_block5.querySelector('.txt13')
   let price =add_block5.querySelector('.txt14')
   let text_window =add_block5.querySelector('.txt13')
   let price_window =add_block5.querySelector('.txt14')
   
   let div =document.createElement('div')
   let button_remove5 =document.createElement('input')
       button_remove5.type='button'
       button_remove5.addEventListener('click',rem)
       button_remove5.addEventListener('click',s)
       button_remove5.addEventListener('click',del5)
       button_remove5.value='-'
       button_remove5.style.width='20px'
       button_remove5.style.background='rgb(179, 128, 34)'
       button_remove5.style.border='none'
       button_remove5.style.marginLeft='20px'
       button_remove5.style.marginRight="10px"
       button_remove5.style.borderRadius="20px"
       button_remove5.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove5)
       div.append(`${price.innerHTML}`)
           // блок 2
           let div_window5 =document.createElement('div')
           div_window5.append(`${text_window.innerHTML}`)     
           div_window5.append(`${Number(price_window.innerHTML)}`)
           inner_block_window5.append(div_window5)
       inner_block5.append(div)
       input_block.value = Number(input_block.value) + 20
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24)
}
function del5(){
  input_block.value = Number(input_block.value) - 20
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
}
function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button6 = document.querySelector('#switch_data6')
inner_button6.addEventListener('click',fn6)
let inner_block6 = document.querySelector('#inner')
let inner_block_window6 = document.querySelector('#inner_window')
function fn6(e){
 
  let add_block6=e.target.parentNode
   let text =add_block6.querySelector('.txt15')
   let price =add_block6.querySelector('.txt16')
   let text_window =add_block6.querySelector('.txt15')
   let price_window =add_block6.querySelector('.txt16')
   
   let div =document.createElement('div')
   let button_remove6 =document.createElement('input')
       button_remove6.type='button'
       button_remove6.addEventListener('click',rem)
       button_remove6.addEventListener('click',s)
       button_remove6.addEventListener('click',del6)
       button_remove6.value='-'
       button_remove6.style.width='20px'
       button_remove6.style.background='rgb(179, 128, 34)'
       button_remove6.style.border='none'
       button_remove6.style.marginLeft='20px'
       button_remove6.style.marginRight="10px"
       button_remove6.style.borderRadius="20px"
       button_remove6.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove6)
       div.append(`${price.innerHTML}`)
             // блок 2
             let div_window6 =document.createElement('div')
             div_window6.append(`${text_window.innerHTML}`)     
             div_window6.append(`${Number(price_window.innerHTML)}`)
             inner_block_window6.append(div_window6)
       inner_block6.append(div)
       input_block.value = Number(input_block.value) + 20
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24)

}
function del6(){
  input_block.value = Number(input_block.value) - 20
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
}
function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button7 = document.querySelector('#switch_data7')
inner_button7.addEventListener('click',fn7)
let inner_block7 = document.querySelector('#inner')
let inner_block_window7 = document.querySelector('#inner_window')
function fn7(e){
 
  let add_block7=e.target.parentNode
   let text =add_block7.querySelector('.txt17')
   let price =add_block7.querySelector('.txt18')
   let text_window =add_block7.querySelector('.txt17')
   let price_window =add_block7.querySelector('.txt18')
   
   let div =document.createElement('div')
   let button_remove7 =document.createElement('input')
       button_remove7.type='button'
       button_remove7.addEventListener('click',rem)
       button_remove7.addEventListener('click',s)
       button_remove7.addEventListener('click',del7)
       button_remove7.value='-'
       button_remove7.style.width='20px'
       button_remove7.style.background='rgb(179, 128, 34)'
       button_remove7.style.border='none'
       button_remove7.style.marginLeft='20px'
       button_remove7.style.marginRight="10px"
       button_remove7.style.borderRadius="20px"
       button_remove7.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove7)
       div.append(`${price.innerHTML}`)
         // блок 2
         let div_window7 =document.createElement('div')
         div_window7.append(`${text_window.innerHTML}`)     
         div_window7.append(`${Number(price_window.innerHTML)}`)
         inner_block_window7.append(div_window7)
       inner_block7.append(div)
       input_block.value = Number(input_block.value) + 20
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24)

}
function del7(){
  input_block.value = Number(input_block.value) - 20
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
  
}
function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button8 = document.querySelector('#switch_data8')
inner_button8.addEventListener('click',fn8)
let inner_block8 = document.querySelector('#inner')
let inner_block_window8 = document.querySelector('#inner_window')
function fn8(e){
 
  let add_block8=e.target.parentNode
   let text =add_block8.querySelector('.txt19')
   let price =add_block8.querySelector('.txt20')
   let text_window =add_block8.querySelector('.txt19')
   let price_window =add_block8.querySelector('.txt20')
   
   let div =document.createElement('div')
   let button_remove8 =document.createElement('input')
       button_remove8.type='button'
       button_remove8.addEventListener('click',rem)
       button_remove8.addEventListener('click',s)
       button_remove8.addEventListener('click',del8)
       button_remove8.value='-'
       button_remove8.style.width='20px'
       button_remove8.style.background='rgb(179, 128, 34)'
       button_remove8.style.border='none'
       button_remove8.style.marginLeft='20px'
       button_remove8.style.marginRight="10px"
       button_remove8.style.borderRadius="20px"
       button_remove8.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove8)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window8 =document.createElement('div')
        div_window8.append(`${text_window.innerHTML}`)     
        div_window8.append(`${Number(price_window.innerHTML)}`)
        inner_block_window8.append(div_window8)
       inner_block8.append(div)
       input_block.value = Number(input_block.value) + 20
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24)

}
function del8(){
  input_block.value = Number(input_block.value) - 20
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
}
function rem(e){
e.target.parentNode.remove()
}
// new button

let inner_button9 = document.querySelector('#switch_data9')
inner_button9.addEventListener('click',fn9)
let inner_block9 = document.querySelector('#inner')
let inner_block_window9 = document.querySelector('#inner_window')
function fn9(e){
 
  let add_block9=e.target.parentNode
   let text =add_block9.querySelector('.txt21')
   let price =add_block9.querySelector('.txt22')
   let text_window =add_block9.querySelector('.txt21')
   let price_window =add_block9.querySelector('.txt22')
   
   let div =document.createElement('div')
   let button_remove9 =document.createElement('input')
       button_remove9.type='button'
       button_remove9.addEventListener('click',rem)
       button_remove9.addEventListener('click',s)
       button_remove9.addEventListener('click',del9)
       button_remove9.value='-'
       button_remove9.style.width='20px'
       button_remove9.style.background='rgb(179, 128, 34)'
       button_remove9.style.border='none'
       button_remove9.style.marginLeft='20px'
       button_remove9.style.marginRight="10px"
       button_remove9.style.borderRadius="20px"
       button_remove9.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove9)
       div.append(`${price.innerHTML}`)
         // блок 2
         let div_window9 =document.createElement('div')
         div_window9.append(`${text_window.innerHTML}`)     
         div_window9.append(`${Number(price_window.innerHTML)}`)
         inner_block_window9.append(div_window9)
       inner_block9.append(div)
       input_block.value = Number(input_block.value) + 20 
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24) 

}
function del9(){
  input_block.value = Number(input_block.value) - 20
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
}
function rem(e){
e.target.parentNode.remove()
}

// block 10

let inner_button10 = document.querySelector('#switch_data10')
inner_button10.addEventListener('click',fn10)
let inner_block10 = document.querySelector('#inner')
let inner_block_window10 = document.querySelector('#inner_window')
function fn10(e){
 
  let add_block10=e.target.parentNode
   let text =add_block10.querySelector('.txt23')
   let price =add_block10.querySelector('.txt24')
   let text_window =add_block10.querySelector('.txt23')
   let price_window =add_block10.querySelector('.txt24')
   
   let div =document.createElement('div')
   let button_remove10 =document.createElement('input')
       button_remove10.type='button'
       button_remove10.addEventListener('click',rem)
       button_remove10.addEventListener('click',s)
       button_remove10.addEventListener('click',del10)
       button_remove10.value='-'
       button_remove10.style.width='20px'
       button_remove10.style.background='rgb(179, 128, 34)'
       button_remove10.style.border='none'
       button_remove10.style.marginLeft='20px'
       button_remove10.style.marginRight="10px"
       button_remove10.style.borderRadius="20px"
       button_remove10.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove10)
       div.append(`${price.innerHTML}`)
         // блок 2
         let div_window10 =document.createElement('div')
         div_window10.append(`${text_window.innerHTML}`)     
         div_window10.append(`${Number(price_window.innerHTML)}`)
         inner_block_window10.append(div_window10)
       inner_block10.append(div)
       input_block.value = Number(input_block.value) + 150
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +180)

}
function del10(){
  input_block.value = Number(input_block.value) - 150
  input_vat_block.value = input_vat_block.value - 30
  input_total_block.value =(Number(input_total_block.value) - 180)
}
function rem(e){
e.target.parentNode.remove()
}
// block 11

let inner_button11 = document.querySelector('#switch_data11')
inner_button11.addEventListener('click',fn11)
let inner_block11 = document.querySelector('#inner')
let inner_block_window11 = document.querySelector('#inner_window')
function fn11(e){
 
  let add_block11=e.target.parentNode
   let text =add_block11.querySelector('.txt25')
   let price =add_block11.querySelector('.txt26')
   let text_window =add_block11.querySelector('.txt25')
   let price_window =add_block11.querySelector('.txt26')
   
   let div =document.createElement('div')
   let button_remove11 =document.createElement('input')
       button_remove11.type='button'
       button_remove11.addEventListener('click',rem)
       button_remove11.addEventListener('click',s)
       button_remove11.addEventListener('click',del11)
       button_remove11.value='-'
       button_remove11.style.width='20px'
       button_remove11.style.background='rgb(179, 128, 34)'
       button_remove11.style.border='none'
       button_remove11.style.marginLeft='20px'
       button_remove11.style.marginRight="10px"
       button_remove11.style.borderRadius="20px"
       button_remove11.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove11)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window11 =document.createElement('div')
       div_window11.append(`${text_window.innerHTML}`)     
       div_window11.append(`${Number(price_window.innerHTML)}`)
       inner_block_window11.append(div_window11)
       inner_block11.append(div)

       input_block.value = Number(input_block.value) + 75
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +90)
}
function del11(){
  input_block.value = Number(input_block.value) - 75
  input_vat_block.value = input_vat_block.value - 15
  input_total_block.value =(Number(input_total_block.value) - 90)
}
function rem(e){
e.target.parentNode.remove()
}
// block 12

let inner_button12 = document.querySelector('#switch_data12')
inner_button12.addEventListener('click',fn12)
let inner_block12 = document.querySelector('#inner')
let inner_block_window12 = document.querySelector('#inner_window')
function fn12(e){
 
  let add_block12=e.target.parentNode
   let text =add_block12.querySelector('.txt27')
   let price =add_block12.querySelector('.txt28')
   let text_window =add_block12.querySelector('.txt27')
   let price_window =add_block12.querySelector('.txt28')
   let div =document.createElement('div')
   let button_remove12 =document.createElement('input')
       button_remove12.type='button'
       button_remove12.addEventListener('click',rem)
       button_remove12.addEventListener('click',s)
       button_remove12.addEventListener('click',del12)
       button_remove12.value='-'
       button_remove12.style.width='20px'
       button_remove12.style.background='rgb(179, 128, 34)'
       button_remove12.style.border='none'
       button_remove12.style.marginLeft='20px'
       button_remove12.style.marginRight="10px"
       button_remove12.style.borderRadius="20px"
       button_remove12.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove12)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window12 =document.createElement('div')
       div_window12.append(`${text_window.innerHTML}`)     
       div_window12.append(`${Number(price_window.innerHTML)}`)
       inner_block_window12.append(div_window12)
       inner_block12.append(div)
       input_block.value = Number(input_block.value) + 75
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +90)

}
function del12(){
  input_block.value = Number(input_block.value) - 75
  input_vat_block.value = input_vat_block.value - 15
  input_total_block.value =(Number(input_total_block.value) - 90)
}
function rem(e){
e.target.parentNode.remove()
}
// block 13

let inner_button13 = document.querySelector('#switch_data13')
inner_button13.addEventListener('click',fn13)
let inner_block13 = document.querySelector('#inner')
let inner_block_window13 = document.querySelector('#inner_window')
function fn13(e){
 
  let add_block13=e.target.parentNode
   let text =add_block13.querySelector('.txt29')
   let price =add_block13.querySelector('.txt30')
   let text_window =add_block13.querySelector('.txt29')
   let price_window =add_block13.querySelector('.txt30')
   
   let div =document.createElement('div')
   let button_remove13 =document.createElement('input')
       button_remove13.type='button'
       button_remove13.addEventListener('click',rem)
       button_remove13.addEventListener('click',s)
       button_remove13.addEventListener('click',del13)
       button_remove13.value='-'
       button_remove13.style.width='20px'
       button_remove13.style.background='rgb(179, 128, 34)'
       button_remove13.style.border='none'
       button_remove13.style.marginLeft='20px'
       button_remove13.style.marginRight="10px"
       button_remove13.style.borderRadius="20px"
       button_remove13.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove13)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window13 =document.createElement('div')
        div_window13.append(`${text_window.innerHTML}`)     
        div_window13.append(`${Number(price_window.innerHTML)}`)
        inner_block_window13.append(div_window13)
       inner_block13.append(div)
       input_block.value = Number(input_block.value) + 200
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +240)

}
function del13(){
  input_block.value = Number(input_block.value) - 200
  input_vat_block.value = input_vat_block.value - 40
  input_total_block.value =(Number(input_total_block.value) - 240)
}
function rem(e){
e.target.parentNode.remove()
}
// block 14

let inner_button14 = document.querySelector('#switch_data14')
inner_button14.addEventListener('click',fn14)
let inner_block14 = document.querySelector('#inner')
let inner_block_window14 = document.querySelector('#inner_window')
function fn14(e){
 
  let add_block14=e.target.parentNode
   let text =add_block14.querySelector('.txt31')
   let price =add_block14.querySelector('.txt32')
   let text_window =add_block14.querySelector('.txt31')
   let price_window =add_block14.querySelector('.txt32')
   
   let div =document.createElement('div')
   let button_remove14 =document.createElement('input')
       button_remove14.type='button'
       button_remove14.addEventListener('click',rem)
       button_remove14.addEventListener('click',s)
       button_remove14.addEventListener('click',del14)
       button_remove14.value='-'
       button_remove14.style.width='20px'
       button_remove14.style.background='rgb(179, 128, 34)'
       button_remove14.style.border='none'
       button_remove14.style.marginLeft='20px'
       button_remove14.style.marginRight="10px"
       button_remove14.style.borderRadius="20px"
       button_remove14.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove14)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window14 =document.createElement('div')
        div_window14.append(`${text_window.innerHTML}`)     
        div_window14.append(`${Number(price_window.innerHTML)}`)
        inner_block_window14.append(div_window14)
       inner_block14.append(div)
       input_block.value = Number(input_block.value) + 85
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +102)

}
function del14(){
  input_block.value = Number(input_block.value) - 85
  input_vat_block.value = input_vat_block.value - 17
  input_total_block.value =(Number(input_total_block.value) - 102)
}
function rem(e){
e.target.parentNode.remove()
}

// block 15

let inner_button15 = document.querySelector('#switch_data15')
inner_button15.addEventListener('click',fn15)
let inner_block15 = document.querySelector('#inner')
let inner_block_window15 = document.querySelector('#inner_window')
function fn15(e){
 
  let add_block15=e.target.parentNode
   let text =add_block15.querySelector('.txt33')
   let price =add_block15.querySelector('.txt34')
   let text_window =add_block15.querySelector('.txt33')
   let price_window =add_block15.querySelector('.txt34')
   
   let div =document.createElement('div')
   let button_remove15 =document.createElement('input')
       button_remove15.type='button'
       button_remove15.addEventListener('click',rem)
       button_remove15.addEventListener('click',s)
       button_remove15.addEventListener('click',del15)
       button_remove15.value='-'
       button_remove15.style.width='20px'
       button_remove15.style.background='rgb(179, 128, 34)'
       button_remove15.style.border='none'
       button_remove15.style.marginLeft='20px'
       button_remove15.style.marginRight="10px"
       button_remove15.style.borderRadius="20px"
       button_remove15.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove15)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window15 =document.createElement('div')
       div_window15.append(`${text_window.innerHTML}`)     
       div_window15.append(`${Number(price_window.innerHTML)}`)
       inner_block_window15.append(div_window15)
       inner_block15.append(div)
       input_block.value = Number(input_block.value) + 20
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +24)

}
function del15(){
  input_block.value = Number(input_block.value) -20 
  input_vat_block.value = input_vat_block.value - 4
  input_total_block.value =(Number(input_total_block.value) - 24)
}
function rem(e){
e.target.parentNode.remove()
}
// block 16

let inner_button16 = document.querySelector('#switch_data16')
inner_button16.addEventListener('click',fn16)
let inner_block16 = document.querySelector('#inner')
let inner_block_window16 = document.querySelector('#inner_window')
function fn16(e){
 
  let add_block16=e.target.parentNode
   let text =add_block16.querySelector('.txt35')
   let price =add_block16.querySelector('.txt36')
   let text_window =add_block16.querySelector('.txt35')
   let price_window =add_block16.querySelector('.txt36')
   
   let div =document.createElement('div')
   let button_remove16 =document.createElement('input')
       button_remove16.type='button'
       button_remove16.addEventListener('click',rem)
       button_remove16.addEventListener('click',s)
       button_remove16.addEventListener('click',del16)
       button_remove16.value='-'
       button_remove16.style.width='20px'
       button_remove16.style.background='rgb(179, 128, 34)'
       button_remove16.style.border='none'
       button_remove16.style.marginLeft='20px'
       button_remove16.style.marginRight="10px"
       button_remove16.style.borderRadius="20px"
       button_remove16.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove16)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window16 =document.createElement('div')
       div_window16.append(`${text_window.innerHTML}`)     
       div_window16.append(`${Number(price_window.innerHTML)}`)
       inner_block_window16.append(div_window16)
       inner_block16.append(div)
       input_block.value = Number(input_block.value) + 500
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) +600)

}
function del16(){
  input_block.value = Number(input_block.value) - 500
  input_vat_block.value = input_vat_block.value - 100
  input_total_block.value =(Number(input_total_block.value) - 600)
}
function rem(e){
e.target.parentNode.remove()
}
// block 17

let inner_button17 = document.querySelector('#switch_data17')
inner_button17.addEventListener('click',fn17)
let inner_block17 = document.querySelector('#inner')
let inner_block_window17 = document.querySelector('#inner_window')
function fn17(e){
 
  let add_block17=e.target.parentNode
   let text =add_block17.querySelector('.txt37')
   let price =add_block17.querySelector('.txt38')
   let text_window =add_block17.querySelector('.txt37')
   let price_window =add_block17.querySelector('.txt38')
   
   let div =document.createElement('div')
   let button_remove17 =document.createElement('input')
       button_remove17.type='button'
       button_remove17.addEventListener('click',rem)
       button_remove17.addEventListener('click',s)
       button_remove17.addEventListener('click',del17)
       button_remove17.value='-'
       button_remove17.style.width='20px'
       button_remove17.style.background='rgb(179, 128, 34)'
       button_remove17.style.border='none'
       button_remove17.style.marginLeft='20px'
       button_remove17.style.marginRight="10px"
       button_remove17.style.borderRadius="20px"
       button_remove17.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove17)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window17 =document.createElement('div')
        div_window17.append(`${text_window.innerHTML}`)     
        div_window17.append(`${Number(price_window.innerHTML)}`)
        inner_block_window17.append(div_window17)
       inner_block17.append(div)
       input_block.value = Number(input_block.value) + 90
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) + 108)

}
function del17(){
  input_block.value = Number(input_block.value) - 90
  input_vat_block.value = input_vat_block.value - 18
  input_total_block.value =(Number(input_total_block.value) - 108)
}
function rem(e){
e.target.parentNode.remove()
}
// block 18

let inner_button18 = document.querySelector('#switch_data18')
inner_button18.addEventListener('click',fn18)
let inner_block18 = document.querySelector('#inner')
let inner_block_window18 = document.querySelector('#inner_window')
function fn18(e){
 
  let add_block18=e.target.parentNode
   let text =add_block18.querySelector('.txt39')
   let price =add_block18.querySelector('.txt40')
   let text_window =add_block18.querySelector('.txt39')
   let price_window =add_block18.querySelector('.txt40')
   let div =document.createElement('div')
   let button_remove18 =document.createElement('input')
       button_remove18.type='button'
       button_remove18.addEventListener('click',rem)
       button_remove18.addEventListener('click',s)
       button_remove18.addEventListener('click',del18)
       button_remove18.value='-'
       button_remove18.style.width='20px'
       button_remove18.style.background='rgb(179, 128, 34)'
       button_remove18.style.border='none'
       button_remove18.style.marginLeft='20px'
       button_remove18.style.marginRight="10px"
       button_remove18.style.borderRadius="20px"
       button_remove18.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove18)
       div.append(`${price.innerHTML}`)
        // блок 2
        let div_window18 =document.createElement('div')
        div_window18.append(`${text_window.innerHTML}`)     
        div_window18.append(`${Number(price_window.innerHTML)}`)
        inner_block_window18.append(div_window18)
       inner_block18.append(div)
       input_block.value = Number(input_block.value) + 75
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) + 90)
      }
function del18(){
  input_block.value = Number(input_block.value) - 75
  input_vat_block.value = input_vat_block.value - 15
  input_total_block.value =(Number(input_total_block.value) - 90)
}
function rem(e){
e.target.parentNode.remove()
}
// block 19

let inner_button19 = document.querySelector('#switch_data19')
inner_button19.addEventListener('click',fn19)
let inner_block19 = document.querySelector('#inner')
let inner_block_window19 = document.querySelector('#inner_window')
function fn19(e){
 
  let add_block19=e.target.parentNode
   let text =add_block19.querySelector('.txt41')
   let price =add_block19.querySelector('.txt42')
   let text_window =add_block19.querySelector('.txt41')
   let price_window =add_block19.querySelector('.txt42')
   
   let div =document.createElement('div')
   let button_remove19 =document.createElement('input')
       button_remove19.type='button'
       button_remove19.addEventListener('click',rem)
       button_remove19.addEventListener('click',s)
       button_remove19.addEventListener('click',del19)
       button_remove19.value='-'
       button_remove19.style.width='20px'
       button_remove19.style.background='rgb(179, 128, 34)'
       button_remove19.style.border='none'
       button_remove19.style.marginLeft='20px'
       button_remove19.style.marginRight="10px"
       button_remove19.style.borderRadius="20px"
       button_remove19.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove19)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window19 =document.createElement('div')
       div_window19.append(`${text_window.innerHTML}`)     
       div_window19.append(`${Number(price_window.innerHTML)}`)
       inner_block_window19.append(div_window19)
       inner_block19.append(div)
       input_block.value = Number(input_block.value) + 200
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) + 240)
}
function del19(){
  input_block.value = Number(input_block.value) - 200
  input_vat_block.value = input_vat_block.value - 40
    input_total_block.value =(Number(input_total_block.value) - 240)
}
function rem(e){
e.target.parentNode.remove()
}

// block 20

let inner_button20 = document.querySelector('#switch_data20')
inner_button20.addEventListener('click',fn20)
let inner_block20 = document.querySelector('#inner')
let inner_block_window20 = document.querySelector('#inner_window')
function fn20(e){
 
  let add_block20=e.target.parentNode
   let text =add_block20.querySelector('.txt43')
   let price =add_block20.querySelector('.txt44')
   let text_window =add_block20.querySelector('.txt43')
   let price_window =add_block20.querySelector('.txt44')
   
   let div =document.createElement('div')
   let button_remove20 =document.createElement('input')
       button_remove20.type='button'
       button_remove20.addEventListener('click',rem)
       button_remove20.addEventListener('click',s)
       button_remove20.addEventListener('click',del20)
       button_remove20.value='-'
       button_remove20.style.width='20px'
       button_remove20.style.background='rgb(179, 128, 34)'
       button_remove20.style.border='none'
       button_remove20.style.marginLeft='20px'
       button_remove20.style.marginRight="10px"
       button_remove20.style.borderRadius="20px"
       button_remove20.style.padding="2px"
       
       div.append(`${text.innerHTML}`)
       div.append(button_remove20)
       div.append(`${price.innerHTML}`)
       // блок 2
       let div_window20 =document.createElement('div')
       div_window20.append(`${text_window.innerHTML}`)     
       div_window20.append(`${Number(price_window.innerHTML)}`)
       inner_block_window20.append(div_window20)
       inner_block20.append(div)
       input_block.value = Number(input_block.value) + 300
       input_vat_block.value = Number(input_block.value) * 0.2
       input_total_block.value = (Number(input_total_block.value) + 360)
}
function del20(){
  input_block.value = Number(input_block.value) - 300
  input_vat_block.value = input_vat_block.value - 60
  input_total_block.value =(Number(input_total_block.value) - 360)
}
function rem(e){
e.target.parentNode.remove()
}






// window.onload = function () {
//     let a = document.getElementById('switch');
//     a.onclick = function() {
//         if (this.innerHTML=='Add') this.innerHTML = 'Close';
//         else this.innerHTML = 'Add';
//         return false;
//     }
// }



















