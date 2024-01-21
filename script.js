const playerDisplay = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById('player-score-display');
const computerScoreDisplay = document.getElementById('computer-score-display');
const option = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let message = '';

function playGame(choice) {
  resultDisplay.classList.remove('greenText', 'redText'); // YESSSS
  const computerChoice = option[Math.floor(Math.random() * 3)];

  playerDisplay.textContent = choice;
  computerDisplay.textContent = computerChoice;
  
  if(choice == computerChoice) {
    resultDisplay.textContent = 'Seri eyy';
    return;
  }
  
  switch (choice) {
    case 'rock':
      if(computerChoice === 'paper') {
        message = 'YOU LOSE';
      } else { // scissors
        message = 'YOU WIN';
      }
      break;
      case 'paper':
        if(computerChoice === 'scissors') {
          message = 'YOU LOSE';
        } else { // rock
          message = 'YOU WIN';
        }
        break;
        case 'scissors':
          if(computerChoice === 'rock') {
            message = 'YOU LOSE';
          } else { // paper
        message = 'YOU WIN';
      }
      break;
  }

  switch (message) {
    case "YOU WIN":
      resultDisplay.classList.add('greenText');
      playerScore++;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add('redText');
      computerScore++;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = message;
}


