// function getRandomComputerResult() {
//     const options = ["Rock", "Paper", "Scissors"];
// 		let optionIndex = Math.floor(Math.random() * 3) ;
// 		//console.log(optionIndex)
// 		let compChoice = options[optionIndex]
// 		//console.log(compChoice)
// 		return compChoice
//   }
// console.log(getRandomComputerResult());
// ###Fcc correction
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

// function hasPlayerWonTheRound(player, computer) {
// 	// should return true if player won
// 	// should return false if player lose or if it's a tie
// 	if(player === "Rock" && computer === "Scissors") {
//     return true
//   } else if(player === "Scissors" && computer === "Paper") {
//     return true
//   } else if(player === "Paper" && computer === "Rock") {
//     return true
//   } else {
//     return false
//   }
// }
// ###Fcc correction
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

// console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
// console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  // if(hasPlayerWonTheRound) {
  //   playerScore++
  //   return `Player wins! ${userOption} beats ${computerResult}`
  // } else if(userOption === computerResult) {
  //   return `It's a tie! Both chose ${userOption}`
  // } else if(!hasPlayerWonTheRound) {
  //   computerScore++
  //   return `Computer wins! ${computerResult} beats ${userOption}`;
  // }

  // ### Fcc correction
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
 
}

// console.log(getRoundResults("Rock"));
// console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  // const roundResult = getRoundResults(userOption);
  // console.log(roundResult);

  // computerScoreSpanElement.innerText = computerScore;
  // playerScoreSpanElement.innerText = playerScore;
  // //console.log(playerScore)
  // roundResultsMsg.innerText = getRoundResults(userOption);

  // ### Fcc correction
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  // if(playerScore === 3 || computerScore === 3) {
  //   winnerMsgElement.innerText = playerScore === 3 ? "Player has won the game!" : "Computer has won the game!";
  //   optionsContainer.style.display = "none";
  //   resetGameBtn.style.display = "block";

    // Fcc correction
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  }
// };
// showResults("Rock");

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};

