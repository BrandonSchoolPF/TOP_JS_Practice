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
        getHumanChoice();
    }
}

// console.log(getHumanChoice());

function playRound(round, humanSelection, computerSelection) {
    let human_counter = 0;
    let computer_counter = 0;
    console.log(`Round ${round}`)
    console.log(`Computer Chose: ${computerSelection}`)
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
      } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
      ) {
        human_counter = 1;
        console.log(`Human Wins round: ${round}!`);
      } else {
        computer_counter = 1;
        console.log(`Computer Wins round: ${round}!`);
      }
    return [human_counter, computer_counter];
    }

let condition = false;
let round = 0;
while (!condition) {
    let Human = 0;
    let Computer = 0;
    [HumanCounter, ComputerCounter] = playRound(round, getHumanChoice(), getComputerChoice())
    console.log([HumanCounter, ComputerCounter])
    Human = Human + HumanCounter;
    Computer = Computer + ComputerCounter;
    console.log(`Human Score: ${Human} | Computer Score: ${Computer}`)
    if (Human === 5) {
        console.log('Human Wins!')
        condition = true;
    } else if (Computer === 5) {
        console.log('Computer Wins!')
        condition = true;
    }
}