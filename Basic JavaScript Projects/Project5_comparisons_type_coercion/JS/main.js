/*** COMPARISONS ***/

//Variables
var x = 1;
var y = 2;
var w = x;


//coercion/typeof operator to output "string"
document.write(typeof "Hello");//Could also use "...(typeof 3);" to output "number" 

//NaN value
function not_Number() {
    document.getElementById("NaN_Test").innerHTML = 0/0;
}

//isNaN function (true)
function isnot_Number() {
    document.getElementById("isNaN_Test").innerHTML = isNaN("Hello");//Change "Hello" to a number to output false
}

//Positive infinity
function pos_Infinity() {
    document.getElementById("Infinity").innerHTML = 2E310;
}

//Negative infinity
function neg_Infinity() {
    document.getElementById("NegInfinity").innerHTML = -2E310;
}

//Boolean using > (true)
function grtr_Than() {
    document.getElementById("Boole").innerHTML = y > x;
}

//Console.Log & == sign
console.log(6 == 7);//reads as false in the console

//"===" sign

function three_Eqs() {
    document.getElementById("Threeqs").innerHTML = (x === w);//could swap w & y to make statement 'false'
}

//&& Operator
function and() {
    document.getElementById("&&Logix").innerHTML = (x < y) && (w == x);//returns true
}

//|| Operator
function or() {
    document.getElementById("||Logix").innerHTML = (y == x) || (y < w);//returns false
}

//! Operator
function not() {
    document.getElementById("!Logix").innerHTML = !(y == w);//returns true
}
