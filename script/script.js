
// var userName = prompt("Enter your name: ")
// var userAge = prompt("What is your age? ")

// if (isNaN(userAge) || userAge < 18) {
//     alert("Sorry, you can not access this market.");
// } else {
//     document.getElementById("userName").innerHTML = userName;
// }

// var userAmount = prompt("How much Bitcoin do you want to buy?")
   

document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is loaded, execute this function

    var userName = prompt("Enter your name:");
    var userAge = prompt("What is your age?");

    if (isNaN(userAge) || userAge < 18) {
        alert("Sorry, you cannot access this market.");
    } else {
        document.getElementById("userName").textContent = userName;
    }

    var userAmount = prompt("How much Bitcoin do you want to buy?");
});
