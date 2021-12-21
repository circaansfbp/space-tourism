'use strict';

// Doc elements
const headerEl = document.querySelector('.header');
const btnMobile = document.querySelector('.btn--mobile-nav');
const tabsContainer = document.querySelector('.dest-tabs');
const tabs = document.querySelectorAll('.dest-tab');
const tabsContent = document.querySelectorAll('.main-dest--img-info');
const slideNumbersContainer = document.querySelector('.main-tech--tabs-box');
const slideNumberBtns = document.querySelectorAll('.tech-tab');
const slidesContent = document.querySelectorAll('.main-tech--info-img-box');

// Slider function
const slider = function (slides, axis) {

    // Positions the slides upwards (in the Y axis)
    const hideSlides = function (slds) {
        slds.forEach((s, i) =>
            s.style.transform = `translate${axis}(-${100 * i}%)`
        );
    }

    // Go to a certain slide (according to numbers)
    const goToSlide = function (desc) {

    }

    // Initialization 
    const init = function () {
        hideSlides(slides);
    }

    init();
}

slider(slidesContent, 'Y');





// Event listeners
// Toggle mobile navigation
btnMobile.addEventListener('click', () => headerEl.classList.toggle('nav-open'));

// Tabs
tabsContainer?.addEventListener('click', function (e) {
    const clickedTab = e.target.closest('.dest-tab');

    // Guard clause
    if (!clickedTab) return;

    // Adding active class to clicked tab
    tabs.forEach(tab => tab.classList.remove('active-tab--btn'));
    clickedTab.classList.add('active-tab--btn');

    // Switching tabs
    tabsContent.forEach(tabCont => tabCont.classList.remove('active-tab--info'));
    document.querySelector(`.info-${clickedTab.dataset.tab}`).classList.add('active-tab--info');
});

// Sliders
slideNumbersContainer?.addEventListener('click', function (e) {
    // Guard clause
    if (!e.target.classList.contains('tech-tab')) return;

    let currSlide = document.querySelector('.tech-tab--active').dataset.slide;

    // Adding active class to clicked button
    slideNumberBtns.forEach(btn => btn.classList.remove('tech-tab--active'));
    e.target.classList.add('tech-tab--active');

    // Going to slide
    document.querySelector(`.slide--${currSlide}`)
        .style.transform = 'translateY(-100%)';

    document.querySelector(`.slide--${e.target.dataset.slide}`)
        .style.transform = 'translateY(0)';
});
