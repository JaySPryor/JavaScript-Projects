/* SCOPE/TIME */

//Global Variables
var x = 1;
var myConsole = "You found me!";

//Local Variable & Function with error.
function localFunc(){
    var y = 2;
    /*document.getElementById("Local").innerHTML =*/console.log(y + w);//uses console.log() to debug error
    console.log(myConsole);
}

//If/Else statements combined with Date().getHours() method
function getHour(){
    if (new Date().getHours() < 18) {
        document.getElementById("Time").innerHTML = "How are you today?";
    } 
    else document.getElementById("Time").innerHTML = "How are you this evening?";
}

//If/Else combined with user input
function getAnswer() {
    Age = document.getElementById("userAge").value;
    if (Age >= 21) {
        Rent = "Congratulations! You're old enough!";
    }
    else {
        Rent = "Sorry! You're not old enough.";
    }
    document.getElementById("howOld").innerHTML = Rent;
}

//else if statement
function timeFunc() {
    var oClock = new Date().getHours();
    var Reply;
    if (oClock < 12 == oClock > 0) {
        Reply = "It's Morning.";
    }
    else if (oClock >= 13 == oClock < 18) {
        Reply = "It's Afternoon.";
    }
    else {
        Reply = "It's evening.";
    }
    document.getElementById("dayTime").innerHTML = Reply;
}

//concat() method
function oneSentence() {
    var part1 = "I've ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholeSentence = part1.concat(part2,part3,part4);
    document.getElementById("Concat").innerHTML = wholeSentence;
}