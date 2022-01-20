'use strict';

const mobileBtn = document.querySelector('.mobile-btn');
const mobileItems = document.querySelector('.mobile-items');

// This adds 
mobileBtn.addEventListener('click', () =>  {
    if (mobileItems.classList.contains('hidden')) {
        mobileItems.classList.remove('hidden')
    } else {
        mobileItems.classList.add('hidden');
    }
    
})