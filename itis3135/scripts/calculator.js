var num1 = null;
var num2 = null;
var solution = null;
var func = null;
var numSelect = 1;
var operator = null;
var input = getElement("numbers");
var label = getElement("prev-input");
function appendNum(value){
    if(input.value == solution)
    {
        resetValues();
    }
    let num = input.value;
    num += value;
    input.value = num;
}
function operatorSelect(operator){
    if(operator == 2 && input.value == "")
    {
        input.value += "-";
    }
    else if(numSelect == 1){
        num1 = parseInt(input.value);
        console.log("num1: " + num1);
        label.innerHTML = input.value;
        self.operator = operator
        input.value = '';
        numSelect = 2;    
    }
    else{
        /*
        Do another calculation with last solution
        */
        calc("operatorSelect");
        console.log("Doing another operation")
        num1 = solution;
        num2 = null;
        label.innerHTML = num1;
        numSelect = 1;
        self.operator = operator;
        input.value = '';
    }
}
function calc(caller){
    console.log(("accessed calc function from: " + caller));
    let sign;
    if(numSelect == 1 && num1 == null && input.value == "")
    {
        alert("Cannot run calculation without values");
    }
    else if(num1 == null && input.value != "")
    {
        /*Yes I know this is redundant, just working through my thought process*/
        num1 = solution = input.value;
        console.log("Only 1 Value set");
    }
    else if(input.value == "0" && operator == 4)
    {
        /*Change this so it is in the calculator text later. Maybe*/
        alert("Cannot divide by 0");
        resetValues();
    }
    else
    {
        num2 = parseInt(input.value);
        console.log(("num2: " + num2));
        switch (operator){
            case 1:
                solution = num1 + num2;
                sign = " + "
                break;
            case 2:
                solution = num1 - num2;
                sign = " - ";
                break;
            case 3:
                solution = num1 * num2;
                sign = " &times; ";
                break;
            case 4:
                solution = num1 / num2;
                sign = " &divide; ";
                break;
            /*Add more cases for any additional calculations*/
        }
        console.log(("Solution: " + solution));
        displayValues(sign);
        if(caller == "equal button")
        {
            numSelect = 1;
        }
    }
}
function displayValues(sign){
    label.innerHTML = func = (num1+sign+num2);
    console.log("Function: " + func);
    input.value = solution;
}
/*Will reset the values stored in variables if you input a number after a calculation*/
function resetValues(){
    input.value = "";
    if(solution == null){
        label.innerHTML = "&nbsp;";
    }
    else{
        label.innerHTML = solution;
    }
    num1 = num2 = solution = operator = func = null;
    numSelect = 1;
}

function usePrevValue()
{
    input.value = label.innerHTML;
    label.innerHTML = "&nbsp;";
}

/*Used for setting input & lable variable so I don't have to have to have getElementById everywhere I need a reference*/
function getElement(id){
    return document.getElementById(id);
}