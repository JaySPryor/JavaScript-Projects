//variables used in all functions
var x = 11;

//Subtraction function
function sub_Function() {
    var Sub = x - 5;
    document.getElementById("Subtraction").innerHTML = "11 - 5 = " + Sub;
}

//Addition function
function add_Function() {
    var Add = x + x;
    document.getElementById("Addition").innerHTML = "11 + 11 = " + Add;
}

//Multiplication function
function mult_Function() {
    var Mult = x * x;
    document.getElementById("Multiplication").innerHTML = "11 x 11 = " + Mult;
}

//Division function
function div_Function() {
    var Div = x / 5;
    document.getElementById("Division").innerHTML = "11 &div; 5 = " + Div;
}

//Function showing multiple math operations
function simple_Math() {
    var Multi = (x + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "(11 + 2) * 10 &div; 2 - 5 = "+ Multi;
}

//Modulus function
function mod_Function() {
    var Mod = x % 5;
    document.getElementById("Modulus").innerHTML = "11 &div; 5 has a remainder of "+ Mod;
}

//Negate function (return is made negative)
function neg_Operator() {
    document.getElementById("Negus").innerHTML = -x;
}

/*  //This was the original code given for the increment operator BUT 
    //because it uses the .write action, I've switched to the 
    //.getElementById so that the previouse items are not deleted 
    //from the page
function inc_Operator() {
    x++;
    document.write("11 + 1 = " + x);
}
*/

//Increment function
function inc_Operator() {
    var y = x;
    y++;
    document.getElementById("Increment").innerHTML = "11 incremented by 1 is " + y;
}

//decrement function
function dec_Operator() {
    var y = x;
    y--;
    document.getElementById("Decrement").innerHTML = "11 decremented by 1 is " + y;
}

//Math object (pi)
function math_Object() {
    document.getElementById("pi").innerHTML = "pi is " + Math.PI;
}


/* WINDOW ALERTS */

//Alert that displays a random number less than 1
window.alert(Math.random()+ " is a random nuber less than 1");

//Alert that displays a random number up to 100
window.alert(Math.random()* 100 + " is a random nuber up to 100");

