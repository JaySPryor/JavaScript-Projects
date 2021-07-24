

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