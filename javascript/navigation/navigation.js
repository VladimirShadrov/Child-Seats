let currentPage = sessionStorage.getItem('currentPage') || 'mainPage';

function showCurrentPage(page) {
  switch (page) {
    case 'mainPage': {
      catalog.classList.add('hide');
      mainPage.classList.remove('hide');
      break;
    }
    case 'catalog': {
      catalog.classList.remove('hide');
      mainPage.classList.add('hide');
      break;
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



