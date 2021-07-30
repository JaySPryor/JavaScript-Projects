/*********JAVASCRIPT FOR PIZZA PROJECT*************/

//Generates Receipt log in console & visual list/Price of order on screen.
function getReceipt() {
    //Initialized our string to get passed from function
    // to function, grows line by line to full receipt
    var text1 = "<h3>You Ordered</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //Prices of each size of pizza.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    //runningTotal becomes sizeTotal.
    runningTotal = sizeTotal;
    //logs size & price to console.
    console.log(selectedSize+" = $"+sizeTotal+".00");
    //logs "You ordered 'pizza size'" to console.
    console.log("size text1 : "+text1);
    //logs current subtotal to console.
    console.log("subtotal: $"+runningTotal+".00");
    //These variables get passed on to each function.
    getTopping(runningTotal,text1); 
};

//checks how many toppings were selected.
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            //logs selected toppings to console.
            console.log("selected topping item: ("+toppingArray[j].value+")");
            //Sets text1 to a list of toppings.
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    //Takes amount of selected toppings to calculate
    // (-1 free topping) additional price.
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //Adds runningTotal and number of toppings to create new runninTotal.
    runningTotal = (runningTotal + toppingTotal);
    //Logs Total amount of toppings to console.
    console.log("total selected topping items: "+toppingCount);
    //Logs price of toppings to console.
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    //logs current order (pizza size & toppings) to console.
    console.log("topping text1: "+text1);
    //Logs Total price for order to console.
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //Lists Order on Screen.
    document.getElementById("showText").innerHTML = text1;
    //Shows order total on screen.
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; 
};
