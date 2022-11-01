// FETCHING ELEMENTS

const burgerIcon = document.querySelector(".container__nav__burger-menu");
const mobileMenu = document.querySelector(".container__nav__box");

// Function which show our mobile menu
const showMobileMenu = () => {
  mobileMenu.classList.toggle("show");
};

// LISTENERS

burgerIcon.addEventListener("click", showMobileMenu);
