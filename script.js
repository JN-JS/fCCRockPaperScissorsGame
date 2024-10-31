function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
		let optionIndex = Math.floor(Math.random() * 3) ;
		//console.log(optionIndex)
		let compChoice = options[optionIndex]
		//console.log(compChoice)
		return compChoice
  }
// console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
	// should return true if player won
	// should return false if player lose or if it's a tie
	if(player === "Rock" && computer === "Scissors") {
    return true
  } else if(player === "Scissors" && computer === "Paper") {
    return true
  } else if(player === "Paper" && computer === "Rock") {
    return true
  } else {
    return false
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

