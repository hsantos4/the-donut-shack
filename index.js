'use strict';

const mobileBtn = document.querySelector('.mobile-btn');
const mobileItems = document.querySelector('.mobile-items');
const mobileContainer = document.querySelector('.mobile-container')
const navHeader = document.querySelector('.nav-header');
const mainNav = document.querySelector('.main-nav');
const slideImages = document.querySelectorAll(".slide-images");
const imageContainer = document.querySelector(".slides");
const imgIndexs = [6,7,8,9,10,11,12];

// Optimize imgs


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

// makes the image slider
console.log(slideImages.length)

let i = 0;
function start(){
    i++;
   if (i > slideImages.length-1){
     i = 0;
   }
   imageContainer.style.transform = `translateX(${-i * 100}%)`
 }

 setInterval(start,2000);

