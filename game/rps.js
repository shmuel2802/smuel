// let score = 0;
// let div1 = document.getElementById("choice-screen");
// let div2 = document.getElementById("result-screen");
// let images = {
//   rock: "images/icon-rock.svg",
//   paper: "images/icon-paper.svg",
//   scissors: "images/icon-scissors.svg",
// };

// function playGame(playChoise) {
//   const choise = ["rock", "paper", "scissors"];
//   const computerChoise = choise[Math.floor(Math.random() * choise.length)];
//   document.getElementById("result-screen").style.display = "block";

//   document.getElementById("choise-screen").style.display = "none";

//   let result = "";
//   if (playChoise === computerChoise) {
//     result = "IT'S A DRAW!";
//   } else if (
//     (playChoise === "rock" && computerChoise === "scissors") ||
//     (playChoise === "paper" && computerChoise === "rock") ||
//     (playChoise === "scissors" && computerChoise === "paper")
//   ) {
//     result = "YOU WIN!";
//     score++;
//   } else {
//     result = "YOU LOSS!";
//     score = score - 1;
//   }

//   document.getElementById("score").innerText = score;
//   document.getElementById("result-text").innerText = result;
// }
// function resetGame() {
//   document.getElementById("choice-screen").style.display = "block";
//   document.getElementById("result-screen").style.display = "none";
// }

let score = 0;
let images = {
  rock: "images/icon-rock.svg",
  paper: "images/icon-paper.svg",
  scissors: "images/icon-scissors.svg",
};
let color = {
  rock: "red",
  paper: "rgb(80, 80, 214)",
  scissors: "rgb(246, 173, 63)",
};
function playGame(playChoice) {
  const choices = ["rock", "paper", "scissors"];
  // const computerChoice = choices[2];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById("result-screen").style.display = "block";
  document.getElementById("choise-screen").style.display = "none";

  document.getElementById("user-choise").classList.remove("ripple");
  document.getElementById("computer-choise").classList.remove("ripple");

  let result = "";
  if (playChoice === computerChoice) {
    result = "IT'S A DRAW!";
  } else if (
    (playChoice === "rock" && computerChoice === "scissors") ||
    (playChoice === "paper" && computerChoice === "rock") ||
    (playChoice === "scissors" && computerChoice === "paper")
  ) {
    document.getElementById("user-choise").classList.add("ripple"); // מוסיף אפקט גלים למשתמש

    result = "YOU WIN!";
    score++;
  } else {
    result = "YOU LOSE!";
    score--;
    document.getElementById("computer-choise").classList.add("ripple"); // מוסיף אפקט גלים למחשב
  }

  document.getElementById("score").innerText = score;
  document.getElementById("result-text").innerText = result;

  let userChoiceElement = document.getElementById("user-choise");
  userChoiceElement.style.backgroundImage = `url(${images[playChoice]})`;
  userChoiceElement.style.outline = `25px solid ${color[playChoice]}`;

  let computerChoiceElement = document.getElementById("computer-choise");
  computerChoiceElement.style.backgroundImage = `url(${images[computerChoice]})`;
  computerChoiceElement.style.outline = `25px solid ${color[computerChoice]}`;
}

function resetGame() {
  document.getElementById("choise-screen").style.display = "block";
  document.getElementById("result-screen").style.display = "none";
}
function Restart() {
  score = 0;

  document.getElementById("score").innerText = score;
}
