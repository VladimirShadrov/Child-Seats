let activeTab = sessionStorage.getItem('activeTab') || 'recaro';

function setActiveTab(brand) {
  catalogTabs.forEach(tab => {
    tab.closest('div').classList.remove('active')
  });
  
  let tab = catalogTabs.find(tab => tab.dataset.name === brand)
  tab.closest('div').classList.add('active');
};

setActiveTab(activeTab);


function renderCatalogElements(brand) {
  switch(brand) {
    case 'recaro': {
      renderCatalogContainer(recaroAdvantages);
      renderCatalogItems(recaro);
      break;
    }
    case 'romer': {
      renderCatalogContainer(romerAdvantages);
      renderCatalogItems(romer);
      break;
    }
    case 'cybex': {
      renderCatalogContainer(cybexAdvantages);
      renderCatalogItems(cybex);
      break;
    }
    default: {
      renderCatalogContainer(heynerAdvantages);
      renderCatalogItems(heyner);
    }
  };

};

renderCatalogElements(activeTab);

document.querySelector('.catalog__header-container').addEventListener('click', tabHendler);

function tabHendler(event) {
  sessionStorage.setItem('activeTab', event.target.dataset.name);
  activeTab = sessionStorage.getItem('activeTab');
  setActiveTab(activeTab);
  document.querySelector('.catalog__main-container').remove();
  renderCatalogElements(activeTab);
};

