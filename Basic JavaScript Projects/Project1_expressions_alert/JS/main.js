
var A = "\"This\""+" string is "+"blue";//Demonstrates the escape character &
                                    // concatenates a string with + character
    A = A.fontcolor("blue");        //Sets var A to blue font
    B = " ...or is it?";
    B = B.fontcolor("Red");         //Sets var B to a red font
document.write(A+B);                //Writes variables A & B to doc

function myFunk() {
    window.alert("this is a window");//This is the popup window that is generated "onload"
}                                  // of page.
// button 
function My_First_Function() {              //Defines a function and names it
    var str = "This text is green!";        //Defines a variable and gives it a str value
    var result = str.fontcolor("green");    //Uses fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;//Puts value  of result into
}                                           // html element with "Green_Text" id