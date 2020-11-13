/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", function() {
    

    function getAge(birth) {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
    
        const dob = day + ", " + month + ", " + year;
    
        let today = new Date();
        let x = today.getDay();
        let y = today.getMonth() + 1;
        let z = today.getFullYear();
        
        console.log(dob);
        

        if (y == month && x >= day) return parseInt(z-year);
        if (y == month && x < day) return parseInt(z-year-1);
        if (y > month) return parseInt(z-year);
        if (y < month) return parseInt(z-year-1); 
     
    }

    let age = getAge("dob"); // asks for the const "dob", wich is displayed in in the same way as a date is.
    alert(age);







});
