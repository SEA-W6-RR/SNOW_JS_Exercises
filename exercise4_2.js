// Exercise4_2
//
age = window.prompt("What's your age?");
console.log(age, typeof(age));
age = Number(age);
console.log(typeof(age));
message = String;
if (age >= 21) {
  message = "Please drink as much alcohol as you like!"
} else if (age >= 19) {
  message = "Sorry, you\'ll not get drunk here!"
} else {
  message = "Sorry, no entrance for babys!"
}