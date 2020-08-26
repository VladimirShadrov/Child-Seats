// Отрисовка блока с карточкой товара

function renderProductPage(brandItem) {
  const html = `
      <h2>${brandItem.model}</h2>
      <div class="product-card__container">
        <div class="product-card__item">
          <div class="product-card__img">
            <img src="${brandItem.img}" alt="photo" data-name="main-photo">
        </div>
            <div class="product-card__slider-wrapper">
              <div class="product-card__slider-container">
                <div class="product-card__slider-band"></div>


                <button class="product-card__slider-btn left">
                  <img src="img/arrow_back.png" alt="arrow" data-name="prev">
            </button>
                  <button class="product-card__slider-btn right">
                    <img src="img/arrow_next.png" alt="arrow" data-name="next">
            </button>
          </div>
        </div>
              </div>
              <div class="product-card__item">
                <h2>Доставка и наличие (Москва)</h2>
                <div class="product-card__availability">
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <p>Модель в наличии, курьер доставит <span>завтра</span></p>
                </div>
                <div class="product-card__delivery">
                  <div class="product-card__delivery-item">
                    <i class="fa fa-truck" aria-hidden="true"></i>
                    <p>Доставка внутри МКАД – <span>бесплатно</span></p>
                  </div>
                  <div class="product-card__delivery-item">
                    <i class="fa fa-usd" aria-hidden="true"></i>
                    <p>Доступна рассрочка от 6 до 12 месяцев</p>
                  </div>
                  <div class="product-card__delivery-item">
                    <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    <p>Возврат и обмен - без проблем</p>
                  </div>
                  <div class="product-card__delivery-item">
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                    <p>Различные способы оплаты</p>
                  </div>
                  <div class="product-card__delivery-item">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <p>Лучшая цена</p>
                  </div>
                </div>
                <div class="product-card__price-container">
                  <div class="product-card__price">${brandItem.price} &#8381;</div>
                  <button class="product-card__btn">КУПИТЬ</button>
                </div>
              </div>
            </div>
            <div class="product-card__description-container">
              <div class="product-card__item-descriotion">
                <h2>Описание</h2>
                <p style="text-align: justify;">${brandItem.description}</p>

              </div>
              <div class="product-card__item-specifications">
                <h2 style="margin-bottom: 25px;">Характеристики</h2>
                <div class="specifications__container">
                  <div class="specifications__item">Фирма-производитель</div>
                  <div class="specifications__item">${brandItem.firm}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Группа</div>
                  <div class="specifications__item">${brandItem.group}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Вес</div>
                  <div class="specifications__item">${brandItem.weight}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Способ установки</div>
                  <div class="specifications__item">${brandItem.toPut}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Тип внутренних ремней</div>
                  <div class="specifications__item">${brandItem.beltsType}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Совместимость с Isofix</div>
                  <div class="specifications__item">${brandItem.isofix}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Регулировка высоты подголовника</div>
                  <div class="specifications__item">${brandItem.heightRegulate}</div>
                </div>
                <div class="specifications__container">
                  <div class="specifications__item">Съемный чехол</div>
                  <div class="specifications__item">${brandItem.case}</div>
                </div>
              </div>
            </div>
  `;
  document.querySelector('.product-card-items__wrapper').insertAdjacentHTML('afterbegin', html);

};


// Отрисовка элементов слайдера в блоке с карточкой товара

function renderProductSlider(slides, product) {
  let html
  slides.forEach(slide => {
    html = `
    <div class="product-card__slider-item">
      <img src="${slide}" alt="slide" data-id="${product.id}">
    </div>    
    `
    document.querySelector('.product-card__slider-band').insertAdjacentHTML('afterbegin', html);

  });
};


