let menu=document.querySelector('#menu-bars');let navbar=document.querySelector('.navbar');let main2=document.querySelector(".navbar a");menu.onclick=()=>{menu.classList.toggle('fa-times');navbar.classList.toggle('active')}
window.onscroll=()=>{menu.classList.remove('fa-times');navbar.classList.remove('active')}
main2.addEventListener("click",()=>{navbar.classList.remove("active");menu.classList.remove("fa-times")})
const swiper=new Swiper('.swiper',{slidePerView:1,effect:"creative",creativeEffect:{prev:{translate:[0,0,0],},next:{translate:["100%",0,0],},},loop:!0,direction:"horizontal",autoplay:{delay:3000,},speed:400,spaceBetween:100,})