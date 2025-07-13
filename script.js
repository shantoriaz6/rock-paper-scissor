let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#Msg");
const userScorePara = document.querySelector("#User-Score");
const compScorePara = document.querySelector("#Comp-Score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game is Draw!play Again";
  msg.style.backgroundColor = "#001d3d";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    console.log("you win!");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    console.log("you lose!");
    msg.innerText = ` you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "green";
  }
};

const playGame = (userChoice) => {
  console.log("user Choice", userChoice);
  //generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    }
    //rock,sissors
    else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
