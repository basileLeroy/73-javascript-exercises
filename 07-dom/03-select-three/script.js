/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.querySelectorAll('.target');

    // Made a const from the target
    // called upon the target and entered it's innerHTML to change the input to "owned"
    
    target.forEach(element => {
        element.innerHTML = "Owned!"
        console.log(element);
    });
    
    
    
    console.log(target);
})();
