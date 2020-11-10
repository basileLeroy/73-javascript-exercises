/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


        let age = prompt("Enter your age", "age");
        let gender = prompt("What is your gender?", "male/female/other");
        let town = prompt("Where do you live?", "town/city");
        

        if (confirm("Age: " + age + " Gender:  " + gender + " Location: " + town + " is that correct?")) {
                alert("Thank you!")

        }

        else {
                alert("What are you doing??");
                location.reload();
        }

        
    


})();
