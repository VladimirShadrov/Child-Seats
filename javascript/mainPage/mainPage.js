const mainPage = document.querySelector('.main-page');

// Отрисовка блока "Презентация" (левый и правый блоки)

function renderBlockPresentation() {
  const html = `
  <!--  Секция "Презентация"  -->
  <div class="presentation">
    <div class="presentation__container">

      <!--  Секция "Презентация" - левый блок  -->

      <div class="presentation__left-block">
        <div class="presentation-slider__container"></div>
      </div>

      <!--  // Секция "Презентация" - левый блок  -->

      <!-- _________________________________________________________________________________________ -->

      <!--  Секция "Презентация" - правый блок  -->

      <div class="presentation__right-block">
        <div class="why-us">
          <h2>Почему детские автокресла выгодно покупать у нас?</h2>
          <p class="why-us__text">
            В нашем магазине представлен тщательно отобранный ассортимент автомобильных кресел как недорогих, так и
            наиболее известных производителей. Все модели можно посмотреть и примерить с ребенком. Мы даем гарантию
            и
            являемся официальным дилером всех представленных на сайте брендов.
          </p>
          <div class="why-us__advantages">
            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Успешно работаем с 1999 года</h3>
                <p class="advantages-item__text-text">
                  Предоставляем сертификаты и гарантию на все товары.
                </p>
              </div>
            </div>

            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Доставим бесплатно в день заказа</h3>
                <p class="advantages-item__text-text">
                  Предоставляем возможность примерить и выбрать из 3-х кресел.
                </p>
              </div>
            </div>

            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-plane" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Доставим Ваше кресло в любой город</h3>
                <p class="advantages-item__text-text">
                  Отправка во многие города РФ за наш счет.
                </p>
              </div>
            </div>

            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-globe" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Имеем филиалы в регионах России</h3>
                <p class="advantages-item__text-text">
                  В каждом филиале всегда в наличии большой выбор моделей и расцветок.
                </p>
              </div>
            </div>

            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-cc-mastercard" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Много вариантов оплаты товара</h3>
                <p class="advantages-item__text-text">
                  В том числе в кредит, наличными, онлайн и по платежным картам.
                </p>
              </div>
            </div>

            <div class="why-us__advantages-item">
              <div class="advantages-item__icon">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
              </div>
              <div class="advantages-item__text">
                <h3 class="advantages-item__text-title">Работаем без выходных</h3>
                <p class="advantages-item__text-text">
                  Удобный режим работы в любой день недели.
                </p>
              </div>
            </div>
          </div>
          <button class="why-us__btn">Перейти в каталог</button>
        </div>
      </div>

      <!--  // Секция "Презентация" - правый блок  -->

    </div>
  </div>
  <!--  // Секция "Презентация"  -->
  `
  mainPage.insertAdjacentHTML('afterbegin', html)


};

renderBlockPresentation();

// Отрисовка секции "Товары"

function renderSectionProducts() {
  const html = `
  <!--  Секция "Товары"  -->
  <section class="products">
    <div class="products__content" style="padding: 30px 0;">
      <div class="products__title">
        <h2>Марки детских автомобильных кресел, представленных в нашем магазине</h2>
        <p class="products__info" style="text-align: justify;">
          Мы предлагаем Вам только качественные и безопасные автомобильные сиденья для детей в широком ассортименте по
          выгодным ценам. Наряду с самыми надежными детскими автокреслами с Isofix у нас представлена недорогая, но
          проверенная и сертифицированная продукция, обеспечивающая хорошую защиту и удобство ребенка в автомобиле.
          Наша
          компания состоит в числе лучших дилеров многих популярных европейских брендов, таких как Britax Römer,
          Recaro
          и Cybex.
        </p>
        <p class="products__info-bold" style="font-weight: bold; margin: 20px 0;">
          Обращайтесь в наш магазин. Позаботьтесь об удобстве ребенка в путешествиях и безопасности в дорожных
          происшествиях!
        </p>
      </div>

      <div class="products__container">

        <div class="products__item">
          <div class="products__item-img">
            <img src="img/products/recaro.jpg" alt="recaro" data-name="recaro">
          </div>
          <div class="products__item-description">
            <h3>RECARO</h3>
            <p class="products__item-country" style="text-align: center; color: rgb(110, 110, 110);">Германия</p>
            <p class="products__item-info">
              Продукция Recaro надежна, престижна и очень удобна для детей. Она полностью соответствуют уровню
              всемирно известного производителя автосидений. Одно из главных достоинств Recaro - инновационная легко
              чистящаяся
              обивка.
            </p>
          </div>
          <div class="products__border"></div>
          <div class="products__item-btn">
            <button data-name="recaro">Смотреть в каталоге</button>
          </div>
        </div>


        <div class="products__item">
          <div class="products__item-img">
            <img src="img/products/britax_romer.jpg" alt="romer" data-name="romer">
          </div>
          <div class="products__item-description">
            <h3 style="text-transform: uppercase;">Britax Römer</h3>
            <p class="products__item-country" style="text-align: center; color: rgb(110, 110, 110);">Германия</p>
            <p class="products__item-info">
              Продукция Britax Römer - одна из самых безопасных, престижных и популярных. Модельный ряд очень широк,
              изделия отличаются хорошей функциональностью и качественными материалами отделки со множеством
              расцветок.
            </p>
          </div>
          <div class="products__border"></div>
          <div class="products__item-btn">
            <button data-name="romer">Смотреть в каталоге</button>
          </div>
        </div>


        <div class="products__item">
          <div class="products__item-img">
            <img src="img/products/sybex.jpg" alt="cybex" data-name="cybex">
          </div>
          <div class="products__item-description">
            <h3>CYBEX</h3>
            <p class="products__item-country" style="text-align: center; color: rgb(110, 110, 110);">Германия</p>
            <p class="products__item-info">
              Приверженцы марки Cybex беспокоятся не только о максимальной безопасности своего чада, но и о
              функциональных возможностях изделия. Вся продукция в широком модельном ряду Cybex является разумным
              выбором современных родителей.
            </p>
          </div>
          <div class="products__border"></div>
          <div class="products__item-btn">
            <button data-name="cybex">Смотреть в каталоге</button>
          </div>
        </div>


        <div class="products__item">
          <div class="products__item-img">
            <img src="img/products/heyner.jpg" alt="heyner" data-name="heyner">
          </div>
          <div class="products__item-description">
            <h3>HEYNER</h3>
            <p class="products__item-country" style="text-align: center; color: rgb(110, 110, 110);">Германия</p>
            <p class="products__item-info">
              Соответствие европейским нормам безопасности, доступная цена наряду с достойным качеством изготовления и
              материалов - все это делает продукцию Heyner выгодной, безопасной и удобной как для ребенка, так и для
              родителей.
            </p>
          </div>
          <div class="products__border"></div>
          <div class="products__item-btn">
            <button data-name="heyner">Смотреть в каталоге</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  //  Секция "Товары"  -->
  `

  mainPage.insertAdjacentHTML('beforeend', html);

};

renderSectionProducts();

