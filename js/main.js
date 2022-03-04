const swiper = new Swiper(".mySwiper", {
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
});


const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.nav')
let menuOpen = false;
menuBtn.addEventListener('click', () => {

  if(!menuOpen) {
    menu.classList.add('open');
    menuBtn.classList.add('openBtn');
    menuOpen = true;
  } else {
    menu.classList.remove('open');
    menuBtn.classList.remove('openBtn');
    menuOpen = false;
  }
});

