var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Select the img elements
var leftImage = document.querySelector(".img1");
var rightImage = document.querySelector(".img2");

// Set the src attributes to the random dice images
leftImage.src = "images/dice" + randomNumber1 + ".png";
rightImage.src = "images/dice" + randomNumber2 + ".png";

// Select the h1 element
var heading = document.querySelector("h1");

// Compare dice values and update h1 text
if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 Wins! 🎉";
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins! 🎉";
} else {
    heading.textContent = "Draw! 🤝";
}
