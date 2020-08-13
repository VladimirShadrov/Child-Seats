const blockCatalogContent = document.querySelector('.catalog__content');
const catalogTabs = Array.from(document.querySelectorAll('.catalog__header-item h4'));
const footerBrands = document.querySelector('.footer__item-brand__container');
const logo = document.querySelector('.header-logo');




const recaroAdvantages = {
  brand: 'Recaro',
  advantages: 'Немецкая компания Recaro - всемирно известный производитель спортивных автомобильных сидений премиум класса. Вековой опыт, уникальные технологии и солидный авторитет в области безопасности позволили концерну достичь лидирующих позиций и в производстве детских автомобильных кресел. Автокресла Рекаро отличаются от конкурентов непревзойденным современным и эргономичным дизайном, ортопедическими свойствами и функциональностью, свойственными лидеру в производстве спортивных автосидений. Стильный внешний вид креслам Recaro придает и инновационный гипоаллергенный отделочный материал из перфорированной искусственной замши. Он не только приятен на ощупь, но и удобен в процессе эксплуатации, не позволяя ребенку потеть летом и замерзать зимой. Автокресла Recaro предназначены для детей любого возраста, соответствуют самым жестким требованиям безопасности. Если престиж, изысканный дизайн и функциональность для вас не менее важны, чем безопасность, то детские кресла Recaro - правильный выбор!'
};

const romerAdvantages = {
  brand: 'Britax Römer',
  advantages: 'Концерн Britax Roemer занимает лидирующие позиции в мире в области создания и производства детских автокресел. Многие инновационные разработки этого производителя приняты в качестве мировых стандартов. Каждый год детские автокресла Britax Roemer заслуженно признаются одними из самых удобных и безопасных. Автомобильные кресла Бритакс Рёмер разрабатываются для детей всех весовых групп. В каждой модели предусмотрен оптимальный набор систем активной и пассивной безопасности. Инновационные технологии и отменное качество обеспечивают непревзойденную безопасность автокресел Britax Roemer, которым доверяют не только заботливые родители, но и ведущие производители автомобилей. Если вы прежде всего заботитесь о безопасности своего ребенка, но и стильный внешний вид и премиальное качество отделочных материалов имеют для вас большое значение, то выбирайте детское автокресло Britax Römer! Так поступают большинство родителей в России и продукция данного производителя является бесспорным лидером продаж в РФ!'
};

const cybexAdvantages = {
  brand: 'Cybex',
  advantages: 'Немецкая компания Cybex уверенно вышла на рынок детской безопасности в сотрудничестве с креативной чешской студией дизайна. Современный городской стиль, продуманность и функциональность позволили детским автокреслам Cybex (Сайбекс) стать ультрасовременными и инновационными изделиями, которые используют многие знаменитости. Производственные мощности данного производителя, как и у многих других европейских компаний, находятся в Китае. Высокотехнологичные автоматизированные линии и многоступенчатый контроль обеспечивают высокое качество и надежность детских автокресел Cybex. А команда европейских разработчиков и применяемые современные технологии позволили получить продукции Cybex очень хорошие оценки краш-тестов, проведенных такими авторитетными организациями, как ADAC, Warentest и TCS.'
};

const heynerAdvantages = {
  brand: 'Heyner',
  advantages: 'Детские автокресла Heyner (Хейнер), появившись на российском рынке, стремительно завоевали популярность среди потребителей. Связано это с тем, что в них используются материалы и комплектующие известных производителей, стильная мягкая и практичная обивка. Модельный ряд детских автокресел Heyner охватывает все возрастные группы и соответствует Европейским требованиям безопасности ECE 44/04. Наряду с доступными ценами и достойным немецким качеством все это делает изделия Хайнер выгодным приобретением по соотношению цена/качество.'
};


const recaro = [
  {
    brand: 'Recaro',
    id: 'recaro1',
    model: 'Recaro Monza Nova IS Seatfix',
    price: '23 500',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Recaro/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '4 года',
    img: 'img/catalog/recaro/Monza-Nova/7.jpg'
  
  },
  {
    brand: 'Recaro',
    id: 'recaro2',
    model: 'Recaro OptiaFix',
    price: '24 990',
    forWho: 'Автокресло от 9 месяцев до 4 лет',
    production: 'Recaro/Германия',
    group: '1 (от 9 до 18 кг)',
    guarantee: '4 года',
    img: 'img/catalog/recaro/OptiaFix/1.jpg'




  },
  {
    brand: 'Recaro',
    id: 'recaro3',
    model: 'Recaro Privia',
    price: '16 200',
    forWho: 'Автолюлька до 1 года',
    production: 'Recaro/Германия',
    group: '0+ (до 13 кг)',
    guarantee: '4 года',
    img: 'img/catalog/recaro/Privia/1.jpg'




  },
  {
    brand: 'Recaro',
    id: 'recaro4',
    model: 'Recaro Young Sport Hero',
    price: '18 900',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Recaro/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '4 года',
    img: 'img/catalog/recaro/Young-Sport/2.jpg'




  },
  {
    brand: 'Recaro',
    id: 'recaro5',
    model: 'Recaro Monza Nova 2 Seatfix',
    price: '20 900',
    forWho: 'Автокресло от 3 до 12 лет',
    production: 'Recaro/Германия',
    group: '2-3 (от 15 до 36 кг)',
    guarantee: '4 года',
    img: 'img/catalog/recaro/Monza-Nova2/6.jpg'




  }

];


const romer = [
  {
    brand: 'romer',
    id: 'romer1',
    model: 'Britax Roemer Advansafix IV R',
    price: '30 990',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Britax Römer/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/advansafix4/1.jpg'




  },
  {
    brand: 'romer',
    id: 'romer2',
    model: 'Britax Roemer Baby-Safe ² i-Size',
    price: '21 380',
    forWho: 'Автолюлька до 1 года',
    production: 'Britax Römer/Германия',
    group: '0+ (до 13 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/babySafe/3.jpg'




  },
  {
    brand: 'romer',
    id: 'romer3',
    model: 'Britax Roemer Dualfix 2R',
    price: '31 490',
    forWho: 'Автокресло от 3 месяцев до 3-4 лет',
    production: 'Britax Römer/Германия',
    group: '0-1 (от 3 мес до 18 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/dualfix/5.jpg'




  },
  {
    brand: 'romer',
    id: 'romer4',
    model: 'Britax Roemer Evolva 1-2-3 plus',
    price: '18 890',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Britax Römer/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/evolva/7.jpg'




  },
  {
    brand: 'romer',
    id: 'romer5',
    model: 'Britax Roemer Kidfix III S',
    price: '24 890',
    forWho: 'Автокресло от 3 до 12 лет',
    production: 'Britax Römer/Германия',
    group: '2-3 (от 15 до 36 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/kidfix3/4.jpg'




  },
  {
    brand: 'romer',
    id: 'romer6',
    model: 'Britax Roemer King II LS',
    price: '19 560',
    forWho: 'Автокресло от 9 месяцев до 4 лет',
    production: 'Britax Römer/Германия',
    group: '1 (от 9 до 18 кг)',
    guarantee: '24 месяца',
    img: 'img/catalog/romer/king2/4.jpg'




  }
];

const cybex = [
  {
    brand: 'sybex',
    id: 'sybex1',
    model: 'Cybex Cloud Z i-Size',
    price: '26 480',
    forWho: 'Автолюлька до 1 года',
    production: 'Cybex/Германия',
    group: '0+ (до 13 кг)',
    guarantee: '3 года',
    img: 'img/catalog/cybex/cloud/4.jpg'




  },
  {
    brand: 'sybex',
    id: 'sybex2',
    model: 'Cybex Pallas M-Fix',
    price: '25 480',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Cybex/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '3 года',
    img: 'img/catalog/cybex/pallas/1.jpg'




  },
  {
    brand: 'sybex',
    id: 'sybex3',
    model: 'Cybex Sirona M2 i-Size',
    price: '15 230',
    forWho: 'Автокресло с рождения до 3-4 лет',
    production: 'Cybex/Германия',
    group: '0-1 (до 18 кг)',
    guarantee: '3 года',
    img: 'img/catalog/cybex/sirona/3.jpg'




  },
  {
    brand: 'sybex',
    id: 'sybex4',
    model: 'Cybex Solution Z-Fix',
    price: '25 980',
    forWho: 'Автокресло от 3 до 12 лет',
    production: 'Cybex/Германия',
    group: '0-1 (до 18 кг)',
    guarantee: '3 года',
    img: 'img/catalog/cybex/solution/6.jpg'




  }
];

const heyner = [
  {
    brand: 'heyner',
    id: 'heyner1',
    model: 'Heyner MaxiProtect AERO',
    price: '7 900',
    forWho: 'Автокресло от 3 до 12 лет',
    production: 'Heyner/Германия',
    group: '2-3 (от 15 до 36 кг)',
    guarantee: '2 года',
    img: 'img/catalog/heyner/maxiProtect/6.jpg'




  },
  {
    brand: 'heyner',
    id: 'heyner2',
    model: 'Heyner MultiFix TWIST',
    price: '37 400',
    forWho: 'Автокресло с рождения до 3-4 лет',
    production: 'Heyner/Германия',
    group: '0-1 (до 18 кг)',
    guarantee: '2 года',
    img: 'img/catalog/heyner/multifix/3.jpg'




  },
  {
    brand: 'heyner',
    id: 'heyner3',
    model: 'Heyner MultiRelax AERO Fix',
    price: '15 000',
    forWho: 'Автокресло от 1 до 12 лет',
    production: 'Heyner/Германия',
    group: '1-2-3 (от 9 до 36 кг)',
    guarantee: '2 года',
    img: 'img/catalog/heyner/multiRelax/3.jpg'




  },
  {
    brand: 'heyner',
    id: 'heyner4',
    model: 'Heyner SuperProtect ERGO',
    price: '5 200',
    forWho: 'Автолюлька до 1 года',
    production: 'Heyner/Германия',
    group: '0+ (до 13 кг)',
    guarantee: '2 года',
    img: 'img/catalog/heyner/superProtect/2.jpg'




  }
];
