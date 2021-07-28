/************ SWITCH STATEMENT ************/

//
function colorFunc() {
    var colorOutput;
    var Colors = document.getElementById("colorInput").value;
    var colorString = " is a great color!";
    switch(Colors) {
        case "Red":
            colorOutput = "Red" + colorString;
            break;
        case "Yellow":
            colorOutput = "Yellow" + colorString;
            break;
        case "Green":
            colorOutput = "Green" + colorString;
            break;
        case "Blue":
            colorOutput = "Blue" + colorString;
            break;
        case "Pink":
            colorOutput = "Pink" + colorString;
            break;
        case "Purple":
            colorOutput = "Purple" + colorString;
            break;
        default:
        colorOutput = "Please enter a color exactly as written above.";
    }
    document.getElementById("switchDemo").innerHTML = colorOutput;
}

//getElementByClassName() Method
function classNameDemo() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "It changed!";
}

//LINE canvas
function firstCanvas() {
    var l = document.getElementById("firstCanvas");
    var ctx = l.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,200);
    ctx.stroke();
}

//CIRCLE canvas
function secondCanvas() {
var c = document.getElementById("secondCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2*Math.PI);
ctx.stroke();
}

//TEXT canvas
function thirdCanvas() {
    var t = document.getElementById("thirdCanvas");
    var ctx = t.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Hello World!", 10, 50);
}

//GRADIENT canvas
function fourthCanvas() {
    var g = document.getElementById("fourthCanvas");
    var ctx = g.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "orange");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 200);
}