let currentPage = sessionStorage.getItem('currentPage') || 'mainPage';

function showCurrentPage(page) {
  switch (page) {
    case 'mainPage': {
      catalog.classList.add('hide');
      mainPage.classList.remove('hide');
      productCart.classList.add('hide');
      shoppingCart.classList.add('hide');
      break;
    }
    case 'catalog': {
      catalog.classList.remove('hide');
      mainPage.classList.add('hide');
      productCart.classList.add('hide');
      shoppingCart.classList.add('hide');
      break;
    }
    case 'productCart': {
      catalog.classList.add('hide');
      mainPage.classList.add('hide');
      productCart.classList.remove('hide');
      shoppingCart.classList.add('hide');
      let product = JSON.parse(sessionStorage.getItem('product'));
      document.querySelector('.product-card-items__wrapper').innerHTML = '';
      renderProductPage(product);
      renderProductSlider(product.sliderImg, product);
      let link = document.querySelectorAll('.menu .menu__item a')
      link[4].textContent = product.model;
      break
    }
    case 'thankYou': {
      catalog.classList.add('hide');
      mainPage.classList.add('hide');
      productCart.classList.add('hide');
      shoppingCart.classList.remove('hide');
      sayThankYouForPurchase();
      break
    }
    default: {
      catalog.classList.add('hide');
      mainPage.classList.add('hide');
      productCart.classList.add('hide');
      shoppingCart.classList.remove('hide');
      let currentLSGoods = goodsFromLS(); // Актуальный массив с заказаными товарами
      drawCorrectPageShoppingCart(currentLSGoods)    
    }
  }
};

showCurrentPage(currentPage);


function setCurrentPage(page) {
  sessionStorage.setItem('currentPage', page);
  currentPage = sessionStorage.getItem('currentPage');
  return currentPage;
};

function setCurrentTab(tab) {
  sessionStorage.setItem('activeTab', tab);
  let currentTab = sessionStorage.getItem('activeTab');
  return currentTab
};

function renderCatalogPage(page, tab) {
  window.scrollTo(0, 0);

  currentPage = setCurrentPage(page);
  showCurrentPage(currentPage);

  activeTab = setCurrentTab(tab);
  setActiveTab(activeTab);

  document.querySelector('.catalog__main-container').remove();
  renderCatalogElements(activeTab);
};


// Переход в соответствующий раздел каталога при клике на эмблему бренда в подвале сайта
footerBrands.addEventListener('click', function (event) {
  event.preventDefault();
  let tab = event.target.closest('a').dataset.name;

  renderCatalogPage('catalog', tab);
});

// Возврат на главную страницу при клике на логотип
logo.addEventListener('click', function () {
  window.scrollTo(0, 0);

  currentPage = setCurrentPage('mainPage');
  showCurrentPage(currentPage);
});

// Переход в раздел "Карточка товара" при клике по кнопке с названием товара в слайдере на главной странице
mainPage.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'button' && event.target.classList.contains('presentation-slider__btn')) {
    const currentProduct = catalogList.find(item => item.id === event.target.dataset.id);
    sessionStorage.setItem('product', JSON.stringify(currentProduct));
    window.scrollTo(0, 0);
    currentPage = setCurrentPage('productCart');
    showCurrentPage(currentPage);
  }
});

// Переход в каталог при клике на кнопку "Перейти в каталог" на главной странице.
document.querySelector('.why-us__btn').addEventListener('click', function () {
  renderCatalogPage('catalog', 'recaro');
});

// Переход на нужный элемент каталога при клике по карточке товара с маркой кресла на главной странице.
document.querySelectorAll('.products__item').forEach(item => {
  item.addEventListener('click', function (event) {
    if (event.target.dataset.name) {
      let tab = event.target.dataset.name;
      renderCatalogPage('catalog', tab);
    }
  });
});

// Навигация между страницами при клике по элементам меню 
menu.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.tagName.toLowerCase() === 'a' && event.target.dataset.name) {
      currentPage = setCurrentPage(event.target.dataset.name);
      showCurrentPage(currentPage);
    };

  });
});


// Отрисовка раздела с описанием товара при клике на карточке товара в разделе "Каталог"
catalog.addEventListener('click', function (event) {
  let item
  if (event.target.closest('.catalog__item-container') && event.target.closest('.catalog__item-container').dataset.id && !event.target.classList.contains('catalog__item-buy')) {
    let target = event.target.closest('.catalog__item-container');
    let id = target.dataset.id;
    item = catalogList.find(i => i.id === id);
    sessionStorage.setItem('product', JSON.stringify(item));
    window.scrollTo(0, 0);
    currentPage = setCurrentPage('productCart');
    showCurrentPage(currentPage);
  };
});






