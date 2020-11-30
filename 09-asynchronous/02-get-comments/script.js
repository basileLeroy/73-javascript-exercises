  
/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
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
        window.lib.getPosts(function (delay, posts) {

            // We need to access each object inside the made Array called "posts"
            posts.forEach((post) => {
                
                // New callback "getComments". for every ID in each opbect, it will show 2 parameters: error and comments.
                window.lib.getComments(post.id, function(error, comments) {
                    
                    // comments is defined and needs to be added to the object now = Object.assign(target, parameter)
                    result = Object.assign(comments);

                    // console.log(error);
                    // console.log(result);
                    // console.log(comments);

                });
            });
            
            console.log(delay);
            console.log(posts);
            
        });
        
        // the first and second parameters are set (in lib.getPost) and regognise what info to return inside those newly created parameters
    });

})();