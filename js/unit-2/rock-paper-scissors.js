// Rock paper scissors is a classic 2 player game. Each player chooses either rock, paper or scissors. The possible outcomes: Rock destroys scissors. Scissors cut paper. Paper covers rock.

var userChoice = function(answer){
    var answer = prompt("Do you choose rock, paper or scissors?")
}

var computerChoice = Math.random();

if (computerChoice < 0.34) {
computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
computerChoice = "paper";
} 
else {
computerChoice = "scissors";
} 
console.log(computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return("The result is a tie!");
    }
}
