let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (human, computer, target) => {
    humanPoints = Math.abs(target - human);
    computerPoints = Math.abs(target - computer);
    if (humanPoints <= computerPoints){
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    winner === 'human' ? humanScore ++ : computerScore ++;
}
const advanceRound = () => currentRoundNumber++;