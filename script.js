function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
		let optionIndex = Math.floor(Math.random() * 3) ;
		//console.log(optionIndex)
		let compChoice = options[optionIndex]
		//console.log(compChoice)
		return compChoice
  }
  console.log(getRandomComputerResult());