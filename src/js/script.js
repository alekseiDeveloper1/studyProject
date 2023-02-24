'use strict';

const slides   = document.querySelectorAll('.prices__block'),
    buttonPrev = document.querySelector('.prices__button-prev'),
    buttonNext = document.querySelector('.prices__button-next');
let indexSlider = 1;

const updateSlider = (n) => {
    if (n > slides.length) {
        indexSlider = 1;
    }

    if (n < 1) {
        indexSlider = slides.length;
    }

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[indexSlider - 1].style.display = 'block';
};
updateSlider(indexSlider);

const changeSlide = (n) => {
    indexSlider += n;
    updateSlider(indexSlider);
};

buttonPrev.addEventListener('click', () => changeSlide(-1));
buttonNext.addEventListener('click', () => changeSlide(1));
