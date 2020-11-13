/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    const timer = ([hour] + ", " + [min] + ", " + [sec]); 
    const time = ([17] + ", " + [30] + ", " + [0]); //I made a const (time) with a set value (distributed in an array for easier manouvrability) that has the same structure as my other const (timer). so that it can compare in the if statement.
    
    
    

    if (timer < time) {
        document.getElementById("target").innerHTML = "Hello!";
    }

    else {
        document.getElementById("target").innerHTML = "Good evening!";
    }
    console.log(timer);
    console.log(time)

})();
