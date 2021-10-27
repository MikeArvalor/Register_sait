

let inner_button = document.querySelector('#switch_data')
    inner_button.addEventListener('click',fn)
let inner_block = document.querySelector('#inner')
let subtotal =document.querySelector('.hb4').textContent
let new_subtotal = Number(subtotal)
console.log(new_subtotal)

   function fn(e){
      console.log(e.target.parentNode )
      let add_block=e.target.parentNode
       let text =add_block.querySelector('.txt3')
       let price =add_block.querySelector('.txt4')
       
       
       let div =document.createElement('div')
       let button_remove =document.createElement('input')
           button_remove.type='button'
           button_remove.addEventListener('click',rem)
           button_remove.addEventListener('click',s)
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
      
       div.append(`${Number(price.innerHTML) + new_subtotal}`)
    //    div.innerHTML+=`<span>${price.innerHTML}</span>` 
       inner_block.append(div)
      
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
  function fn1(e){
     console.log(e.target.parentNode )
     let add_block1=e.target.parentNode
      let text =add_block1.querySelector('.txt5')
      let price =add_block1.querySelector('.txt6')
      
      
      let div =document.createElement('div')
      let button_remove1 =document.createElement('input')
          button_remove1.type='button'
          button_remove1.addEventListener('click',rem)
          button_remove1.addEventListener('click',s)
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
      inner_block.append(div)
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
function fn2(e){
 
  let add_block2=e.target.parentNode
   let text2 =add_block2.querySelector('.txt7')
   let price2 =add_block2.querySelector('.txt8')
   
   let div =document.createElement('div')
   let button_remove2 =document.createElement('input')
       button_remove2.type='button'
       button_remove2.addEventListener('click',rem)
       button_remove2.value='-'
       
   div.innerHTML=`${text2.innerHTML}${price2.innerHTML}`
   div.append(button_remove2)
   inner_block2.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
////
let inner_button3 = document.querySelector('#switch_data3')
inner_button3.addEventListener('click',fn3)
let inner_block3 = document.querySelector('#inner')
function fn3(e){
 
  let add_block3=e.target.parentNode
   let text3 =add_block3.querySelector('.txt9')
   let price3 =add_block3.querySelector('.txt10')
   
   let div =document.createElement('div')
   let button_remove3 =document.createElement('input')
       button_remove3.type='button'
       button_remove3.addEventListener('click',rem)
       button_remove3.value='-'
       
   div.innerHTML=`${text3.innerHTML}${price3.innerHTML}`
   div.append(button_remove3)
   inner_block3.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
////
let inner_button4 = document.querySelector('#switch_data4')
inner_button4.addEventListener('click',fn4)
let inner_block4 = document.querySelector('#inner')
function fn4(e){
 
  let add_block4=e.target.parentNode
   let text4 =add_block4.querySelector('.txt11')
   let price4 =add_block4.querySelector('.txt12')
   
   let div =document.createElement('div')
   let button_remove4 =document.createElement('input')
       button_remove4.type='button'
       button_remove4.addEventListener('click',rem)
       button_remove4.value='-'
       
   div.innerHTML=`${text4.innerHTML}${price4.innerHTML}`
   div.append(button_remove4)
   inner_block4.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button5 = document.querySelector('#switch_data5')
inner_button5.addEventListener('click',fn5)
let inner_block5 = document.querySelector('#inner')
function fn5(e){
 
  let add_block5=e.target.parentNode
   let text5 =add_block5.querySelector('.txt13')
   let price5 =add_block5.querySelector('.txt14')
   
   let div =document.createElement('div')
   let button_remove5 =document.createElement('input')
       button_remove5.type='button'
       button_remove5.addEventListener('click',rem)
       button_remove5.value='-'
       
   div.innerHTML=`${text5.innerHTML}${price5.innerHTML}`
   div.append(button_remove5)
   inner_block5.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button6 = document.querySelector('#switch_data6')
inner_button6.addEventListener('click',fn6)
let inner_block6 = document.querySelector('#inner')
function fn6(e){
 
  let add_block6=e.target.parentNode
   let text6 =add_block6.querySelector('.txt15')
   let price6 =add_block6.querySelector('.txt16')
   
   let div =document.createElement('div')
   let button_remove6 =document.createElement('input')
       button_remove6.type='button'
       button_remove6.addEventListener('click',rem)
       button_remove6.value='-'
       
   div.innerHTML=`${text6.innerHTML}${price6.innerHTML}`
   div.append(button_remove6)
   inner_block6.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button7 = document.querySelector('#switch_data7')
inner_button7.addEventListener('click',fn7)
let inner_block7 = document.querySelector('#inner')
function fn7(e){
 
  let add_block7=e.target.parentNode
   let text7 =add_block7.querySelector('.txt17')
   let price7 =add_block7.querySelector('.txt18')
   
   let div =document.createElement('div')
   let button_remove7 =document.createElement('input')
       button_remove7.type='button'
       button_remove7.addEventListener('click',rem)
       button_remove7.value='-'
       
   div.innerHTML=`${text7.innerHTML}${price7.innerHTML}`
   div.append(button_remove7)
   inner_block7.append(div)

}

function rem(e){
e.target.parentNode.remove()
}
/////
let inner_button8 = document.querySelector('#switch_data8')
inner_button8.addEventListener('click',fn8)
let inner_block8 = document.querySelector('#inner')
function fn8(e){
 
  let add_block8=e.target.parentNode
   let text8 =add_block8.querySelector('.txt19')
   let price8 =add_block8.querySelector('.txt20')
   
   let div =document.createElement('div')
   let button_remove8 =document.createElement('input')
       button_remove8.type='button'
       button_remove8.addEventListener('click',rem)
       button_remove8.value='-'
       
   div.innerHTML=`${text8.innerHTML}${price8.innerHTML}`
   div.append(button_remove8)
   inner_block8.append(div)

}

function rem(e){
e.target.parentNode.remove()
}











