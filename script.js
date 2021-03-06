// DOM Variables
const $logoId = document.getElementById('logo-id');
const $mobileHamburgerButton = document.getElementById('mobile-menu-btn');
const $mobileNav = document.getElementById('mobile-nav');
const $closeButton = document.getElementById('close-button');

const $portfolioNavMobile = document.getElementById('portfolio-nav-mobile');
const $aboutNavMobile = document.getElementById('about-nav-mobile');
const $contactNavMobile = document.getElementById('contact-nav-mobile');

const $popupSection = document.getElementById('popup');
const $closeButtonPopup = document.getElementById('close-button-popup');
const $body = document.body;
const $header = document.getElementById('header');
const $main = document.getElementById('main');

const mail = document.getElementById('mail');
const parentMail = mail.parentElement;
const smallMail = parentMail.querySelector('small');
const contactForm = document.getElementById('contact-form');

// Functions
/**
 * Adds and removes classes.
 */
function hideMobileMenu() {
  $mobileNav.classList.remove('mobile-menu-on');
  $mobileNav.classList.add('mobile-menu-off');
  $logoId.classList.remove('mobile-menu-off');
  $mobileHamburgerButton.classList.remove('mobile-menu-off');
}

/**
 * Adds classList.
 * @param {input} input to show the message
 * @param {message} message message to show.
 */
function errorMessage(input, message) {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector('small');
  small.textContent = message;
  small.classList.add('error-message');
}

/**
 * Adds validate email.
 * @param {input} field the field to validate.
 * @return {boolean} if the field is valid.
 */
function validateEmail(field) {
  let valid = false;
  const regex = /^[a-z\d@.\-_]+$/;
  if (regex.test(field)) {
    valid = true;
  }
  return valid;
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

const $worksSection = document.getElementById('works-section');

const ProjectList = [
  {
    title: 'Awsome-Books!',
    description: 'This app create a list of books, naming author and title.',
    descriptionTwo: ' The lis of books is created dynamicly using javascript',
    descriptioThree: ' every time the user add a new book on the Add New Se',
    descriptionFour: 'ction. All the methods and fuctions are separated in ',
    descriptionFive: 'modules and imported to the index.js file.',
    featureImg: 'images/list-awsome.png',
    tecnologies: {
      firstTec: 'CSS',
      secondTec: 'HTML',
      thirdTec: 'JavaScript',
      fourthTec: 'Webpack',
    },
    liveVersion: 'https://kaskmil.github.io/Awsome_Books/',
    sourceCode: 'https://github.com/KaskMIL/Awsome_Books',
  },
  {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups ',
    descriptioThree: 'required. has been the industrys standard',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups required.',
    descriptioThree: ' has been the industrys standard',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups required.',
    descriptioThree: ' has been the industrys standard',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
  {
    title: 'Data Daschboard Healthcare',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups required.',
    descriptioThree: ' has been the industrys standard',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
  {
    title: 'Data Daschboard Healthcare',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups required.',
    descriptioThree: ' has been the industrys standard',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
  {
    title: 'Data Daschboard Healthcare',
    description: 'A daily selection of privately personalized reads;',
    descriptionTwo: ' no accounts or sign-ups required.',
    descriptioThree: ' has been the industrys standar',
    featureImg: 'images/ImgProj.png',
    tecnologies: {
      firstTec: 'html',
      secondTec: 'Bootstrap',
      thirdTec: 'Ruby',
    },
    liveVersion: 'https://kaskmil.github.io/tm_portfolio/',
    sourceCode: 'https://github.com/KaskMIL/tm_portfolio',
  },
];

for (let i = 0; i < ProjectList.length; i += 1) {
  const card = document.createElement('article');
  const count = i;
  if (i === 0) {
    card.classList.add('card', 'card-desktop');
    card.innerHTML = `<img src="${ProjectList[i].featureImg}"
     alt="Main Project image">
                <section class="card-content">
                    <h3>${ProjectList[i].title}</h3>
                    <p>${ProjectList[i].description} 
                    ${ProjectList[i].descriptionTwo}
                    ${ProjectList[i].descriptioThree} 
                    ${ProjectList[i].descriptionFour}
                    ${ProjectList[i].descriptionFive}</p>
                    <ul>
                        <li>${ProjectList[i].tecnologies.firstTec}</li>
                        <li>${ProjectList[i].tecnologies.secondTec}</li>
                        <li>${ProjectList[i].tecnologies.thirdTec}</li>
                        <li>${ProjectList[i].tecnologies.fourthTec}</li>
                    </ul>
                    <a href="#" class="first-btn btn-popup">See Project</a>
                </section>`;
    $worksSection.appendChild(card);
  } else {
    card.classList.add('card', 'card-bg', `card-bg-${count}`);
    card.innerHTML = `
                <h3>${ProjectList[i].title}</h3>
                <p>${ProjectList[i].description} 
                ${ProjectList[i].descriptionTwo}
                ${ProjectList[i].descriptioThree}</p>
                <div class="padd">
                    <ul>
                        <li>${ProjectList[i].tecnologies.firstTec}</li>
                        <li>${ProjectList[i].tecnologies.secondTec}</li>
                        <li>${ProjectList[i].tecnologies.thirdTec}</li>
                    </ul>
                </div>
                <a href="#" class="fullWidth-btn btn-popup">See Project</a>`;
    $worksSection.appendChild(card);
  }
};

const $allButtonsPopup = document.querySelectorAll('.btn-popup');
const titlePopup = document.getElementById('title-popup');
const articlePopup = document.getElementById('article-popup');
const ul = document.createElement('ul');
const sectionContainerPopup = document.createElement('section');
articlePopup.appendChild(ul);
articlePopup.appendChild(sectionContainerPopup);

for (let i = 0; i < $allButtonsPopup.length; i += 1) {
  $allButtonsPopup[i].addEventListener('click', () => {
    titlePopup.innerHTML = ProjectList[i].title;
    ul.innerHTML = `<li>${ProjectList[i].tecnologies.firstTec}</li>
                    <li>${ProjectList[i].tecnologies.secondTec}</li>
                    <li>${ProjectList[i].tecnologies.thirdTec}</li>`;
    sectionContainerPopup.innerHTML = `<div class="img-popup-container">
     <img src="${ProjectList[i].featureImg}" alt="Mobile">
    </div>
    <div class="description-popup">
    <p>${ProjectList[i].description}
    ${ProjectList[i].descriptionTwo}
    ${ProjectList[i].descriptioThree}
    ${ProjectList[i].descriptionFour}</p>
    <ul>
        <li><a target="_blank" rel="noopener" 
        href="${ProjectList[i].liveVersion}">See Live</a> 
        <i class="bi bi-box-arrow-up-right"></i></li>
        <li><a target="_blank" rel="noopener" 
        href="${ProjectList[i].sourceCode}">See Source</a>
        <i class="bi bi-github"></i></li>
    </ul>
    </div>`;
    $popupSection.classList.remove('no-visible');
    $body.classList.add('disable-scroll');
    $header.classList.add('blur');
    $main.classList.add('blur');
  });
};

$closeButtonPopup.addEventListener('click', () => {
  $popupSection.classList.add('no-visible');
  $body.classList.remove('disable-scroll');
  $header.classList.remove('blur');
  $main.classList.remove('blur');
});

// CONTACT FORM VALIDATION
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  smallMail.textContent = '';
  smallMail.classList.remove('error-message');
  if (validateEmail(mail.value)) {
    contactForm.submit();
  } else {
    errorMessage(mail, `Please make sure that in the field mail-adress,
    every caracter is in lowecase ${mail.value}`);
  }
});

// LocalStorage
const formName = document.getElementById('name');
const formText = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const data = {
    name: formName.value,
    email: mail.value,
    message: formText.value,
  };
  localStorage.setItem('userData', JSON.stringify(data));
});

window.addEventListener('load', () => {
  const myData = JSON.parse(localStorage.getItem('userData'));

  formName.value = myData.name;
  formText.value = myData.message;
  mail.value = myData.email;
});

const $resetForm = document.getElementById('reset-btn');

$resetForm.addEventListener('click', () => {
  localStorage.clear();
  formName.value = '';
  mail.value = '';
  formText.value = '';
});
