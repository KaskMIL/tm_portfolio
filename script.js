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


const $worksSection = document.getElementById("works-section");

const ProjectList = [{
  title: "Multi-Post Stories",
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text",
  featureImg: "images/ImgProj.png",
  tecnologies: {
    firstTec: "css",
    secondTec: "html",
    thirdTec: "Bootstrap",
    fourthTec: "Ruby"
  }
},
{title: "Profesional Art Printing Data", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
},
{title: "Data Dashboard Healthcare", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
},
{title: "Website Portfolio", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
},
{title: "Data Daschboard Healthcare", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
},
{title: "Data Daschboard Healthcare", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
},
{title: "Data Daschboard Healthcare", description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", tecnologies: {
  firstTec: "html",
  secondTec: "Bootstrap",
  thirdTec: "Ruby"
}
}];

for(let i = 0; i < ProjectList.length; i++) {
  let card = document.createElement("article");
  let count = i;
  if(i === 0) {
    card.classList.add("card","card-desktop");
    card.innerHTML = `<img src="${ProjectList[i].featureImg}" alt="Main Project image">
                <section class="card-content">
                    <h3>${ProjectList[i].title}</h3>
                    <p>${ProjectList[i].description}</p>
                    <ul>
                        <li>${ProjectList[i].tecnologies.firstTec}</li>
                        <li>${ProjectList[i].tecnologies.secondTec}</li>
                        <li>${ProjectList[i].tecnologies.thirdTec}</li>
                        <li>${ProjectList[i].tecnologies.fourthTec}</li>
                    </ul>
                    <a href="#" class="first-btn">See Project</a>
                </section>`;
      $worksSection.appendChild(card);
  }
  else{
    card.classList.add("card","card-bg",`card-bg-${count}`);
    card.innerHTML = `
                <h3>${ProjectList[i].title}</h3>
                <p>${ProjectList[i].description}</p>
                <div class="padd">
                    <ul>
                        <li>${ProjectList[i].tecnologies.firstTec}</li>
                        <li>${ProjectList[i].tecnologies.secondTec}</li>
                        <li>${ProjectList[i].tecnologies.thirdTec}</li>
                    </ul>
                </div>
                <a href="#" class="fullWidth-btn">See Project</a>`
      $worksSection.appendChild(card);
  }
}
