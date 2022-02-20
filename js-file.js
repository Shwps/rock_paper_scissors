const rockNum = 1;
const paperNum = 2;
const scissorsNum = 3;

const rockTxt = "rock";
const paperTxt = "paper";
const scissorsTxt = "scissors";

const rockNode = document.querySelector(".rock");
const paperNode = document.querySelector(".paper");
const scissorsNode = document.querySelector(".scissors");
const roundstatus = document.querySelector(".roundstatus");

const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");

let cpuScoreInt = parseInt(cpuScore.textContent);
let playerScoreInt = parseInt(playerScore.textContent);

rockNode.addEventListener("click", () => {
  playRound(1, computerPlay());
});

paperNode.addEventListener("click", () => {
  playRound(2, computerPlay());
});

scissorsNode.addEventListener("click", () => {
  playRound(3, computerPlay());
});

/* function game() {
        let playerWins = 0;
        let cpuWins = 0;

        while (playerWins < 5 && cpuWins < 5) {
          let playerChoice = symbolTranslator(
            prompt("Rock, paper or scissors?").toLowerCase().trim()
          );
          let computerChoice = computerPlay();

          let currentRound = playRound(playerChoice, computerChoice);
          if (currentRound === "tied") {
          } else if (currentRound === "player") {
            playerWins++;
          } else if (currentRound === "cpu") {
            cpuWins++;
          }
          console.log("Player wins: " + playerWins + "\nCPU wins: " + cpuWins);
        }
      } */

function playRound(playerNum, cpuNum) {
  if (playerNum === cpuNum) {
    roundstatus.textContent = "tied";
  } else if (playerNum === rockNum && cpuNum === scissorsNum) {
    roundResults(playerNum, cpuNum, "player");
    playerScore.textContent = playerScoreInt += 1;
    return "player";
  } else if (playerNum > cpuNum && cpuNum !== rockNum) {
    roundResults(playerNum, cpuNum, "player");
    playerScore.textContent = playerScoreInt += 1;
    return "player";
  } else if (playerNum === paperNum && cpuNum === rockNum) {
    roundResults(playerNum, cpuNum, "player");
    playerScore.textContent = playerScoreInt += 1;
    return "player";
  } else {
    cpuScore.textContent = cpuScoreInt += 1;
    roundResults(playerNum, cpuNum, "cpu");
    return "cpu";
  }
}

function computerPlay() {
  return getRandomInt();
}

function getRandomInt() {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function roundResults(playerNum, cpuNum, winner) {
  roundstatus.textContent =
    "Player played: " +
    symbolTranslator(playerNum) +
    " CPU played: " +
    symbolTranslator(cpuNum) +
    ". The winner is " +
    winner;
}

function symbolTranslator(var1) {
  switch (var1) {
    case rockNum:
      return rockTxt;
      break;
    case paperNum:
      return paperTxt;
      break;
    case scissorsNum:
      return scissorsTxt;
      break;
    case rockTxt:
      return rockNum;
      break;
    case paperTxt:
      return paperNum;
      break;
    case scissorsTxt:
      return scissorsNum;
      break;
    default:
      break;
  }
}
