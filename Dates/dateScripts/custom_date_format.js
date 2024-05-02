"use strict";

let currentTime = new Date();

console.log(formatDate(currentTime));

function formatDate(currentDate){
    let month = currentDate.getMonth();
    let dayNumber = currentDate.getDate();
    let year = currentDate.getFullYear();
    let weekdayNumber = currentDate.getDay();

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   
    
    return `${dayNumber}-${monthsArray[month]}-${year} (${daysArray[weekdayNumber]})`;

}