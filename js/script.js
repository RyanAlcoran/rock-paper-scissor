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

const results = document.querySelector('#results');
const pScoreContainer = document.querySelector('#pScore');
const cScoreContainer = document.querySelector('#cScore');
const playerScore = document.createElement('div');
playerScore.classList.add('score');
const computerScore = document.createElement('div');
computerScore.classList.add('score');
const playerChoice = document.createElement('div');
playerChoice.classList.add('choice');
const computerChoice = document.createElement('div')
computerChoice.classList.add('choice');
playerScore.textContent = ` ${pScore}`;
computerScore.textContent = `${cScore}`;

pScoreContainer.appendChild(playerScore);
cScoreContainer.appendChild(computerScore);
pScoreContainer.appendChild(playerChoice);
cScoreContainer.appendChild(computerChoice);

const buttons = document.querySelectorAll('.btn');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
  	let c = getComputerChoice();
  	let roundResult = playRound(button.value, c);

  	if(pScore < 5 && cScore < 5){
  		results.textContent = roundResult;
	  	playerScore.textContent = ` ${pScore}`;
		computerScore.textContent = `${cScore}`;
		playerChoice.textContent = capitalize(button.value);
  		computerChoice.textContent = c;
	}
  	else if(pScore == 5 || cScore == 5){
  		playerScore.textContent = ` ${pScore}`
		computerScore.textContent = `${cScore}`;
  		if(pScore > cScore){
  			results.textContent = 'You won the game!!';	
  		}
  		else{
  			results.textContent = 'You lost the game!!';
  		}
  	}
  	else {
  		results.textContent ="";
  		playerChoice.textContent =""
  		computerChoice.textContent = ""
  	}
  });
});

