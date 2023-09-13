const main =document.querySelector(".main-1");

const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const navBar = document.querySelector('.navbar');
const drop = document.querySelector('.backdrop');
const close =document.querySelector('.close');

menu.addEventListener('click',()=>{
navBar.classList.toggle('active');
drop.classList.toggle('active');
})

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
    drop.classList.toggle('active');
})

close.addEventListener('click',()=>{
navBar.classList.remove('active');
drop.classList.remove('active');
menuIcon.classList.remove('bx-x');
})

const h1 = document.querySelector(".head-1");
const h2 = document.querySelector(".head-2");
const h3 = document.querySelector(".head-3");
const h4 = document.querySelector(".head-4");
const h5 = document.querySelector(".head-5");
const h6 = document.querySelector(".head-6");
const h7 = document.querySelector(".head-7");
const h8 = document.querySelector(".head-8");
const l1 = document.querySelector(".login-1");
const l2 = document.querySelector(".login-2");
const l3 = document.querySelector(".login-3");
const l4 = document.querySelector(".login-4");
const l5 = document.querySelector(".login-5");
const l6 = document.querySelector(".login-6");
const l7 = document.querySelector(".login-7");
const l8 = document.querySelector(".login-8");

main.addEventListener("scroll", ()=>{
    console.log(main.scrollTop);
    const unit = main.scrollTop;
    if(unit ==0 && unit<150){
        h1.classList.remove('hide');
        l1.classList.remove('hide');
    }
    else{
        h1.classList.add('hide')
        l1.classList.add('hide');
    }

    if(unit >450 && unit <750){
        h2.classList.add('active')
        l2.classList.add('active')
    }
    else{
        h2.classList.remove('active')
        l2.classList.remove('active')
    }

    if(unit >1100 && unit <1500){
        h3.classList.add('active')
        l3.classList.add('active')
    }
    else{
        h3.classList.remove('active')
        l3.classList.remove('active')
    }

    if(unit >1900 && unit <2200){
        h4.classList.add('active')
        l4.classList.add('active')
    }
    else{
        h4.classList.remove('active')
        l4.classList.remove('active')
    }
    if(unit >2484 && unit <3104){
        h5.classList.add('active')
        l5.classList.add('active')
    }
    else{
        h5.classList.remove('active')
        l5.classList.remove('active')
    }
    if(unit >3250 && unit <3600){
        h6.classList.add('active')
        l6.classList.add('active')
    }
    else{
        h6.classList.remove('active')
        l6.classList.remove('active')
    }
    if(unit >3920 && unit <4520){
        h7.classList.add('active')
        l7.classList.add('active')
    }
    else{
        h7.classList.remove('active')
        l7.classList.remove('active')
    }
    if(unit >4630 && unit <5000){
        h8.classList.add('active')
        l8.classList.add('active')
    }
    else{
        h8.classList.remove('active')
        l8.classList.remove('active')
    }
})

