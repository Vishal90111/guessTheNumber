"use strict";

// default values
let randomNumber = Math.round(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".secretNumber").textContent = "?";
document.querySelector(".score").textContent = score;
document.querySelector(".highScore").textContent = highScore;

//  to dipaly messages in DOM
let displayMessage = function (element, val) {
  document.querySelector(element).textContent = val;
};

// click even triggers when use click to guess the number
document.querySelector(".checkNumber").addEventListener("click", function () {
    
    //entered number to guess string to number 
  var getNumber = Number(document.querySelector(".guessNumber").value);

  //number should not be 0 or undefined
  if (!getNumber || getNumber == undefined) {
    displayMessage(".status", "No Number!");
    
    //when guess number is correct
  } else if (getNumber === randomNumber) {
    document.querySelector("body").classList.add("correct");
    displayMessage(".secretNumber", randomNumber);
    displayMessage(".score", score);
    displayMessage(".status", "Correct Number");
    if (score > highScore) {
      highScore = score;
      displayMessage(".highScore", highScore);
    }

    //guess number is wrong
  } else if (getNumber !== randomNumber) {
    console.log("2");
    if (score < 1) {
      displayMessage(".status", "Game Over!");
      document.querySelector("body").classList.remove("correct");
      document.querySelector("body").classList.add("over");
    } else {
      score--;
      displayMessage(
        ".status",
        getNumber < randomNumber ? "Too Low!" : "Too High!"
      );
      displayMessage(".score", score);
    }
  }
});

// rest all values 
document.querySelector(".tryAgain").addEventListener("click", function () {
  document.querySelector("body").classList.remove("correct");
  document.querySelector("body").classList.remove("over");
  document.querySelector(".status").textContent = "Start Guessing...";
  randomNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector(".secretNumber").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".highScore").textContent = highScore;
});
