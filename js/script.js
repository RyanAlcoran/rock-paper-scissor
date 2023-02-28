let pScore = 0;
let cScore = 0;
function game(){
	let name = prompt('Welcome to the rock, paper, scissors game. What is your name?');
	/* Logic to play 5 rounds
	for (let i = 0; i < 5; i++) {
		let playerSelection = getPlayerChoice();
		let computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
		console.log(`${name}: ${pScore} | Computer: ${cScore}`)
	}
	*/
}

function playRound(playerSelection, computerSelection) {
	let player = playerSelection.toLowerCase();
	let computer = computerSelection.toLowerCase();

	// if player ties
	if(player == computer){
		return "It's a draw!";
	}
	//else if player wins
	else if((player == 'rock' && computer == 'scissor') || (player == 'scissor' && computer == 'paper') || (player == 'paper' && computer == 'rock')){
		pScore++;
		return `You win! ${capitalize(player)} beats ${capitalize(computer)}.`;
	}
	//else player loses
	else{
		cScore++;
		return `You lose! ${capitalize(computer)} beats ${capitalize(player)}.`;
	}
}

function getComputerChoice() {
	const choice = ['Rock', 'Paper', 'Scissor'];
	return choice[Math.floor(Math.random() * choice.length)];
}

function capitalize(input){
	return input.charAt(0).toUpperCase() + input.slice(1);
}


function getPlayerChoice(){
	let input = prompt('Enter rock, paper, or scissor').toLowerCase();
	while (input != 'rock' && input != 'paper' && input != 'scissor') {
		input = prompt('That is not a valid choice. Please enter rock, paper, or scissor').toLowerCase();
		
	}
	return input;
}

const buttons = document.querySelectorAll('.btn');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    console.log(playRound(button.value, getComputerChoice()));
  });
});