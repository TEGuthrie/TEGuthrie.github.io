let num1 = null;
let num2 = null;
let solution = null;
let numSelect = 1;
let operator = null;
let input = document.getElementById("numbers");
function appendNum(value){
    let num = input.value;
    num += value;
    document.input.value = num;
}
function operatorSelect(operator){
    self.operator = operator
    if(numSelect == 1){
        num1 = parseInt(input.value);
        input.value = '';
        numSelect = 2;
        
    }
    else{
        calc();
    }
}
function calc(){
    if(numSelect == 1 && num1 == null && input.value == "")
    {
        alert("Cannot run calculation without values");
    }
    else if(num1 == null && input.value != "")
    {
        /*Yes I know this is redundant, just working through my thought process*/
        input.value = input.value;
    }
    else if
}