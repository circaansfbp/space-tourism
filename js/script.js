'use strict';

// Doc elements
const headerEl = document.querySelector('.header');
const btnMobile = document.querySelector('.btn--mobile-nav');

// Event listeners
// Toggle mobile navigation
btnMobile.addEventListener('click', () => headerEl.classList.toggle('nav-open'));

