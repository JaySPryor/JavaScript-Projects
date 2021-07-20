
var A = "\"This\""+" string is "+"blue";//demonstrates the escape character &
                                    //concatenates a string with + character
    A = A.fontcolor("blue");        //sets var A to blue font
    B = " ...or is it?";
    B = B.fontcolor("Red");         //sets var B to a red font
document.write(A+B);                //writes variables A & B to doc

window.alert("this is a window");   //this is the popup window

// button 
function My_First_Function() {              //Defines a function and names it
    var str = "This text is green!";        //Defines a variable and gives it a str value
    var result = str.fontcolor("green");    //Uses fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;//puts value  of result into 
                                            //html element with "Green_Text" id
}