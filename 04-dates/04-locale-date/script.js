/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    
    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    let hours = addZero(today.getHours());
    let min = addZero(today.getMinutes());
    const time = hours + "h" + min;
    

    let week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";

    let weekday = week[day];

    let oneOf12 = new Array(12);
    oneOf12[0] = "Jan";
    oneOf12[1] = "Feb";
    oneOf12[2] = "Mar";
    oneOf12[3] = "Apr";
    oneOf12[4] = "May";
    oneOf12[5] = "Jun";
    oneOf12[6] = "Jul";
    oneOf12[7] = "Aug";
    oneOf12[8] = "Sep";
    oneOf12[9] = "Oct";
    oneOf12[10] = "Nov";
    oneOf12[11] = "Dec";

    let the12 = oneOf12[month];
    

    const display = weekday + " " + day + " " + the12 + " " + year + ", " + time;
    document.getElementById("target").innerHTML = display;

})();
