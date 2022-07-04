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




// Events page
function Events(name, date, location, website) {
    this.name = name;
    this.date = date;
    this.location = location;
    this.website = website;
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


// Adding details for the site components
const event1 = new Events("Lumbee Homecoming week", "June 30th - July 2nd", "Lumberton, NC", "Event information")
const event2 = new Events("Cherokee Summer Festival", "July 4th - 9th","Cherokee, NC", "Event information")
const event3 = new Events("NC Peach Festival", "July 15th - 16th", "Candor, NC", "ncpeachfestival.com")
const event4 = new Events("Ardmore at the Trail", "July 29th", "Indian Trail, NC", "ardmoreatthetrail.com")
const event5 = new Events("Loftin at Montcross", "August 5th", "Belmont, NC", "loftinatmontcross.com")
const event6 = new Events("Southern States", "August 6th", "Monroe, NC", "www.southernstates.com")


// This creates the url that will take them to the page
const event1Link = "https://www.lumberton-nc.com/event/lumbee-homecoming-2/2022-06-28/";
const event2Link = "https://visitcherokeenc.com/events/detail/cherokee-summer-carnival/";
const event3Link = "https://www.ncpeachfestival.com/"
const event4Link = "https://www.ardmoreatthetrail.com/contactus";
const event5Link = "https://www.loftinatmontcross.com/Contact.aspx";
const event6Link = "https://www.southernstates.com/farm-store/store-locations/79417";

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

