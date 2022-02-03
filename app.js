// catch the dom /:

let userScore = 0;
let computerScore = 0;
let roundWinner = "";

let endGame_div = document.querySelector(".end-game");
let choices_div = document.querySelector("#choices");
let newGame_div = document.querySelector(".new-game");
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
let userImg = document.querySelector(".user-sign");
let compImg = document.querySelector(".comp-sign");

const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

// functions

// finish and reset functions

newGame_div.addEventListener("click", () => reset());

const reset = () => {
  computerScore = 0;
  userScore = 0;
  // userImg.src = "";
  // compImg.src = "";
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  choices_div.style.display = "flex";
  endGame_div.style.display = "none";
  result_div.innerText = "do your first move";
};

const finish = () => {
  if ((userScore === 5) | (computerScore === 5)) {
    if (userScore === 5) {
      result_div.innerText = "you are the winer out of five games";
      choices_div.style.display = "none";
      endGame_div.style.display = "flex";
      newGame_div.style.display = "flex";
    } else {
      result_div.innerText = "the computer is the winer out of five games";
      choices_div.style.display = "none";
      endGame_div.style.display = "flex";
      newGame_div.style.display = "flex";
    }
  }
};

//conclusion functions

const win = () => {
  userScore++;
  userScore_span.innerText = userScore;
  result_div.innerText = `you won`;
  finish();
};

const lose = () => {
  computerScore++;
  computerScore_span.innerText = computerScore;
  result_div.innerText = `computer  win , try again`;
  finish();
};

const draw = () => {
  result_div.innerText = "it's a draw, both of you chose the same";
  finish();
};

//Round

const playRound = (userChoice) => {
  const computerChoice = getComputerChoice();
  userImg.src = `/images/${userChoice}.png`;
  compImg.src = `/images/${computerChoice}.png`;

  const round = `${userChoice + computerChoice}`;

  switch (round) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      lose();
      break;
    // case userChoice === computerChoice:
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      draw();
      break;
  }
};

// computer random choice

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
};

// show choice pic

// the three options that you choose of, after a choice, in the main function
// callback function -playRound- r/p/s = user choice
//

const main = () => {
  rock_div.addEventListener("click", () => playRound("rock"));
  paper_div.addEventListener("click", () => playRound("paper"));
  scissors_div.addEventListener("click", () => playRound("scissors"));
};
main();
