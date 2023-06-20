console.log("Game starts!")

const options = ['rock', 'paper', 'scissors'];
let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice(){
    let choice = prompt("Do your choice...");
    let choiceInLower = choice.toLowerCase();
    return choiceInLower;
}

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if (result == 'Draw'){
    return "It's a tie."
} else if(result == 'player'){
    return `You win, ${playerSelection} beats ${computerSelection}`;
} else{
    return `You lose, ${computerSelection} beats ${playerSelection}`;  
}
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'Draw';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
               (playerSelection === 'paper' && computerSelection === 'rock') || 
               (playerSelection === 'scissors' && computerSelection === 'paper')){
            return 'player';
    } else {
        return 'computer'
    }    
}

function game(){
for(let i = 0; i<5; i++){
    console.log(`Round ${i + 1}`);
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();   
    console.log(`You selected ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} and computer selected ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`); 
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) == 'player'){
        playerPoints++;
    } else if(checkWinner(playerSelection, computerSelection) == 'computer'){
        computerPoints++;
    }
    console.log(`Player has ${playerPoints} points.`)
    console.log(`Computer has ${computerPoints} points.`)
}
if (playerPoints>computerPoints){
        console.log("You win the game!");
    } else if(computerPoints>playerPoints){
        console.log("You lose the game!");
    }else{
        console.log("It's a draw!")
    }
}

game();
