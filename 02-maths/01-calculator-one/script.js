/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let a = document.getElementById("op-one");
        let b = document.getElementById("op-two");

        let add = Number(a.value)+Number(b.value); {
            alert(add);
        }
        

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let a = document.getElementById("op-one");
        let b = document.getElementById("op-two");

        let sub = Number(a.value)-Number(b.value); {
            alert(sub);
        }
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let a = document.getElementById("op-one");
        let b = document.getElementById("op-two");

        let mul = Number(a.value)*Number(b.value); {
            alert(mul);
        }
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let a = document.getElementById("op-one");
        let b = document.getElementById("op-two");

        let div = Number(a.value)/Number(b.value); {
            alert(div);
        }
    });
})();
