"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Pick the Number 😒';
// document.querySelector('.score').textContent = 20;
// document.querySelector('.highscore').textContent = 50;
// document.querySelector('.guess').value = 40;

// window.addEventListener("load", () => {
//   let audio = new Audio("./assets/start.mp3");
//   audio.play();
// });

window.onload = function () {
  let audio = new Audio("./assets/start.mp3");
  audio.play();
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let gameNumber = document.querySelector("number");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //   when there's no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'no number🤦‍♂️';
    displayMessage("no number🤦‍♂️");

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number 👍';
    displayMessage("Correct number 👍");
    gameNumber.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "Green";

    gameNumber.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when a higher number is picked
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? 'You picked a higer number, try again😒'
      //     : 'You guessed below bar,take it higher🤦‍♂️🤷‍♀️';
      displayMessage(
        guess > secretNumber
          ? "You picked a higer number,try again😒"
          : "You guessed below bar,take it higher🤦‍♂️🤷‍♀️"
      );
      score = score - 1;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundColor = "purple";
      gameNumber.style.width = "10rem";
    } else {
      // document.querySelector('.message').textContent = 'you lost the game😥';
      displayMessage("you lost the game😥");
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   // when a lower number is picked
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       'You guessed below bar,take it higher🤦‍♂️🤷‍♀️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('body').style.backgroundColor = 'brown';
  //     document.querySelector('.number').style.width = '10rem';
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game😥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  gameNumber.textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage("start guessing...");
  document.querySelector("body").style.backgroundColor = "pink";
  gameNumber.style.width = "15rem";
});
