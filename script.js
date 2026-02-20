const allLinks = document.querySelectorAll("a.button");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // remove active class from both buttons
    allLinks.forEach((l) => l.classList.remove("active"));

    // add active class to the clicked one
    link.classList.add("active");
  });
});
const menuOpenbutton = document.querySelector("#menu-open-button");
const menuClosebutton = document.querySelector("#menu-close-button");
menuOpenbutton.addEventListener("click",() =>{
    document.body.classList.toggle("show-mobile-menu");
});
menuClosebutton.addEventListener("click",() => menuOpenbutton.click ());


//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  
  loop: true,
  grabCursor:true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView: 1
    },
    768:{
      slidesPerView: 1
    },
    1024:{
      slidesPerView: 1
    },
  }

 
});