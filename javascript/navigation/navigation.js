let currentPage = sessionStorage.getItem('currentPage') || 'mainPage';

function showCurrentPage(page) {
  switch(page) {
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

// Переход в соответствующий раздел каталога при клике на эмблему бренда в подвале сайта

footerBrands.addEventListener('click', function(event) {
  event.preventDefault();

  currentPage = setCurrentPage('catalog');
  showCurrentPage(currentPage);

  sessionStorage.setItem('activeTab', event.target.closest('a').dataset.name);
  activeTab = sessionStorage.getItem('activeTab');
  setActiveTab(activeTab);

  document.querySelector('.catalog__main-container').remove();
  renderCatalogElements(activeTab);
});

// Возврат на главную страницу при клике на логотип

logo.addEventListener('click', function() {
  currentPage = setCurrentPage('mainPage');
  showCurrentPage(currentPage);
});

