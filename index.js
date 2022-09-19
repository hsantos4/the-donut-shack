'use strict';

const mobileBtn = document.querySelector('.mobile-btn');
const mobileItems = document.querySelector('.mobile-items');
const mobileContainer = document.querySelector('.mobile-container')
const navHeader = document.querySelector('.nav-header');
const mainNav = document.querySelector('.main-nav');
const footerYear = document.querySelector('.footer-year');
const copyRightInfo = document.querySelector('.copyRightInfo');
// const headSection = document.head;


let copyYear = footerYear.innerText = new Date().getFullYear();

// Add the script ag dynamically

// Mobile click down
mobileBtn.addEventListener('click', () =>  {
    if (mobileContainer.classList.contains('hidden')) {
        mobileContainer.classList.remove('hidden')
    } else {
        mobileContainer.classList.add('hidden');
    }
});
// This is the end of drop down menu


footerInfo();

// This is for the copy right year
function footerInfo() {
    copyRightInfo.innerText = "Copyright " + "© " + `${copyYear} ` +  "The Donut Shack." + " All rights reserved";

}



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
const eventThreeName = document.querySelector('.eventThreeName');
const eventThreeDate = document.querySelector('.eventThreeDate');
const eventThreeLocation = document.querySelector('.eventThreeLocation');
const eventThreeWeb = document.querySelector('.eventThreeWeb');
// eventFour
const eventFourName = document.querySelector('.eventFourName');
const eventFourDate = document.querySelector('.eventFourDate');
const eventFourLocation = document.querySelector('.eventFourLocation');
const eventFourWeb = document.querySelector('.eventFourWeb');
// eventFive
const eventFiveName = document.querySelector('.eventFiveName');
const eventFiveDate = document.querySelector('.eventFiveDate');
const eventFiveLocation = document.querySelector('.eventFiveLocation');
const eventFiveWeb = document.querySelector('.eventFiveWeb');
// eventSix
const eventSixName = document.querySelector('.eventSixName');
const eventSixDate = document.querySelector('.eventSixDate');
const eventSixLocation = document.querySelector('.eventSixLocation');
const eventSixWeb = document.querySelector('.eventSixWeb');


class Events {
    constructor(name, date, location, website) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.website = website;
    }

    // Trying to create a method that makes creating the events easier
}


// Adding details for the site components
const event1 = new Events("Rowan County Fair", "Sep. 19th - Sep. 25th", "Salisbury, NC", "rowancountyfair.net")

const event2 = new Events("Oktoberfest", "Sep. 30th - Oct. 1st", "Blythewood, SC", "townofblythewoods.gov")

const event3 = new Events("John Blue Cotton Festival", "October 8th", "Laurinburg, NC", "johnbluefestival.com")

const event4 = new Events("Mint Hill Madness", "October 20th - October 22nd", "Mint Hill, NC", "minthillevents.org")

const event5 = new Events("SC Pecan Festival", "Nov. 5th", "Florence, SC", "scpecanfestival.com")

const event6 = new Events("Warbirds Over Monroe", "November 12th - 13th", "Monroe, NC", "monroenc.org")



// This creates the url that will take them to the page
const event1Link = "http://rowancountyfair.net";

const event2Link = "https://www.townofblythewoodsc.gov/news_detail_T29_R264.php";

const event3Link = "https://www.johnbluefestival.com/schedule-1"

const event4Link = "https://www.minthillevents.org/madness";

const event5Link = "https://scpecanfestival.com"

const event6Link = "https://www.monroenc.org/Departments/Tourism/Warbirds-Over-Monroe-Air-Show/Air-Show-Performers";

eventOneInfo();
eventTwoInfo();
eventThreeInfo();
eventFourInfo();
eventFiveInfo();
eventSixInfo();


// Adds the information to the page

function eventOneInfo() {
    eventName.textContent = event1.name;
    eventDate.textContent = event1.date;
    eventLocation.textContent = event1.location;
    eventWeb.href = event1Link;
    eventWeb.target = "_blank"
    eventWeb.textContent = event1.website;
}
function eventTwoInfo() {
    eventTwoName.textContent = event2.name;
    eventTwoDate.textContent = event2.date;
    eventTwoLocation.textContent = event2.location;
    eventTwoWeb.href = event2Link;
    eventTwoWeb.target = "_blank"
    eventTwoWeb.textContent = event2.website;
}
function eventThreeInfo() {
    eventThreeName.textContent = event3.name;
    eventThreeDate.textContent = event3.date;
    eventThreeLocation.textContent = event3.location;
    eventThreeWeb.href = event3Link;
    eventThreeWeb.target = "_blank"
    eventThreeWeb.textContent = event3.website;
}
function eventFourInfo() {
    eventFourName.textContent = event4.name;
    eventFourDate.textContent = event4.date;
    eventFourLocation.textContent = event4.location;
    eventFourWeb.href = event4Link;
    eventFourWeb.target = "_blank"
    eventFourWeb.textContent = event4.website;
}
function eventFiveInfo() {
    eventFiveName.textContent = event5.name;
    eventFiveDate.textContent = event5.date;
    eventFiveLocation.textContent = event5.location;
    eventFiveWeb.href = event5Link;
    eventFiveWeb.target = "_blank"
    eventFiveWeb.textContent = event5.website;
}
function eventSixInfo() {
    eventSixName.textContent = event6.name;
    eventSixDate.textContent = event6.date;
    eventSixLocation.textContent = event6.location;
    eventSixWeb.href = event6Link;
    eventSixWeb.target = "_blank"
    eventSixWeb.textContent = event6.website;
}

