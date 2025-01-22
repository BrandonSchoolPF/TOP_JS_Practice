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

console.log(getComputerChoice());

function getHumanChoice() {
    user_input = prompt('Choose Rock, Paper, or Scissors');
    fomatted_prompt = user_input.charAt(0).toUpperCase()+String(user_input).slice(1);
    return formatted_prompt;
}

console.log(getHumanChoice());

// function playRound(humanChoice, computerChoice) {
//     switch(true) {
//         case humanChoice =
//     }
// }