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

// Add the script on the  click the menu is created


mobileBtn.addEventListener('click', openMobileMenu);
 

// creates and displays the mobile menu when 
function openMobileMenu() {

    // Trying to create the mobile menu 
    //  let mobileContainerDiv = document.createElement("div");
    //  mobileContainerDiv.classList.add("mobile-container", "hidden");
    

    if (mobileContainer.classList.contains('hidden')) {
        mobileContainer.classList.remove('hidden')
    } else {
        mobileContainer.classList.add('hidden');
    }



 }


 
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



class Events {
    constructor(name, date, location, website) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.website = website;
    }

}


// Adding details for the site components
const event1 = new Events("Charlotte Police Department", "Jan. 30th", "601 E Trade St")

const event2 = new Events("Ardmore @ the trail", "Feb. 4th", "321 E Park Rd.")

const event3 = new Events("Tyler Herndon Thin Blue Line Memorial Foundation", "Feb. 18th", "Belmont, NC", "Facebook Page")

const event4 = new Events("Test", "Nc", "Feb. 4", "Website url")

const event5 = new Events("This is a", "SC", "Tuesday", "instagram")




// This creates the url that will take them to the page
const event1Link = "#";

const event2Link = "#";

const event3Link = "https://www.facebook.com/TylerHerndonMemorialFoundation?mibextid=LQQJ4d";

const event4Link = "#";

const event5Link = "#";



eventOneInfo();
eventTwoInfo();
eventThreeInfo();
eventFourInfo();
eventFiveInfo();



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
