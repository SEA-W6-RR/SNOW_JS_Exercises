// Exercise 3.5
people = {
  friends: []
};
friend1 = {
  firstName: "Hans",
  lastName: "Meyer",
  id: 1017
};
friend2 = {
  firstName: "Sepp",
  lastName: "Huber",
  id: 1099
};
friend3 = {
  firstName: "Paul",
  lastName: "Schmidt",
  id: 2345
};
people.friends[0] = friend1;
people.friends[1] = friend2;
people.friends[2] = friend3;
console.log(people);