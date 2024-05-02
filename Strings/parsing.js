"use strict";



function parseAndDisplayName(name) {

let firstNameIndexEnd = name.indexOf(" ");

let firstName = name.substring(0 , firstNameIndexEnd);

let fValue = "First Name: " + firstName;

let lastName = name.substring(firstNameIndexEnd);

let lValue = "Last Name: " + lastName;

let fullName = "Name: " + firstName + lastName;

let result = fullName + '\n' + fValue + '\n' + lValue


return result;
}

var person1 = "Brenda Kaye";

var person2 = "Ian Auston";

var person3 = "Siddalee Grace";

console.log(parseAndDisplayName(person1));
console.log("-----------------------------")
console.log(parseAndDisplayName(person2));
console.log("-----------------------------")
console.log(parseAndDisplayName(person3));