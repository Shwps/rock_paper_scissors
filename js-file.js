const rockNum = 1;
const paperNum = 2;
const scissorsNum = 3;

const rockTxt = "rock";
const paperTxt = "paper";
const scissorsTxt = "scissors";

const rockNode = document.querySelector(".rock");
const paperNode = document.querySelector(".paper");
const scissorsNode = document.querySelector(".scissors");
const roundStatus = document.querySelector(".roundstatus");

const cpuRockNode = document.querySelector(".cpuRock");
const cpuPaperNode = document.querySelector(".cpuPaper");
const cpuScissorsNode = document.querySelector(".cpuScissors");

const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");

let cpuScoreInt = parseInt(cpuScore.textContent);
let playerScoreInt = parseInt(playerScore.textContent);

rockNode.addEventListener("click", () => {
  if (cpuScoreInt === 5 || playerScoreInt === 5) gameReset();
  rockNode.classList.add("selected");
  playRound(1, computerPlay());
});

paperNode.addEventListener("click", () => {
  if (cpuScoreInt === 5 || playerScoreInt === 5) gameReset();
  paperNode.classList.add("selected");
  playRound(2, computerPlay());
});

scissorsNode.addEventListener("click", () => {
  if (cpuScoreInt === 5 || playerScoreInt === 5) gameReset();
  scissorsNode.classList.add("selected");
  playRound(3, computerPlay());
});

function playRound(playerNum, cpuNum) {
  if (playerNum === cpuNum) {
    roundStatus.textContent = "tied";
  } else if (playerNum === rockNum && cpuNum === scissorsNum) {
    playerScore.textContent = playerScoreInt += 1;
    roundResults("player");
  } else if (playerNum > cpuNum && cpuNum !== rockNum) {
    playerScore.textContent = playerScoreInt += 1;
    roundResults("player");
  } else if (playerNum === paperNum && cpuNum === rockNum) {
    playerScore.textContent = playerScoreInt += 1;
    roundResults("player");
  } else {
    cpuScore.textContent = cpuScoreInt += 1;
    roundResults("cpu");
  }
}

function computerPlay() {
  let cpuHand = getRandomInt();
  if (cpuHand === 1) cpuRockNode.classList.add("selected");
  else if (cpuHand === 2) cpuPaperNode.classList.add("selected");
  else if (cpuHand === 3) cpuScissorsNode.classList.add("selected");
  return cpuHand;
}

function getRandomInt() {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function roundResults(winner) {
  if (playerScoreInt === 5) {
    roundStatus.textContent = "You won the game of Rock, Paper, Scissors";
    return;
  } else if (cpuScoreInt === 5) {
    roundStatus.textContent =
      "You lost the game of Rock, Paper, Scissors to a computer";
      return;
  } else {
    roundStatus.textContent = winner + " wins!";
  }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("selected");
}
const buttons = Array.from(document.querySelectorAll(".box"));

buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

function gameReset() {
  playerScore.textContent = playerScoreInt = 0;
  cpuScore.textContent = cpuScoreInt = 0;
}
