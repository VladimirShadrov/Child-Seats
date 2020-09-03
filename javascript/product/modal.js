const modal = modalWindow();
const modalWindowParent = document.querySelector('.modal__window');
const modalOverlay = document.querySelector('.modal__overlay');
const modalContainer = document.querySelector('.modal');
let counter = 0;

function modalWindow() {

  return {
    create() {
      const html = `
      <div class="modal__window-close"></div>
      <div class="modal__window-img"></div>
      <div class="modal__window-btn-container">
        <button class="modal__window-btn" data-name="btn-prev">
          <img src="img/arrow_back.png" alt="back" data-name="prev-slide">
        </button>
        <button class="modal__window-btn" data-name="btn-next">
          <img src="img/arrow_next.png" alt="" data-name="next-slide">
        </button>
      </div>
      `
      modalWindowParent.insertAdjacentHTML('afterbegin', html);
    },
    insertPhotos() {
      let product = JSON.parse(sessionStorage.getItem('product'));

      product.sliderImg.forEach(img => {
        let image = `<img src="${img}" alt="slide">`;
        modalWindowParent.querySelector('.modal__window-img')
          .insertAdjacentHTML('afterbegin', image);
      });
      let images = Array.from(modalWindowParent.querySelectorAll('.modal__window-img img'));
      images[0].classList.add('active');
    },
    open() {
      modalContainer.classList.remove('hide');
      setTimeout(() => {
        modalOverlay.classList.add('active');
        modalWindowParent.classList.add('active');
      }, 100);
    },
    close() {
      modalOverlay.classList.remove('active');
      modalWindowParent.classList.remove('active');
      setTimeout(() => {
        modalContainer.classList.add('hide');
      }, 400);
    },
    delete() {
      modalWindowParent.innerHTML = '';
    },
    nextSlide(slideNumber, slidesArray) {
      slidesArray.forEach(image => image.classList.remove('active'));
      slidesArray[slideNumber].classList.add('active');
    }
  }
};


modalContainer.addEventListener('click', event => {
  let images = Array.from(modalWindowParent.querySelectorAll('.modal__window-img img'));
  const close = modalWindowParent.querySelector('.modal__window-close');

    if (event.target === close || event.target === modalOverlay) {
    modal.close();
    modal.delete();
  };

  if (event.target.dataset.name === 'next-slide') {
    ++counter;
    if (counter >= images.length) {
      counter = 0;
    };
    modal.nextSlide(counter, images);
  };

  if (event.target.dataset.name === 'prev-slide') {
    --counter;
    if (counter < 0) {
      counter = images.length-1;
    };
    modal.nextSlide(counter, images);
  }
});

