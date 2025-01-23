function getComputerChoice() {
    let computer_choice = Math.random();
    switch(true) {
        // IF Computer choice is .33 or lower | if x is less than or equal to .25
        case computer_choice > 0 && computer_choice < .33:
            return "Scissors";
        
        // If computer choice is between .34 and .66 | 
        case computer_choice > .34 && computer_choice < .66:
            return "Rock"
        
        // If computer choice is between .34 and .66 | 
        case computer_choice > .65 && computer_choice < 1:
            return "Paper"
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    user_input = prompt('Choose Rock, Paper, or Scissors');
    formatted_prompt = user_input.charAt(0).toUpperCase()+String(user_input).slice(1);
    if (formatted_prompt === 'Rock' || formatted_prompt === 'Paper' || formatted_prompt === 'Scissors')  {
        return formatted_prompt;
    } else {
        console.log(`Please choose either rock, paper, or scissors, you wrote '${formatted_prompt}'`);
    }
}

// console.log(getHumanChoice());

function playRound(humanSelection, computerSelection) {
    console.log(humanSelection);
    console.log(computerSelection);
    let human_counter = 0;
    let computer_counter = 0;
    
    if (humanSelection === computerSelection) {
        return "It's a tie!";
      } 
    
      if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
      ) {
        human_counter = human_counter + 1;
        console.log('Human Wins!');
      } 
      computer_counter = computer_counter + 1;
      console.log('Computer Wins!');
    return [human_counter, computer_counter];
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

[HumanCounter, ComputerCounter] = playRound(humanSelection, computerSelection)

console.log(`Human Score ${HumanCounter}`);
console.log(`Computer Score ${ComputerCounter}`);