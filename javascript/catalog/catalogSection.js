const catalog = document.querySelector('.catalog');


function renderProductsCatalog() {
  const html = `
  <div class="catalog__content">

    <section class="catalog__title">
      <h2>Каталог товаров</h2>
      <p style="text-align: justify;">
        В нашем магазине предлагаются детские автоокресла ведущих мировых производителей, тщательно подобранные из
        большого количества представленных на российском рынке моделей и лучшие по соотношению цены и качества, при
        этом главным критерием выбора является соответствие международным нормам и стандартам безопасности. Все
        предлагаемые нашим магазином детские автокресла официально завезены в Россию, имеют сертификаты соответствия и
        гарантию производителя.
      </p>
    </section>

    <div class="catalog__header-container">
      <div class="catalog__header-item">
        <h4 data-name="recaro">RECARO</h4>
      </div>
      <div class="catalog__header-item">
        <h4 data-name="romer">BRITAX RÖMER</h4>
      </div>
      <div class="catalog__header-item">
        <h4 data-name="cybex">CYBEX</h4>
      </div>
      <div class="catalog__header-item">
        <h4 data-name="heyner">HEYNER</h4>
      </div>
    </div>

  </div>
  `
  catalog.insertAdjacentHTML('afterbegin', html);
};

renderProductsCatalog();