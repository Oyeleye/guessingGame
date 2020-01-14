//create secret number
var secretNumber = 5;

//ask user for guess
var stringGuess= prompt("Guess a number");
var guess=Number(stringGuess);

//check if guess is correct
if (guess===secretNumber) {
	alert("You are right!");
}

//otherwise, check if guess is higher than the secret number
else if (guess > secretNumber) {
	alert ("Oops, your guess is higher than the secret number!");
}

//otherwise, check if guess is lower than the secret number 
else if (guess < secretNumber) {
	alert ("Oops, your guess is lower than the secret number!");
}
//another way to then do treat a guess lower than secret number is to then use ELSE, since if a number is not greater than the secret number, it will then be lower than it. So, it could be this:
//else {
//	alert ("Oops, your guess is lower than the secret number!");
// }  


//otherwise, your guess is wrong
//else {
//	alert ("Try again!");
// }  