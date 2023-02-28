'use strict';

// Slider
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


// Render
const processBlocks = document.querySelector('.process__bocks');

const render = (data) => {
    data.map((item) => {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="process__block block-process">
                <img src="${item.img}" 
                    alt="one" class="block-process__img">
                <div class="block-process__wrap">
                    <div class="block-process__title">
                        ${item.title}
                    </div>
                    <div class="block-process__desc">
                        ${item.desc}
                    </div>
                </div>
            </div>
        `;
        processBlocks.append(element);
    });
};
fetch('http://localhost:3000/data')
    .then((data) => data.json())
    .then((res) => render(res));
