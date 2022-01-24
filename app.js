// catch the dom /:

let userScore = 0;
let computerScore = 0;
let roundWiner = "";
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

// functions

// finish and reset functions

const reset = () => {
  if ((result_div.innerHTML = "finish")) {
    computerScore = 0;
    userScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
  }
};

const finish = () => {
  if ((userScore === 5) | (computerScore === 5)) {
    result_div.innerHTML = "finish";
    reset();
  }
};

//conclusion functions

const win = (userChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `you   win`;
  finish();
};

const lose = () => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `computer  win , try again`;
  finish();
};

const draw = () => {
  result_div.innerHTML = "it's a draw";
  finish();
};

// computer random choice

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

//Round

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  const round = `${userChoice + computerChoice}`;

  switch (round) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "sr":
    case "rp":
    case "ps":
      lose();
      break;
    case "ss":
    case "rr":
    case "pp":
      draw();
      break;
  }
};

const main = () => {
  rock_div.addEventListener("click", () => playRound("r"));
  paper_div.addEventListener("click", () => playRound("p"));
  scissors_div.addEventListener("click", () => playRound("s"));
};
main();
