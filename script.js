$logoId = document.querySelector('#logo-id');
$mobileHamburgerButton = document.querySelector('#mobile-menu-btn');
$mobileNav = document.querySelector('#mobile-nav');
$closeButton = document.querySelector('#close-button');

$portfolioNavMobile = document.querySelector('#portfolio-nav-mobile');
$aboutNavMobile = document.querySelector('#about-nav-mobile');
$contactNavMobile = document.querySelector('#contact-nav-mobile');

$mobileHamburgerButton.addEventListener('click', (e) => {
	$logoId.classList.add('mobile-menu-off');
	$mobileHamburgerButton.classList.add('mobile-menu-off');
	$mobileNav.classList.remove('mobile-menu-off');
	$mobileNav.classList.add('mobile-menu-on');
});

function hideMobileMenu() {
	$mobileNav.classList.remove('mobile-menu-on');
	$mobileNav.classList.add('mobile-menu-off');
	$logoId.classList.remove('mobile-menu-off');
	$mobileHamburgerButton.classList.remove('mobile-menu-off');
}

$closeButton.addEventListener('click', (e) => {
	hideMobileMenu();
});

$portfolioNavMobile.addEventListener('click', (e) => {
	hideMobileMenu();
});

$aboutNavMobile.addEventListener('click', (e) => {
	hideMobileMenu();
});

$contactNavMobile.addEventListener('click', (e) => {
	hideMobileMenu();
});
