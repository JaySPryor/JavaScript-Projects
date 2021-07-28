/*    JAVASCRIPT FOR CALCULATOR    */

//creates object to keep track of values.
const Calculator = {
    //Displays 0 on the screen.
    Display_Value: '0',
    //this will hold first operand for any expressions, set to null for now.
    First_Operand: null,
    //checks for second operand.
    Wait_Second_Operand: false,
    //this holds operator, set to null for now.
    operator: null,
};

//this modifies values each time a button is clicked.
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    //We are checking to see if Wait_Second_Operand is true, and
    //set Display_Value to the key that was clicked.
    if (Wait_Second_Operand == true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current value is
        // 0 otherwise adds into it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// ******* SECTION FOR HANDLING OPERATORS *********
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator
    //When an operator key is pressed, convert current number
    // displayed on screen to number and store result in 
    // Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if operator already exists and if Wait_Second_Operand is true,
    // then updates the operator and exits from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//Checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the operator
        // in the Perform_Caluculation object and the function that matches the
        // operator is executed.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed(9)
        //This removes any trailing 0s.
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);

    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the screen with contents fo Display_Value.
function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

/* ********* SECTION FOR MONITORING BUTTON CLICKS *********/

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    // thats clicked.
    const { target } = event;
    //If the element that was clicked on is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Ensures that AC clears the numbers from the calculator.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})