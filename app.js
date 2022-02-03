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

const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissors_div = document.querySelector("#scissors");

// functions

const main = () => {
  // finish and reset functions

  newGame_div.addEventListener("click", () => reset());

  const reset = () => {
    computerScore = 0;
    userScore = 0;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
    choices_div.style.display = "flex";
    endGame_div.style.display = "none";
    result_div.innerText = "Do your first move";
  };

  const finish = () => {
    if (userScore === 5 || computerScore === 5) {
      if (userScore === 5) {
        result_div.innerText = "you are the winner out of five games";
        choices_div.style.display = "none";
        endGame_div.style.display = "flex";
        newGame_div.style.display = "flex";
      } else {
        result_div.innerText = "the computer is the winner out of five games";
        choices_div.style.display = "none";
        endGame_div.style.display = "flex";
        newGame_div.style.display = "flex";
      }
    }
  };

  //Round
  //conclusion functions

  const playRound = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(userChoice);
    userImg.src = `./images/${userChoice}.png`;
    compImg.src = `./images/${computerChoice}.png`;

    const round = `${userChoice + computerChoice}`;

    switch (round) {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        // win();
        userScore++;
        userScore_span.innerText = userScore;
        result_div.innerText = `you chose ${userChoice} that beats the ${computerChoice}`;
        break;
      case "scissorsrock":
      case "rockpaper":
      case "paperscissors":
        // lose();
        computerScore++;
        computerScore_span.innerText = computerScore;
        result_div.innerText = `computer  win with ${computerChoice} that beat your ${userChoice} , try again`;
        break;
      // case userChoice === computerChoice:
      case "scissorsscissors":
      case "rockrock":
      case "paperpaper":
        // draw();
        result_div.innerText = `it's a draw, both of you chose ${userChoice}`;

        break;
    }
    finish();
  };

  // computer random choice

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);

    return choices[randomNum];
  };

  // the three options that you choose of, after a choice, in the main function
  // callback function -playRound => -getComputerChoice- -finish-? => -reset-
  //

  rock_div.addEventListener("click", () => playRound("rock"));
  paper_div.addEventListener("click", () => playRound("paper"));
  scissors_div.addEventListener("click", () => playRound("scissors"));
};
main();
