// Exercise4_4
//
// random number between 0 and 1
randomNumber = Math.random();
// multiply by 10 to obtain a number between 0 and 10
randomNumber = randomNumber * 10;
// removes digits past decimal place to provide a whole number
RandomNumber = Math.floor(randomNumber);
userInput = window.prompt("Please type in a number between 0 and 10!");
userInput = Number(userInput);
response0 = "you typed in 0";
response1 = "you typed in 1";
response2 = "you typed in 2";
response3 = "you typed in 3";
response4 = "you typed in 4";
response5 = "you typed in 5";
response6 = "you typed in 6";
response7 = "you typed in 7";
response8 = "you typed in 8";
response9 = "you typed in 9";
response10 = "you typed in 10";
switch (userInput) {
    case 0: alert(response0);
    break;
    case 1: alert(response1);
    break;
    case 2: alert(response2);
    break;
    case 3: alert(response3);
    break;
    case 4: alert(response4);
    break;
    case 5: alert(response5);
    break;
    case 6: alert(response6);
    break;
    case 7: alert(response7);
    break;
    case 8: alert(response8);
    break;
    case 9: alert(response9);
    break;
    case 10: alert(response10);
    break;
    default: alert("You typed in " + userInput + " !" + "\n" + "This was NOT between 0 and 10! Please try again!");
    break;
}