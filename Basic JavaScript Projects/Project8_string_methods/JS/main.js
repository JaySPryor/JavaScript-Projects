/* STRING METHODS */

//Global Variables


//concat() method
function oneSentence() {
    var part1 = "I've ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholeSentence = part1.concat(part2,part3,part4);
    document.getElementById("Concat").innerHTML = wholeSentence;
}

//Slice() mehtod
function sliceMethod() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase() method
function upCase() {
    var greet = "Hello, world!";
    var convert = greet.toUpperCase();
    document.getElementById("Upper").innerHTML = convert;
}

//search() method
function wordPose() {
    var greet = "Hello, world!";
    document.getElementById("Upper").innerHTML = greet.search("world");
}

//toString() method
function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = "\"" + x.toString() + "\"";
}

//toPrecision() method
function precMethod() {
    var x = 126652.37030751112;
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}
