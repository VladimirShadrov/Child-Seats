// Отрисовка блока для презентации продукции

function renderCatalogContainer(parametr) {
  const html = `
    <div class="catalog__main-container">
      <div class="catalog__item-wrapper"></div>

      <h2 style="margin-top: 20px;">Преимущества детских автокресел ${parametr.brand}</h2>
      <p style="text-align: justify;">${parametr.advantages}</p>

    </div>
  `;

  blockCatalogContent.insertAdjacentHTML('beforeend', html);

};


// Отрисовка элементов каталога (карточки товара)

function renderCatalogItems(itemsList) {
  let html
  itemsList.forEach(item => {
    html = `
    <div class="catalog__item-container" data-id="${item.id}">
      <div class="catalog__item">
        <div class="catalog__item-img">
          <img src="${item.img}" alt="recaro">
        </div>
        <h4>${item.model}</h4>
        <div class="catalog__item-price">
          <span>${item.price} &#8381;</span>
        </div>
        <div class="catalog__item-description">
          <span>${item.forWho}</span>
        </div>
        <button class="catalog__item-buy" data-id="${item.id}">Купить</button>
      </div>
      <div class="catalog__item-top-bar">
        <h4 style="color: rgb(0, 255, 0); text-align: center; margin: 7px 0;">Товар в наличии</h4>
        <div class="top-bar__container">
          <div class="top-bar__container-item">Производство</div>
          <div class="top-bar__container-item">${item.production}</div>
        </div>
        <div class="top-bar__container">
          <div class="top-bar__container-item">Группа</div>
          <div class="top-bar__container-item">${item.group}</div>
        </div>
        <div class="top-bar__container">
          <div class="top-bar__container-item">Гарантия</div>
          <div class="top-bar__container-item">${item.guarantee}</div>
        </div>
      </div>
    </div>
    `

    document
    .querySelector('.catalog__item-wrapper')
    .insertAdjacentHTML('beforeend', html);
  });
};

