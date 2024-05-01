"use strict";

function displayMailingLabel(name, address, city, zip) {

    console.log(name + "\n" + address + "\n" + city + "\n" + zip);
}

function addNumbers(num1, num2) {
    console.log(num1 + num2);

}

function displayReceipt(totaldue, amountPaid) {

    if (amountPaid < totaldue) {
        console.log("You need to pay " + (totaldue - amountPaid));
    } else if (amountPaid > totaldue) {
        console.log("Here is your change " + (amountPaid - totaldue));
    }

}
displayMailingLabel("Rio", "Brazil", "400 sw road", "New York", 35150);
displayMailingLabel("Langston", "Brooks", "1482 nw Blvd", "San Diego", 32208)
addNumbers(40, 40);
displayReceipt(100, 140);
displayReceipt(300, 140);
displayReceipt(300, 1400);