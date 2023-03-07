'use strict';

// Slider
// const slides   = document.querySelectorAll('.prices__block'),
//     buttonPrev = document.querySelector('.prices__button-prev'),
//     buttonNext = document.querySelector('.prices__button-next');
// let indexSlider = 1;

// const updateSlider = (n) => {
//     if (n > slides.length) {
//         indexSlider = 1;
//     }

//     if (n < 1) {
//         indexSlider = slides.length;
//     }

//     slides.forEach((slide) => {
//         slide.style.display = 'none';
//     });

//     slides[indexSlider - 1].style.display = 'block';
// };
// updateSlider(indexSlider);

// const changeSlide = (n) => {
//     indexSlider += n;
//     updateSlider(indexSlider);
// };

// buttonPrev.addEventListener('click', () => changeSlide(-1));
// buttonNext.addEventListener('click', () => changeSlide(1));

// func obj
// const slides   = document.querySelectorAll('.prices__block'),
//     buttonPrev = document.querySelector('.prices__button-prev'),
//     buttonNext = document.querySelector('.prices__button-next');

// const Slider = (slides, buttonPrev, buttonNext, sliderIndex = 1) => ({
//     slides, buttonPrev, buttonNext, sliderIndex,
//     updateSlider(n) {
//         if (n > this.slides.length) {
//             this.sliderIndex = 1;
//         } else if (n < 1) {
//             this.sliderIndex = this.slides.length;
//         }
//         this.slides.forEach((slide) => slide.style.display = 'none');
//         this.slides[this.sliderIndex - 1].style.display = 'block';
//     },
//     setIndex(n) {
//         this.sliderIndex += n;
//         this.updateSlider(this.sliderIndex);
//     },
//     emit() {
//         this.buttonPrev.addEventListener('click', () => this.setIndex(-1));
//         this.buttonNext.addEventListener('click', () => this.setIndex(1));
//     }
// });

// const newSlider = Slider(slides, buttonPrev, buttonNext);
// newSlider.updateSlider(1);
// newSlider.emit();

// OOP
const slides   = document.querySelectorAll('.prices__block'),
    buttonPrev = document.querySelector('.prices__button-prev'),
    buttonNext = document.querySelector('.prices__button-next');

const Slider = class {
    constructor(slides, buttonPrev, buttonNext, sliderIndex = 1) {
        this.slides = slides;
        this.buttonPrev = buttonPrev;
        this.buttonNext = buttonNext;
        this.sliderIndex = sliderIndex;
    }

    updateSlider(n) {
        if (n > this.slides.length) {
            this.sliderIndex = 1;
        } else if (n < 1) {
            this.sliderIndex = this.slides.length;
        }
        this.slides.forEach((slide) => slide.style.display = 'none');
        this.slides[this.sliderIndex - 1].style.display = 'block';
    }
    setIndex(n) {
        this.sliderIndex += n;
        this.updateSlider(this.sliderIndex);
    }
    emit() {
        this.buttonPrev.addEventListener('click', () => this.setIndex(-1));
        this.buttonNext.addEventListener('click', () => this.setIndex(1));
    }
};

const newSlider = new Slider(slides, buttonPrev, buttonNext);
newSlider.updateSlider(1);
newSlider.emit();

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

// Tabs
const tabWrap  = document.querySelector('.cars__tabs'),
    tabs       = document.querySelectorAll('.cars__tab'),
    carsBlocks = document.querySelectorAll('.cars__block');

const hideBlocks = () => {
    carsBlocks.forEach((block) => {
        block.classList.remove('active');
    });
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });
};

const showBlock = (i = 0) => {
    hideBlocks();
    tabs[i].classList.add('active');
    carsBlocks[i].classList.add('active');
};

showBlock();

const changeTab = (e) => {
    const target = e.target;
    if (target && target.classList.contains('cars__tab')) {
        tabs.forEach((tab, index) => {
            if (tab === target) {
                showBlock(index);
            }
        });
    }
};

tabWrap.addEventListener('click', changeTab);

