/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to be able to get to each word easily, I made a string from the text
    const targetText = document.querySelector('#target');
    const wordText = targetText.innerHTML.split(' ');
    const letterText = targetText.innerHTML.split('');


    // TODO: removing those fixed spans into 'see image' 
    const fontSize = ["10px", "15px", "20px", "25px", "30px"];
    let spanText = [];
    
    
    for (let i = 0; i < letterText.length; i++) {
        let num = Math.floor(Math.random() * 5);
        let wordSize = fontSize[num];

        let span = '<span style="font-size: ' + wordSize + ';">' + letterText[i] + '</span>'
        spanText.push(span);
    };

    targetText.innerHTML = spanText.join('');

})();
