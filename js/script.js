'use strict';

// Doc elements
const headerEl = document.querySelector('.header');
const btnMobile = document.querySelector('.btn--mobile-nav');
const tabsContainer = document.querySelector('.dest-tabs');
const tabs = document.querySelectorAll('.dest-tab');
const tabsContent = document.querySelectorAll('.main-dest--img-info');

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

