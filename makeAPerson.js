/*
Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').
*/
const Person = function (first, last) {
    let [firstName, lastName] = [first, last]
    this.getFullName = () => `${firstName} ${lastName}`
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.setFirstName = (f) => firstName = f;
    this.setLastName = (l) => lastName = l;
    this.setFullName = (f, l) => [firstName, lastName] = [f, l]
};
