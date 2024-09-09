const users = [
  { name: "Виталий", age: 30 },
  { name: "Анна", age: 17 },
  { name: "Максим", age: 19 },
  { name: "Ольга", age: 16 }
];

const adultUsers = users.filter(user => user.age >= 18);

const userNames = adultUsers.map(user => user.name);

console.log(userNames); 