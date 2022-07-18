//When Click Button name (Card Cart)
let btnCardCart= document.getElementById('btnhead');
let hh=document.getElementById("null")
btnCardCart.addEventListener("click",()=>{
    secondPage.classList.toggle("secondPage-show");
})

// in section
let price1=document.getElementById('price1');
let price2=document.getElementById('price2');
let price3=document.getElementById('price3');
let num1= 10 ;
let num2 = 15;
let num3 = 8 ;

const THEfun=()=>{
    price1.innerHTML=`${num1} $`
    price2.innerHTML=`${num2} $`
    price3.innerHTML=`${num3} $`
}

const THEfun2=()=>{

    let btnS1=document.getElementById('btnS1');
    let btnS2=document.getElementById('btnS2');
    let btnS3=document.getElementById('btnS3');
    let card1=document.getElementById('section1');
    let card2=document.getElementById('section2');
    let card3=document.getElementById('section3');
    let msg=document.getElementById('msg');
    let msg2=document.getElementById('msg2');
    let msg3=document.getElementById('msg3');
    let total=document.getElementById('total')
    btnS1.addEventListener("click",()=>{
        card1.style.display="flex"
        btnS1.innerHTML="done"
        btnS1.setAttribute("disabled","disabled")
        msg.style.animation="msg 1.5s 1 forwards"
        total.style.display="flex"
        hh.style.display="none"
    })
    btnS2.addEventListener("click",()=>{
        card2.style.display="flex"
        btnS2.innerHTML="done"
        btnS2.setAttribute("disabled","disabled")
        msg2.style.animation="msg 1.5s 1 forwards"
        total.style.display="flex"
        hh.style.display="none"
    })
    
    btnS3.addEventListener("click",()=>{
        card3.style.display="flex"
        btnS3.innerHTML="done"
        btnS3.setAttribute("disabled","disabled")
        msg3.style.animation="msg 1.5s 1 forwards"
        total.style.display="flex"
        hh.style.display="none"
    })
    
    // close btn x
    let close1=document.getElementById('close1')
    let close2=document.getElementById('close2')
    let close3=document.getElementById('close3')
    
    close1.addEventListener("click",()=>{
        card1.style.display=""
        btnS1.innerHTML="Buy"
        btnS1.removeAttribute("disabled")
        hh.style.display=""
    })
    close2.addEventListener("click",()=>{
        card2.style.display=""
        btnS2.innerHTML="Buy"
        btnS2.removeAttribute("disabled")
        hh.style.display=""
    })
    
    close3.addEventListener("click",()=>{
        card3.style.display=""
        btnS3.innerHTML="Buy"
        btnS3.removeAttribute("disabled")
        hh.style.display=""
    })
    
    //Price in second page
    let priceINSecondPage1=document.getElementById('priceINSecondPage1');
    let priceINSecondPage2=document.getElementById('priceINSecondPage2');
    let priceINSecondPage3=document.getElementById('priceINSecondPage3');
    let in1=document.getElementById('in1');
    let in2=document.getElementById('in2');
    let in3=document.getElementById('in3');
    priceINSecondPage1.innerHTML=`${in1.value*num1} $`
    priceINSecondPage2.innerHTML=`${in2.value*num2} $`
    priceINSecondPage3.innerHTML=`${in3.value*num3} $`
    //total
    let totalPrice=document.getElementById('totalPrice');
    totalPrice.innerHTML= `Total | <p  class="totalEnd"${(in1.value*num1)+(in2.value*num2)+(in3.value*num3)}</p> $`
}



let mohamed=setInterval(THEfun2,1)
THEfun();

