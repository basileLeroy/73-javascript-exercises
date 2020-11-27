/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    const target = document.querySelector("#target");
    let speed = 50;
    let i = 0

    function() {
        if ( i < target.length) {

            target.innerHTML += target.charAt(i);
            i++;
            setTimeout(speed);
        };
    };

})();
