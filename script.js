// DOM Variables
const $logoId = document.getElementById('logo-id');
const $mobileHamburgerButton = document.getElementById('mobile-menu-btn');
const $mobileNav = document.getElementById('mobile-nav');
const $closeButton = document.getElementById('close-button');

const $portfolioNavMobile = document.getElementById('portfolio-nav-mobile');
const $aboutNavMobile = document.getElementById('about-nav-mobile');
const $contactNavMobile = document.getElementById('contact-nav-mobile');

// Functions
function hideMobileMenu() {
  $mobileNav.classList.remove('mobile-menu-on');
  $mobileNav.classList.add('mobile-menu-off');
  $logoId.classList.remove('mobile-menu-off');
  $mobileHamburgerButton.classList.remove('mobile-menu-off');
}

// DOM Manipulation
$mobileHamburgerButton.addEventListener('click', () => {
  $logoId.classList.add('mobile-menu-off');
  $mobileHamburgerButton.classList.add('mobile-menu-off');
  $mobileNav.classList.remove('mobile-menu-off');
  $mobileNav.classList.add('mobile-menu-on');
});

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