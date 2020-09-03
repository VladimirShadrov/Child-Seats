// Получить массив товаров из LocalStorage
let goodsFromLS = () => JSON.parse(localStorage.getItem('goods'));


// Добавление события 'click' при клике на кнопке "купить" в разделах "Каталог" и "Карточка товара"
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

// Отрисовка элементов корзины
function drawFullShoppingCart(arr) {
  window.scrollTo(0, 0);
  clearShoppingCartBlock();
  renderBlockYourShoppingCart();
  addShoppingCartItems(arr);
};

function drawEmptySoppingCart() {
  window.scrollTo(0, 0);
  clearShoppingCartBlock();
  renderEmptySoppingCart();
};


// Отрисовать нужную страницу корзины (в зависимости от наличия в ней товара)
function drawCorrectPageShoppingCart(arr) {
  if (arr && arr.length) {
    drawFullShoppingCart(arr);
  }
  
  if (!arr || !arr.length) {
    drawEmptySoppingCart();
  }
};


headerSoppingCartImg.addEventListener('click', function(event) {
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

shoppingCartWrapper.addEventListener('click', function(event) {
  if (event.target.classList.contains('product-cart__button-buy')) {
    sayThankYouForPurchase();
  }

  if (event.target.classList.contains('product-cart__button-to-main')) {
    currentPage = setCurrentPage('mainPage');
    showCurrentPage(currentPage);
  }
});


