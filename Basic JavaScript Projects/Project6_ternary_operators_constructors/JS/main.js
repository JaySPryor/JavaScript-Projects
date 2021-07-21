/* */

//VARIABLES
var x = 1;
var y = 2;

//Ternary operator (?)
function vote_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_Vote + " to vote.";
}

//"this" keyword
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Vehicle() is the object constructor
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function thisFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    " manufactured in " + Erick.Vehicle_Year;
}

//"new" keyword
var Jay = new Vehicle("Toyota", "4Runner", 2016, "Silver");
function newFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Jay drives a " + Jay.Vehicle_Color + "-colored " + Jay.Vehicle_Make +
    " " + Jay.Vehicle_Model + ", manufactured in " + Jay.Vehicle_Year + "!";
}

//reserved keyword demo (broken because 'boolean' is a reserved keyword)
var Mike = new Vehicle("Toyota", boolean, 2016, "Silver");
function resFunction() {
    document.getElementById("Reserved").innerHTML =
    "Mike drives a " + Mike.Vehicle_Color + "-colored " + Mike.Vehicle_Make +
    " " + Mike.Vehicle_Model + ", manufactured in " + Mike.Vehicle_Year + "!";
}

//Nested functions
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}