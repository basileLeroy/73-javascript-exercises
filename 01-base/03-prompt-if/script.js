/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


  console.log("Good job!")
  

  
  const question = prompt("Do you want some cake?", "Yes/No");

  if (question == "yes") {
    let congrats = "Congratz!"
    alert(congrats)
  }
  else if (question != "yes") {
    let glutton = "More cake for me then :p !"
    alert(glutton)
  }

})();