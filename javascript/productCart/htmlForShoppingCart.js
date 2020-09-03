// Отрисовка блока "Ваша корзина"

// В корзине есть товары
function renderBlockYourShoppingCart() {
  const html = `
    <div class="product-cart__wrapper-title">
      <div class="product-cart__wrapper-title-img">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div class="product-cart__wrapper-title-text">
        <h3>Ваша корзина</h3>
      </div>
    </div>
    <div class="product-cart__product-wrapper"></div>  
    <div class="product-cart__total-container">
      <div class="product-cart__total-title">итого: </div>
      <span class="product-cart__total-text">28 120</span>
      <span class="product-cart__total-currency">&#8381;</span>
    </div>
    <div class="product-cart__button-buy-container">
      <button class="product-cart__button-buy">Купить</button>
    </div>

  `;
  shoppingCartWrapper.insertAdjacentHTML('afterbegin', html);
};

function addShoppingCartItems(arr) {
  let html;
  const itemsContainer = document.querySelector('.product-cart__product-wrapper');
  arr.forEach(item => {
    html = `
    <div class="product-cart__product-container">
      <div class="product-cart__block">
        <div class="product-cart__product-img">
          <img src="${item.img}" alt="image">
        </div>
        <div class="product-cart__product-description">
          <h3>${item.model}</h3>
          <div class="product-cart__product-description-text">${item.forWho}</div>
        </div>
      </div>
      <div class="product-cart__block">
        <div class="product-cart__block-count-container">
          <div class="product-cart__block-count-item" data-sign="minus"></div>
          <div class="product-cart__block-count-item product-cart__block-count-item-value">1</div>
          <div class="product-cart__block-count-item" data-sign="plus"></div>
        </div>
        <div class="product-cart__block-price">
          <div class="product-cart__block-price-cross"></div>
          <span class="product-cart__block-price-value">${item.price}</span>
          <span class="product-cart__block-price-currency">&#8381;</span>
        </div>
      </div>
      <div class="product-cart__delete">
        <i class="fa fa-trash" aria-hidden="true" style="font-size: 30px;"></i>
      </div>
    </div>
  `
    itemsContainer.insertAdjacentHTML('beforeend', html);
  });
}

// Отрисовка блока "Ваша корзина" если корзина пуста
function renderEmptySoppingCart() {
  const html = `
    <div class="product-cart__wrapper-title">
      <div class="product-cart__wrapper-title-img">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div class="product-cart__wrapper-title-text">
        <h3>Ваша корзина</h3>
      </div>
    </div>
    <div class="product-cart__is-empty">Ваша корзина пуста</div>
  `;
  shoppingCartWrapper.insertAdjacentHTML('afterbegin', html);
};

// Отрисовка блока "Ваша корзина" с благодарностью за покупку
function thankForPurchase() {
  const html = `
    <div class="product-cart__wrapper-title">
      <div class="product-cart__wrapper-title-img">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div class="product-cart__wrapper-title-text">
        <h3>Ваша корзина</h3>
      </div>
    </div>
    <div class="product-cart__is-empty">Благодарим за покупку!</div>
    <p class="product-cart__text">В ближайшее время с Вами свяжется наш курьер для обсуждения деталей доставки.</p>
    <button class="product-cart__button-to-main">Вернуться на главную</button>
  `;
  shoppingCartWrapper.insertAdjacentHTML('afterbegin', html);
};

// Очистка блока "Ваша корзина"

function clearShoppingCartBlock() {
  shoppingCartWrapper.innerHTML = '';
}
