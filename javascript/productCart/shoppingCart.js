// Получить массив товаров из LocalStorage
let goodsFromLS = () => JSON.parse(localStorage.getItem('goods'));


// Добавление товара в корзину при клике на кнопке "купить" в разделах "Каталог" и "Карточка товара"
document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('catalog__item-buy') || event.target.classList.contains('product-card__btn')) {
    const currentProduct = catalogList.find(product => product.id === event.target.dataset.id);
    if (!goods.length) {
      addToCart(goods, currentProduct)
    }

    let currentGoods = goodsFromLS();
    let dubleProduct = currentGoods.find(product => product.id === currentProduct.id);

    if (!dubleProduct) {
      addToCart(goods, currentProduct)
    }
    showGoodsValue();
  }
});

// Отобразить количество товаров в корзине на эмблеме корзины
function removeClassHide(el) {
  el.classList.remove('hide');
};

function addClassHide(el) {
  el.classList.add('hide');
};

function showNumberProducts() {
  let currentGoods = JSON.parse(localStorage.getItem('goods'));
  productCounter.textContent = currentGoods.length;
};

if (goods && goods.length) {
  showGoodsValue();
}

function showGoodsValue() {
  removeClassHide(productCounter);
  showNumberProducts();
};

// Добавить товар в корзину
function addToCart(goods, product) {
  goods.push(product);
  localStorage.setItem('goods', JSON.stringify(goods));
};


// Посчитать общую стоимость товара в корзине
function calculateTotalCost() {
  const totalPriceArray = goods.map(item => item.price);
  const totalCost = totalPriceArray.reduce((total, number) => total + number, 0);
  document.querySelector('.product-cart__total-text').textContent = totalCost.toLocaleString();
};


// Отрисовка элементов корзины
function drawFullShoppingCart(arr) {
  window.scrollTo(0, 0);
  clearShoppingCartBlock();
  renderBlockYourShoppingCart();
  addShoppingCartItems(arr);
  calculateTotalCost();
};

function drawEmptySoppingCart() {
  window.scrollTo(0, 0);
  clearShoppingCartBlock();
  renderEmptySoppingCart();
};

// Очистка блока "Ваша корзина"

function clearShoppingCartBlock() {
  shoppingCartWrapper.innerHTML = '';
}

// Отрисовать нужную страницу корзины (в зависимости от наличия в ней товара)
function drawCorrectPageShoppingCart(arr) {
  if (arr && arr.length) {
    drawFullShoppingCart(arr);
  }

  if (!arr || !arr.length) {
    drawEmptySoppingCart();
  }
};

headerSoppingCartImg.addEventListener('click', function (event) {
  let currentLSGoods = goodsFromLS(); // Актуальный массив с заказаными товарами

  if (event.target.classList.contains('header-bascket_counter') || event.target.classList.contains('header-bascket-img')) {
    currentPage = setCurrentPage('shoppingCart');
    showCurrentPage(currentPage);
  }
  drawCorrectPageShoppingCart(currentLSGoods);
});

// Отрисовать блок "Благодарим за покупку" при клике на кнопке "Купить" в разделе "Ваша корзина"
function sayThankYouForPurchase() {
  window.scrollTo(0, 0);
  localStorage.removeItem('goods');
  goods = [];
  addClassHide(productCounter);
  currentPage = setCurrentPage('thankYou');
  clearShoppingCartBlock();
  thankForPurchase();
};


// Функционал обработки товара в корзине:

// Удалить товар из корзины при клике на эмблеме корзины соответствующего товара:
// Найти индекс товара, который требуется удалить из корзины, в общем массиве товаров
function findProductIndex(targetId) {
  let currentProduct = goods.find(item => item.id === targetId);
  let productIndex = goods.indexOf(currentProduct)
  return productIndex;
};

// Удалить товар из текущего массива, передать в LocalStorage новый массив товаров
function deleteProductFromArray(index) {
  goods.splice(index, 1);
  localStorage.setItem('goods', JSON.stringify(goods));
}


function deleteFromShoppingCart(id) {
  let currentProductIndex = findProductIndex(id);
  deleteProductFromArray(currentProductIndex);
  drawCorrectPageShoppingCart(goods);
  showGoodsValue();
  if (!goods.length) {
    addClassHide(productCounter);
  };
};

// Увеличить количество единиц товара в корзине
function addProductValue(product) {
  const catalog = JSON.parse(sessionStorage.getItem('catalogList'));
  const fixedProduct = catalog.find(item => item.id === event.target.dataset.id);
  const fixedCost = fixedProduct.price;

  product.value >= 10 ? product.value
    : ++product.value;

  product.price = fixedCost * product.value;
  event.target.previousElementSibling.textContent = product.value;
  localStorage.setItem('goods', JSON.stringify(goods));
  clearShoppingCartBlock();
  renderBlockYourShoppingCart();
  addShoppingCartItems(goods);
  calculateTotalCost();
};

// Умешьшить количество единиц товара в корзине
function reduceProductValue(product) {
  const catalog = JSON.parse(sessionStorage.getItem('catalogList'));
  const fixedProduct = catalog.find(item => item.id === event.target.dataset.id);
  const fixedCost = fixedProduct.price;

  product.value <= 1 ? product.value
    : --product.value;

  product.price = fixedCost * product.value;
  event.target.nextElementSibling.textContent = product.value;
  localStorage.setItem('goods', JSON.stringify(goods));
  clearShoppingCartBlock();
  renderBlockYourShoppingCart();
  addShoppingCartItems(goods);
  calculateTotalCost();
};


shoppingCartWrapper.addEventListener('click', function (event) {
  const id = event.target.dataset.id;
  const thisProduct = goods.find(item => item.id === event.target.dataset.id);

  if (event.target.classList.contains('product-cart__button-buy')) {
    sayThankYouForPurchase();
  }

  if (event.target.classList.contains('product-cart__button-to-main')) {
    currentPage = setCurrentPage('mainPage');
    showCurrentPage(currentPage);
  }

  if (event.target.closest('.product-cart__delete')) {
    deleteFromShoppingCart(id);
  }

  if (event.target.dataset.sign === 'plus') {
    addProductValue(thisProduct);
  }

  if (event.target.dataset.sign === 'minus') {
    reduceProductValue(thisProduct);
  }
});

