/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
        let a = document.getElementById("op-one");
        let b = document.getElementById("op-two");
    

        const performOperation = operation => {
            // perform the operation
            switch (operation) {
                
                case "addition":
                    let add = Number(a.value)+Number(b.value); {
                        alert(add);
                    }; 
                    break;
                
                case "substraction":
                    let sub = Number(a.value)-Number(b.value); {
                        alert(sub);
                    }; 
                    break;
                
                case "multiplication":
                    let mul = Number(a.value)*Number(b.value); {
                        alert(mul);
                    }; 
                    break;
                
                case "division":
                    let div = Number(a.value)/Number(b.value); {
                        alert(div);
                    };
                    break;

            }

    
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
