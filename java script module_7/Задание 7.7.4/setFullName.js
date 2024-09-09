const person = {
    firstName: "Default",
    lastName: "Person",
    fullName: ""
};

function setFullName(fullName) {
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person.fullName); 