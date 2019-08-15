/*You have an array of user objects, each one has user.name.
WriYou have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.



let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

let john = { name: "John", surname: "Smith", age: 35 };
let pete = { name: "Pete", surname: "Hunt", age: 25 };
let mary = { name: "Mary", surname: "Key", age: 45 };

let users = [];
users.push(john, pete, mary)
//console.log(users)

let usersMapped = [];

function mapUsers(array) {
  for(let i = 0; i < users.length; i++) {
    usersMapped[i] = {fullname: users[i].name + users[i].surname, age: users[i].age};
  }
  return usersMapped;
}

mapUsers(users);

function sortByAge(array) {
  array.sort((a, b) => b.age - a.age);
  return array;
};

console.log(sortByAge(usersMapped))

function getAverageAge(array) {
  let averageAge = array.reduce((prev, user) => prev = prev + user.age, 0) / array.length;
  return averageAge;
}
