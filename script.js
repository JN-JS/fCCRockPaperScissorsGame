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
 
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

