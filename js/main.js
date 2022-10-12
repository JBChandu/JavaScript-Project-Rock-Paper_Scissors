const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const sissor = document.querySelector("#s");
//
const user = document.querySelector("#result-user-stat");
const computer = document.querySelector("#result-comp-stat");
const winner = document.querySelector("#result-final-stat");
// scoreboard
const userVal = document.querySelector("#userScoreVal");
const compVal = document.querySelector("#compScoreVal");

rock.addEventListener("click", (e) => {
  user.textContent = "rock";
  computer.textContent = computerTurn();
  checkWinner();
});

paper.addEventListener("click", () => {
  user.textContent = "paper";
  computer.textContent = computerTurn();
  checkWinner();
});

sissor.addEventListener("click", () => {
  user.textContent = "sissor";
  computer.textContent = computerTurn();
  checkWinner();
});

function computerTurn() {
  let game = ["rock", "paper", "sissor"];
  let res = game[Math.ceil(Math.random() * game.length - 1)];
  return res;
}

function checkWinner() {
  let userdata = user.textContent;
  let compdata = computer.textContent;
  if (userdata === compdata) {
    winner.textContent = "It was a tie";
  } else if (userdata === "rock" && compdata === "paper") {
    winner.textContent = "Computer Won";
    compVal.textContent = Number(compVal.textContent) + 1;
  } else if (userdata === "paper" && compdata === "sissor") {
    winner.textContent = "Computer Won";
    compVal.textContent = Number(compVal.textContent) + 1;
  } else if (userdata === "sissor" && compdata === "rock") {
    winner.textContent = "Computer Won";
    compVal.textContent = Number(compVal.textContent) + 1;
  } else {
    winner.textContent = "User Won";
    userVal.textContent = Number(userVal.textContent) + 1;
  }
}
