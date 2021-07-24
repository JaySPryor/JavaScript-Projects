/********** LOOPS & ARRAYS **********/

//basic while loop
function Call_Loop() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String Length property
function countString() {
    let str = "Hello world!";
    document.getElementById("stringLength").innerHTML = str.length + " chacters long!";
}

//for loop
function forLoop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var y;
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + "<br>";
    }
    document.getElementById("instrumentList").innerHTML = Content;
}

//Array
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "Sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "Eating";
    Cat_Picture[3] = "Purring";
    document.getElementById("Array").innerHTML = Cat_Picture[0];
}

//Const keyword
function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"Black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The color of the " + Musical_Instrument.type + " is now " + Musical_Instrument.color + "!";
}

//let keyword
function letKeyword() {
    var x = 111;
    document.write(x);
    {
        let x = 333;
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}

//return statement
function returnFunc() {
    return Math.PI;
}
document.getElementById("piReturn").innerHTML = returnFunc();

//object demo
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("carObject").innerHTML = car.description();

//break & continue statements
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }//Skips #3
    if (i === 8) { break; }//Ends loop after 7
    text += i + "<br>";
}
document.getElementById("breakCont").innerHTML = text;