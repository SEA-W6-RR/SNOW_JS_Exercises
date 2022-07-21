// Exercise4_5
//
// random number between 0 and 1
randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);
userInput = window.prompt("Please guess a number between 0 and 10 and type it in!");
userInput = Number(userInput);
prize1 = "That's great! You guessed it!!!";
prize2 = "Well done! You only failed by 1!";
prize3 = "Not too bad! You failed by 2 or 3!";
prize4 = "That was a really bad try!";
difference = Math.abs(RandomNumber - userInput);
switch (difference) {
    case 0: alert(prize1);
    break;
    case 1: alert(prize2);
    break;
    case 2:
    case 3: alert(prize3);
    break;
    default: alert(prize4);
    break;
}