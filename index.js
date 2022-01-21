'use strict';

const mobileBtn = document.querySelector('.mobile-btn');
const mobileItems = document.querySelector('.mobile-items');
const mobileContainer = document.querySelector('.mobile-container')
const navHeader = document.querySelector('.nav-header');
const mainNav = document.querySelector('.main-nav');

const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');
const imgArr = [0, 1, 2, 3, 4, 5];

// Mobile click down
mobileBtn.addEventListener('click', () =>  {
    if (mobileContainer.classList.contains('hidden')) {
        mobileContainer.classList.remove('hidden')
    } else {
        mobileContainer.classList.add('hidden');
    }
});
// This is the end of drop down menu



// This is going to make the navigation stick to the top of th document
let options = {
    root: null,
    threshold: 0
}
const headerObserver = (entries) => {
     if(!entries.isIntersecting) {
        navHeader.classList.add('sticky')
    } else {
        navHeader.classList.remove('sticky')
    }
    console.log(entries)
}

const observer = new IntersectionObserver(headerObserver, options);
observer.observe(mainNav);
// This is the end of the sticky navigation

// 

// This will make a random number that help determine what image is shown
function getRandomNumber() {
    return Math.floor(Math.random() * 6);
}