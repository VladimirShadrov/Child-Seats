// Функционал слайдера в разделе карточки товара

productItemsContainer.addEventListener('click', function (event) {
  const sliderRow = productItemsContainer.querySelector('.product-card__slider-band');
  let sliderItemWidth = productItemsContainer.querySelector('.product-card__slider-item').getBoundingClientRect().width;
  let activeButton = (event.target.closest('button'));
  let slides = Array.from(productItemsContainer.querySelectorAll('.product-card__slider-item'));
  const tagImgArray = productItemsContainer.querySelectorAll('.product-card__slider-item img');
  let slideImages = getImagesArray(tagImgArray);
  const imageContainer = productItemsContainer.querySelector('.product-card__img');

  if (event.target.closest('button') && event.target.dataset.name === 'next') {
    moveSliderToLeft(sliderRow, sliderItemWidth, activeButton, slides);
  };

  if (event.target.closest('button') && event.target.dataset.name === 'prev') {
    moveSliderToRight(sliderRow, sliderItemWidth, activeButton, slides);
  };

  if (event.target.tagName.toLowerCase() === 'img' && event.target.closest('.product-card__slider-item')) {
    let linkSelectidImage = event.target.getAttribute('src')
    changeMainImage(linkSelectidImage, slideImages, imageContainer);
  }


});

// Передвинуть элементы слайдера влево (показать следующий слайд)

function moveSliderToLeft(sliderBand, width, button, arr) {
  sliderBand.style.transform = `translateX(${-width}px)`;
  button.setAttribute('disabled', 'true');
  
  setTimeout(() => {
    sliderBand.appendChild(arr[0])
    sliderBand.style.transition = '0s';
    sliderBand.style.transform = `translateX(0px)`;
  }, 300);
  
  setTimeout(() => {
    button.removeAttribute('disabled');
    sliderBand.style.transition = '0.3s';
  }, 350);
};

// Передвинуть элементы слайдера вправо (показать предыдущий слайд)

function moveSliderToRight(sliderBand, width, button, arr) {
  button.setAttribute('disabled', 'true');
  sliderBand.style.transition = '0s';
  sliderBand.style.transform = `translateX(${-width}px)`;
  sliderBand.prepend(arr[arr.length-1]);

  setTimeout(() => {
    sliderBand.style.transition = '0.3s';
    sliderBand.style.transform = `translateX(0px)`;
  }, 50);

  setTimeout(() => {
    button.removeAttribute('disabled');
  }, 300);
};

// Получить текущий массив изображений из слайдера

function getImagesArray(arr) {
  let images = [];
  arr.forEach(item => {
    images.push(item.getAttribute('src'));
  });

  return images;
}

// Заменить изображение товара при клике на картинке слайдера

function changeMainImage(imageLink, arr, parent) {
  let selectedImage = arr.find(image => image === imageLink);
  parent.innerHTML = '';
  const imgTag = `<img src="${selectedImage}" alt="image">`;
  parent.insertAdjacentHTML('afterbegin', imgTag);
};
