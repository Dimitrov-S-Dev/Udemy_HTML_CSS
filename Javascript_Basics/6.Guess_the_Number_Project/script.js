// Javascript Guess the Number
// Function Declarations

function getValues(){
    let range = parseInt(prompt("Guess from numbers 0 to ....: "));
    let guessNumber = prompt("How many guesses would you like?");
    let secretNumber = Math.floor(Math.random()*(range + 1));

    let gameData = [guessNumber, secretNumber];
    return gameData;
}

function playGame(gameData){
    let guessNumber = gameData[0];
    let secretNumber = gameData[1];

    for ( let i = 0; i < guessNumber; i ++){
        let guess = prompt("Guess " + (i + 1) + ": What is your number?");

        if (guess < secretNumber) {
            alert(guess + " is to low...");
        }
        else if (guess > secretNumber){
            alert(guess + " is to high...");
            }

        else {
            return "Correct ! my number was " + guess;
        }

    }
    return "Sorry, you ran out of guesses! The correct number was " + secretNumber + "!";
}

// Our Main Loop
let playing = "yes"
while (playing == "yes"){
    let gameData = getValues();
    let result = playing(gameData);
    alert(result);
    playing = prompt("Would you like to play again (yes/no)?");
}
