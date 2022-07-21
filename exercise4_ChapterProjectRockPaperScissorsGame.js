// Exercise5_ChapterProjectMathMultiplicationTable
//
// random number between 0 and 1
randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
randomNumber = Math.floor(randomNumber);
// restrict randomNumber to 0, 1, or 2 via Modulo%3
RandomNumber = randomNumber % 3;
arrayRPS = ["Rock", "Paper", "Scissors"];
computerRPS = RandomNumber;
userInput = window.prompt("Let\'s do some RockPaperScissorsGame!" + "\n" + "Please type in Rock or Paper or Scissors!");
if (arrayRPS.includes(userInput)) {
    userRPS = arrayRPS.indexOf(userInput);
    prize1 = "That's great! You\'ve won!!!" + "\n" + "Please try again!";
    prize2 = "Well done! But you only got a draw!" + "\n" + "Please try again!";
    prize3 = "So sorry! You lost!" + "\n" + "Please try again!";
    outcome = userRPS - computerRPS;
    switch (outcome) {
        case 1:
            alert(prize1);
            break;
        case 0:
            alert(prize2);
            break;
        default: alert(prize3);
        break;
    } 
} else alert("Ooops! That\'s no valid input! There must be some typo!?" + "\n" + "Please try again!");