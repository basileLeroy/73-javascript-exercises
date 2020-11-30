
/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    // Making a function (function) on click (this is called a callback, as it reacts only when calling on it) 
    document.querySelector('#run').addEventListener("click", function () {


        // Adding new function inside the function (is also a variable) wit 2 parameters: error and articles
        window.lib.getPosts(function (error, articles) {
            console.log(error, articles);
        });
        
        // the first and second parameters are set (in lib.getPost) and regognise what info to return inside those newly created parameters
    });

})();