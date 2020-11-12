/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function number(i) {
    
        if (i > 100) { // added a message when exceeding the max value
            console.log("You went too far...!");
        }
        
            else if (i %3 === 0 && i %5 === 0) {
                console.log(i + ' Fizzbuzz');
            }

            else if (i %3 === 0) {
                console.log(i + ' Fizz');
                
            }
            else if (i%5 === 0) {
                console.log(i + ' Buzz');
            }

            else (i <= 100); { // Max value for the standard message 
                console.log(i);
            }
        
};   

