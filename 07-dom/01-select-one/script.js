/* becode/javascript
 *
 * /06-dom/01-select-one/script.js - 6.1: sélection par id
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.querySelector('#target');

    // Made a const from the target
    // called upon the target and entered it's innerHTML to change the input to "owned"
    target.innerHTML = "owned";
})();
