/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        
        let num = document.getElementById("number").value; // making a var (num) and linking it to the html input bar.
        function x(num) { // creating a function (x) with the var (num).
            if(num <= 1){
                return num;
            }
            else {
                return num * x(num - 1);
            }
        }
        x(document.getElementById("number").value); 

        alert(x(num)); // Be sure to call out the function WITH the var instead of only the var (num).

    });


