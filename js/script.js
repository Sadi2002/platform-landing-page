// FETCHING ELEMENTS

const burgerIcon = document.querySelector(".container__nav__burger-menu");
const mobileMenu = document.querySelector(".container__nav__box");
const closeBtn = document.querySelector(".close-btn");

// Function which show our mobile menu
const showMobileMenu = () => {
  mobileMenu.classList.toggle("show");
};
const closeMobileMenu = () => {
  mobileMenu.classList.remove("show");
};

// LISTENERS

burgerIcon.addEventListener("click", showMobileMenu);
closeBtn.addEventListener("click", closeMobileMenu);
