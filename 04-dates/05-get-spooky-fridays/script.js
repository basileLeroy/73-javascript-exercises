/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function(){

    // your code here
    // get a var for your year: make it a doc.getElementById(""). get a search date var with year var set in the year position in the array
    //console.log(var on exact date);
    
    const year = document.getElementById("year").value;
    let cursedMonth = [];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (let month = 0; month < 12; month++) { // Making a var that tells to go over the months (loop).
        let day = new Date(year, month, 13); // Making a var to tell wich day it has to find in the given year.
        if (day.getDay() == 5) { // Telling that if the variable "day" is the fifth day (getDay[5]) ...
            cursedMonth.push(months[month]); // The input of cursedMonth atm is [], here I push the month that has a fri-13th in it into the cursedMonth var.
        }
    }
    alert(cursedMonth);

});
