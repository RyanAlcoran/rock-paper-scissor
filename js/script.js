function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	let computer = computerSelection.toLowerCase();

	// if player ties
	if(player == computer){
		return "It's a draw!";

	}
	//else if player wins
	else if((player == 'rock' && computer == 'scissor') || (player == 'scissor' && computer == 'paper') || (player == 'paper' && computer == 'rock')){
		return `You win! ${capitalize(player)} beats ${capitalize(computer)}.`
	}
	//else player loses
	else{
		return `You lose! ${capitalize(computer)} beats ${capitalize(player)}.`
	}
}

function getComputerChoice() {
	const choice = ['Rock', 'Paper', 'Scissor'];
	return choice[Math.floor(Math.random() * choice.length)];
}

function capitalize(input){
	return input.charAt(0).toUpperCase() + input.slice(1);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));