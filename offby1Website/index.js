"use strict";
window.onload = init;

// The elements
const dateTextbox = document.getElementById("dateTextbox");
const outputTextBox = document.getElementById("outputTextBox");

//button
const submitButton = document.getElementById("submitButton");


function init(){

    submitButton.onclick = onSubmitButtonClicked;
}


function  onSubmitButtonClicked(){
    let dateTextboxValue = dateTextbox.value; 
    let date = new Date(dateTextboxValue); 
    
    outputTextBox.innerHTML = date.toString();
}