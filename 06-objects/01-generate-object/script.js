/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function() {
    const aboutMe = [
        lastname = "Leroy",
        firstname = "Basile",
        age = "24",
        city = "Gent",
        Country = "chocolate-land",
    ];

    console.log("Hey, I am " + firstname + " " + lastname + ", and I am " + age + " years old. I come from " + city + " and i am a proud citizen of " + Country);
    console.log(aboutMe);

    // your code here
});
