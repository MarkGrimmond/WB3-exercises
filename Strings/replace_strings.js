"use strict";

let message = "Our corporate offices are located in DALLAS";

console.log(message);

function replaceString() {

let result = message.replace(/Dallas/i, "Austin");

return result;
}

console.log(replaceString());