// DOM Variables
const $logoId = document.querySelector('#logo-id');
const $mobileHamburgerButton = document.querySelector('#mobile-menu-btn');
const $mobileNav = document.querySelector('#mobile-nav');
const $closeButton = document.querySelector('#close-button');

const $portfolioNavMobile = document.querySelector('#portfolio-nav-mobile');
const $aboutNavMobile = document.querySelector('#about-nav-mobile');
const $contactNavMobile = document.querySelector('#contact-nav-mobile');

$mobileHamburgerButton.addEventListener('click', () => {
  $logoId.classList.add('mobile-menu-off');
  $mobileHamburgerButton.classList.add('mobile-menu-off');
  $mobileNav.classList.remove('mobile-menu-off');
  $mobileNav.classList.add('mobile-menu-on');
});

// Functions
function hideMobileMenu() {
  $mobileNav.classList.remove('mobile-menu-on');
  $mobileNav.classList.add('mobile-menu-off');
  $logoId.classList.remove('mobile-menu-off');
  $mobileHamburgerButton.classList.remove('mobile-menu-off');
}

// DOM Manipulation
$closeButton.addEventListener('click', () => {
  hideMobileMenu();
});

$portfolioNavMobile.addEventListener('click', () => {
  hideMobileMenu();
});

$aboutNavMobile.addEventListener('click', () => {
  hideMobileMenu();
});

$contactNavMobile.addEventListener('click', () => {
  hideMobileMenu();
});