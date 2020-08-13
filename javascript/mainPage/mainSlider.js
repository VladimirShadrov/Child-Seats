const presentationSliderContainer = document.querySelector('.presentation-slider__container');      
const mainSliderItems = [
  {
    model: 'Recaro Privia',
    description: 'Автолюлька до 1 года',
    id: 'recaro3',
    img: 'img/catalog/recaro/Privia/1.jpg',
    price: '16 200'
  },  
  {
    model: 'Britax Roemer King II LS',
    description: 'Автокресло от 9 месяцев до 4 лет',
    id: 'romer6',
    img: 'img/catalog/romer/king2/4.jpg',
    price: '19 560'
  },  
  {
    model: 'Cybex Pallas M-Fix',
    description: 'Автокресло от 1 до 12 лет',
    id: 'sybex2',
    img: 'img/catalog/cybex/pallas/1.jpg',
    price: '25 480'
  },  
  {
    model: 'Heyner MultiFix TWIST',
    description: 'Автокресло с рождения до 3-4 лет',
    id: 'heyner2',
    img: 'img/catalog/heyner/multifix/3.jpg',
    price: '37 400'
  }  
];

// Отрисовка слайдера в блоке "Презентация" на главной странице

function renderMainSlider() {
  let html;
  mainSliderItems.forEach(item => {
    html = `
        <div class="presentation-slider">
          <div class="presentation-slider__img">
            <img src="${item.img}">
          </div>
          <div class="presentation-slider__title">
            <button class="presentation-slider__btn" data-name="sybex">${item.model}</button>
            <p class="presentation-slider__description">
              ${item.description}
            </p>
          </div>
          <div class="presentation-slider__price-wrapper">
            <div class="presentation-slider__price">
              <span>${item.price} &#8381</span>
            </div>
            <div class="presentation-slider__romb"></div>
          </div>
        </div>
    `
    presentationSliderContainer.insertAdjacentHTML('afterbegin', html);
  });
};

renderMainSlider();

// Функционал слайдера на главной странице

setInterval(() => {
  presentationSliderContainer.lastElementChild.classList.add('active');

  setTimeout(() => {
    presentationSliderContainer.lastElementChild.remove();
    let firstItem = mainSliderItems.shift();
    mainSliderItems.push(firstItem);
    presentationSliderContainer.innerHTML = '';
    renderMainSlider();
  }, 500);
}, 6000);

