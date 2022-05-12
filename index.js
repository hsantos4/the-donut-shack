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



// This is going to make the navigation stick to the top of th document
let options = {
    root: null,
    threshold: 0
}
const headerObserver = (entries) => {
     if(!entries.isIntersecting) {
         navHeader.classList.add('sticky');
        console.log(entries)
     } else {
         navHeader.classList.remove('sticky')
     }
    
}

const observer = new IntersectionObserver(headerObserver, options);
observer.observe(navHeader);

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
const event1 = new Events("Laurel Fest", "May 13th - 14th", "Laurel, NC", "laurelfestnc.com")
const event2 = new Events("Hokefest", "June 2- 12th", "Raeford, NC", "HokeFest Facebook Page")
const event3 = new Events("Ethan Allen", "June 15th" ,"Maiden, NC", "Google Directions")
const event4 = new Events("Loftin at Montcross", "June 16th", "Belmont, NC", "loftinatmontcross.com")
const event5 = new Events("Rodeo Polkville", "June 17th - 18th", "polkvillebaptist.com")
// const event6 = new Events("Peak Resources", "June 24th", "Gatonia, NC", "peakresourcesinc.com")


// This creates the url that will take them to the page
const event1Link = "https://laurelfestnc.com/";
const event2Link = "https://www.facebook.com/HokeFest";
const event3Link = "https://www.google.com/search?q=ethan+allen+maiden+nc&client=firefox-b-1-d&sxsrf=ALiCzsZ3_qCZY2CBHVESXYYAEFxV_XROfA%3A1652349799161&ei=Z9t8YtucCaigkPIPy4WH8As&gs_ssp=eJzj4tZP1zcsKapISyk0N2C0UjWosLAwNUtOMjQzNU82M040NbQyqEhKSkwyMzdLTTYxSTYxTzPzEk0tyUjMU0jMyUnNU8hNzEwBUnnJAD3oFto&oq=ethan+allen&gs_lcp=Cgdnd3Mtd2l6EAEYADINCC4QxwEQrwEQsAMQJ0oECEEYAEoECEYYAFAAWABgyAtoAXABeACAAQCIAQCSAQCYAQDIAQHAAQE&sclient=gws-wiz"
const event4Link = "https://www.loftinatmontcross.com/Contact.aspx";
const event5Link = "http://www.polkvillebaptist.com/rodeo";
// const event6Link = "https://peakresourcesinc.com/our-locations/gastonia/";

eventOneInfo();
eventTwoInfo();
eventThreeInfo();
eventFourInfo();
eventFiveInfo();
eventSixInfo();




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

