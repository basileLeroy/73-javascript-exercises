/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const action = document.querySelector('#run');
    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    action.addEventListener("click", function() {
        
            if (fruits.includes("apple")) {
                console.log("Yes, it seems that there is an apple amongst us.")
            } else {
                console.log("I have not seen such a marvelous piece of fruit amongst the others...")
            };
        
    })

})();
