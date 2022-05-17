const headerMenu = document.querySelector('.header__menu');
const bikesMenu = document.querySelector('.bikes__menu_type_mob')
const gradientsCardsContainers = document.querySelectorAll('.gradients__cards');
const gradientName = document.querySelector('.bikes__gradient');
const gradientsCardsContainer1 = gradientsCardsContainers[0];
const gradientsCardsContainer2 = gradientsCardsContainers[1];
const highwayCardsContainer = document.querySelector('.bikes__cards_type_highway');
const gravelCardsContainer = document.querySelector('.bikes__cards_type_gravel');
const ttCardsContainer = document.querySelector('.bikes__cards_type_tt');
const headerButton = document.querySelector('.header__button');
const gravelBtns = document.querySelectorAll('.bikes__menu-button_type_gravel');
const ttBtns = document.querySelectorAll('.bikes__menu-button_type_tt');
const highwayBtns = document.querySelectorAll('.bikes__menu-button_type_highway');
const submitBtn = document.querySelector('.footer__submit-button');
const input = document.querySelector('.footer__input');

const gradientsCardsArr = [
  {
    name: 'Шоссе',
    description: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.',
    pic: 'images/highway-1.png',
    icon: '<path d="M0 0h93.528c2.973 0 4.907 3.13 3.578 5.789l-16 32A4 4 0 0 1 77.528 40H0V0Z" fill="#24B47E"/><path d="m16 28 8.39-11.386c1.65-2.24 5.024-2.153 6.557.168l6.225 9.423A4 4 0 0 0 40.509 28H66" stroke="#fff" stroke-width="2"/>'
  },
  {
    name: 'Грэвел',
    description: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.',
    pic: 'images/highway-2.png',
    icon: '<path d="M0 0h93.528c2.973 0 4.907 3.13 3.578 5.789l-16 32A4 4 0 0 1 77.528 40H0V0Z" fill="#24B47E"/><path d="m16 28 11.443-3.961a4 4 0 0 1 3.042.175l6.686 3.215a4 4 0 0 0 2.48.325l11.137-2.119a4 4 0 0 1 1.427-.012L66 28" stroke="#fff" stroke-width="2"/>'
  },
  {
    name: 'ТТ',
    description: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.',
    pic: 'images/highway-3.png',
    icon: '<path d="M0 0h93.528c2.973 0 4.907 3.13 3.578 5.789l-16 32A4 4 0 0 1 77.528 40H0V0Z" fill="#24B47E"/><path d="M16 28h50" stroke="#fff" stroke-width="2"/>'
  }
];

headerButton.addEventListener('click', () => {
  headerButton.classList.toggle('header__button_clicked')
  headerMenu.classList.toggle('header__menu_visible');
  headerMenu.style.height = document.documentElement.clientHeight - 180 + 'px';
});

document.addEventListener('click', (e) => {
  const headerMenuLink = e.target.closest('.header__link');
  if (headerMenuLink) {
    headerButton.classList.remove('header__button_clicked');
    headerMenu.classList.remove('header__menu_visible');
    return;
  }
});

///////////////

function createGradientCard(cardNameValue, cardDescriptionValue, cardPicValue, cardIconValue, cardTemplate) {
  const cardTemplateContent = document.querySelector(cardTemplate).content;
  const cardEl = cardTemplateContent.querySelector('.gradients__card').cloneNode(true);
  const cardTitle = cardEl.querySelector('.gradients__title');
  const cardParagraph = cardEl.querySelector('.gradients__par');
  const cardImg = cardEl.querySelector('.gradients__img');
  const cardIcon = cardEl.querySelector('.gradients__icon');
  cardTitle.textContent = cardNameValue;
  cardParagraph.textContent = cardDescriptionValue;
  cardImg.src = cardPicValue;
  cardImg.alt = cardNameValue;
  cardIcon.innerHTML = cardIconValue;

  if (cardNameValue === 'Грэвел') {
    cardTitle.classList.add('gradients__title_hidden');
    cardParagraph.classList.add('gradients__par_hidden');
    cardIcon.classList.add('gradients__icon_hidden');
  }

  return cardEl;
};

function addGradientCard(cardNameValue, cardDescriptionValue, cardPicValue, cardIconValue, cardTemplate, cardsContainer) {
  const cardEl = createGradientCard(cardNameValue, cardDescriptionValue, cardPicValue, cardIconValue, cardTemplate);
  cardsContainer.append(cardEl);
};

gradientsCardsArr.forEach((i) => { addGradientCard(i.name, i.description, i.pic, i.icon, '#gradient-template', gradientsCardsContainer1) });
gradientsCardsArr.forEach((i) => { addGradientCard(i.name, i.description, i.pic, i.icon, '#gradient-template-mob', gradientsCardsContainer2) });


function connectSections(btn) {
  const closestContainer = btn.closest('.gradients')
  const gradientsTitleValue = closestContainer.querySelector('.gradients__title').textContent;
  console.log(gradientsTitleValue)
  switch (gradientsTitleValue) {
    case "Грэвел":
      highwayBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      ttBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      gravelBtns.forEach(el => {
        el.classList.add('bikes__menu-button_active');
      })

      gravelCardsContainer.classList.add('bikes__cards_visible');
      highwayCardsContainer.classList.remove('bikes__cards_visible');
      ttCardsContainer.classList.remove('bikes__cards_visible');
      gradientName.innerText = 'Грэвел';
      getVisibleContainer();
      break;
    case "Шоссе":
      gravelBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      ttBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      highwayBtns.forEach(el => {
        el.classList.add('bikes__menu-button_active');
      })

      highwayCardsContainer.classList.add('bikes__cards_visible');
      gravelCardsContainer.classList.remove('bikes__cards_visible');
      ttCardsContainer.classList.remove('bikes__cards_visible');
      gradientName.innerText = 'Шоссе';
      getVisibleContainer();
      break;

    case "ТТ":
      highwayBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      gravelBtns.forEach(el => {
        el.classList.remove('bikes__menu-button_active');
      })

      ttBtns.forEach(el => {
        el.classList.add('bikes__menu-button_active');
      })

      ttCardsContainer.classList.add('bikes__cards_visible');
      highwayCardsContainer.classList.remove('bikes__cards_visible');
      gravelCardsContainer.classList.remove('bikes__cards_visible');
      gradientName.innerText = 'ТТ';
      getVisibleContainer();
      break;
  }
}


document.addEventListener('click', (e) => {
  const leftButton = e.target.closest('.gradients__button_type_left');
  if (leftButton) {
    const gradientsSection = leftButton.closest('.gradients');
    const gradientsCardsContainer = gradientsSection.querySelector('.gradients__cards')
    const gradientsCards = gradientsCardsContainer.querySelectorAll('.gradients__card');
    gradientsCardsContainer.prepend(gradientsCards[gradientsCards.length-1]);
    Array.from(gradientsCards).slice(0, gradientsCards.length-1).forEach(el => {
      el.querySelector('.gradients__title').classList.add('gradients__title_hidden');
      el.querySelector('.gradients__par').classList.add('gradients__par_hidden');
      el.querySelector('.gradients__icon').classList.add('gradients__icon_hidden');
    })
    gradientsCards[gradientsCards.length-1].querySelector('.gradients__title').classList.remove('gradients__title_hidden');
    gradientsCards[gradientsCards.length-1].querySelector('.gradients__par').classList.remove('gradients__par_hidden');
    gradientsCards[gradientsCards.length-1].querySelector('.gradients__icon').classList.remove('gradients__icon_hidden');
    connectSections(leftButton);
    return;
  }
})

document.addEventListener('click', (e) => {
  const rightButton = e.target.closest('.gradients__button_type_right');
  if (rightButton) {
    const gradientsSection = rightButton.closest('.gradients');
    const gradientsCardsContainer = gradientsSection.querySelector('.gradients__cards')
    const gradientsCards = gradientsCardsContainer.querySelectorAll('.gradients__card');
    gradientsCardsContainer.append(gradientsCards[0]);
        Array.from(gradientsCards).forEach(el => {
      el.querySelector('.gradients__title').classList.add('gradients__title_hidden');
      el.querySelector('.gradients__par').classList.add('gradients__par_hidden');
      el.querySelector('.gradients__icon').classList.add('gradients__icon_hidden');
    })
    gradientsCards[1].querySelector('.gradients__title').classList.remove('gradients__title_hidden');
    gradientsCards[1].querySelector('.gradients__par').classList.remove('gradients__par_hidden');
    gradientsCards[1].querySelector('.gradients__icon').classList.remove('gradients__icon_hidden');
    connectSections(rightButton);
    return;
  }
})

/////////////
document.addEventListener('click', (e) => {
  const bikesOpenButton = e.target.closest('.bikes__open-button');
  if (bikesOpenButton) {
    bikesMenu.classList.toggle('bikes__menu_opened');
    return;
  }
});

function makeVisibleBikes(cont1, cont2, cont3, btn1, btn2) {
  cont1.classList.add('bikes__cards_visible');
  cont2.classList.remove('bikes__cards_visible');
  cont3.classList.remove('bikes__cards_visible');
  btn1.classList.remove('bikes__menu-button_active');
  btn2.classList.remove('bikes__menu-button_active');
}

document.addEventListener('click', (e) => {
  const bikesButton = e.target.closest('.bikes__menu-button');
  if (bikesButton) {
    e.preventDefault();
    const bikesButtonValue = bikesButton.textContent;
    const bikesMenuCont = bikesButton.closest('.bikes__menu');
    const ttBtn = bikesMenuCont.querySelector('.bikes__menu-button_type_tt');
    const gravelBtn = bikesMenuCont.querySelector('.bikes__menu-button_type_gravel');
    const highwayBtn = bikesMenuCont.querySelector('.bikes__menu-button_type_highway');
    bikesButton.classList.add('bikes__menu-button_active');
    switch (bikesButtonValue) {
      case 'Шоссе':
        makeVisibleBikes(highwayCardsContainer, gravelCardsContainer, ttCardsContainer, ttBtn, gravelBtn);
        gradientName.innerText = 'Шоссе';
        break;
      case 'Грэвел':
        makeVisibleBikes(gravelCardsContainer, highwayCardsContainer, ttCardsContainer, highwayBtn, ttBtn);
        gradientName.innerText = 'Грэвел';
        break;
      case 'TT':
        makeVisibleBikes(ttCardsContainer, gravelCardsContainer, highwayCardsContainer, highwayBtn, gravelBtn);
        gradientName.innerText = 'TT';
        break;
      default:
        highwayBtn.classList.add('bikes__menu-button_active');
        break;
    }
    bikesMenu.classList.remove('bikes__menu_opened');
  }
});

document.addEventListener('click', e => {
  if (document.documentElement.scrollWidth <= 768) {
  const bikesContainer = e.target.closest('.bikes__cards');
    if (bikesContainer) {
      const bikesCards = bikesContainer.querySelectorAll('.bikes__card');
      bikesContainer.append(bikesCards[0]);
      bikesCards[0].classList.add('bikes__card_hidden');
      bikesCards[1].classList.remove('bikes__card_hidden');
    }
  }
});

/////////////

input.addEventListener('click', () => {
  submitBtn.classList.add('footer__submit-button_visible');
  submitBtn.removeAttribute('disabled');
})

submitBtn.addEventListener('click', () => {
  document.querySelector('.footer__message').classList.add('footer__message_visible');
  input.removeAttribute('placeholder');
  input.setAttribute('disabled', true);
  submitBtn.classList.remove('footer__submit-button_visible');
})
////////////
document.addEventListener('click', (e) => {
  const switcher = e.target.closest('.switcher__button');
  if (switcher) {
    const page = document.querySelector('.page');
    switcher.classList.toggle('switcher__button_type_animated');
    page.classList.toggle('page_theme_dark');
    return;
  }
});
