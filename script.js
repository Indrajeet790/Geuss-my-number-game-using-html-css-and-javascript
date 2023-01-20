"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🙄 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

// handing click event
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // if there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no Number!";

    // when player wins then
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😥Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 you lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "😥Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// coding Challenge #1
/*
implement a game rest functionality,so that the player can make a new guess! here is how:
1.Select the element with the 'again' class and attach a click event handler.
2.in the handler function, restore initial values of score and SecretNumber variables,
3.restore the initial conditions of the message input field.
4. also restore the original background  color #222 and number width(15rem)
*/
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing.....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector(".body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
//hold previous high score
