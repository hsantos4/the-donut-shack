'use strict';

const mobileBtn = document.querySelector('.mobile-btn');
const mobileItems = document.querySelector('.mobile-items');
const mobileContainer = document.querySelector('.mobile-container')
const navHeader = document.querySelector('.nav-header');
const mainNav = document.querySelector('.main-nav');


const slideImages = document.querySelectorAll(".slide-images");
const imageContainer = document.querySelector(".slides");

// This is the events page variables

// event one
const eventName = document.querySelector('.eventName');
const eventDate = document.querySelector('.eventDate');
const eventLocation = document.querySelector('.eventLocation');
const eventWeb = document.querySelector('.eventWeb');
// event two
const eventTwoName = document.querySelector('.eventTwoName');
const eventTwoDate = document.querySelector('.eventTwoDate');
const eventTwoLocation = document.querySelector('.eventTwoLocation');
const eventTwoWeb = document.querySelector('.eventTwoWeb');
// eventThree

// eventFour

// eventFive

// eventSix


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
// let options = {
//     root: null,
//     threshold: 0
// }
// const headerObserver = (entries) => {
//      if(!entries.isIntersecting) {
//         navHeader.classList.add('sticky')
//     } else {
//         navHeader.classList.remove('sticky')
//     }
//     console.log(entries)
// }

// const observer = new IntersectionObserver(headerObserver, options);
// observer.observe(mainNav);
// This is the end of the sticky navigation

// makes the image slider
// let i = 0;
// function start(){
//     i++;
//    if (i > slideImages.length-1){
//      i = 0;
//    }
//    imageContainer.style.transform = `translateX(${-i * 100}%)`
//  }

//  setInterval(start,2000);




// Events page
function Events(name, date, location, website) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.website = website;
}

const event1 = new Events("Rumba on The Lumber", "March 5th", "Lumberton, NC", "https://rumbaonthelumber.com/")
const event2 = new Events("Doko Ribfest", "March 12th", "Blythewood, SC", "https://blythewoodribfest.com/")
const event3 = new Events("Food Truck Festival of America", "April 9th", "Columbia, SC", "https://www.foodtruckfestivalsofamerica.com/")
const event4 = new Events("Hippie Festival", "May 7th - 8th", "Salisbury, NC", "http://www.hippiefest.org/")
const event5 = new Events("Laurel Fest", "May 13th - 14th", "Laurel, NC", "https://laurelfestnc.com/upcoming-events")
const event6 = new Events("Hokefest", "June 3rd - 10th", "Raeford, NC", "https://festivalnet.com/53067/Raeford-North-Carolina/Food-Festivals/Hokefest")





function eventOneInfo() {
    eventName.textContent = event1.name;
    eventDate.textContent = event1.date;
    eventLocation.textContent = event1.location;
    eventWeb.textContent = event1.website;
}
function eventTwoInfo() {
    eventTwoName.textContent = event2.name;
    eventTwoDate.textContent = event2.date;
    eventTwoLocation.textContent = event2.location;
    eventTwoWeb.textContent = event2.website;
}
function eventThreeInfo() {
    eventThreeName.textContent = event3.name;
    eventThreeDate.textContent = event3.date;
    eventThreeLocation.textContent = event3.location;
    eventThreeWeb.textContent = event3.website;
}
function eventFourInfo() {
    eventFourName.textContent = event4.name;
    eventFourDate.textContent = event4.date;
    eventFourLocation.textContent = event4.location;
    eventFourWeb.textContent = event4.website;
}
function eventFiveInfo() {
    eventFiveName.textContent = event5.name;
    eventFiveDate.textContent = event5.date;
    eventFiveLocation.textContent = event5.location;
    eventFiveWeb.textContent = event5.website;
}
function eventSixInfo() {
    eventSixName.textContent = event6.name;
    eventSixDate.textContent = event6.date;
    eventSixLocation.textContent = event6.location;
    eventSixWeb.textContent = event6.website;
}


eventOneInfo();
eventTwoInfo();