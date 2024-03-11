var input = getElement("numbers");
var label = getElement("prev-input");
let solution = null;
let operator = null;
let num1 = null;

window.onload = function(){
    document.getElementById("0").onclick = function(){buttonHandler(0)};
    document.getElementById("1").onclick = function(){buttonHandler(1)};
    document.getElementById("2").onclick = function(){buttonHandler(2)};
    document.getElementById("3").onclick = function(){buttonHandler(3)};
    document.getElementById("4").onclick = function(){buttonHandler(4)};
    document.getElementById("5").onclick = function(){buttonHandler(5)};
    document.getElementById("6").onclick = function(){buttonHandler(6)};
    document.getElementById("7").onclick = function(){buttonHandler(7)};
    document.getElementById("8").onclick = function(){buttonHandler(8)};
    document.getElementById("9").onclick = function(){buttonHandler(9)};
    document.getElementById("add").onclick = function(){buttonHandler(10)};
    document.getElementById("sub").onclick = function(){buttonHandler(11)};
    document.getElementById("times").onclick = function(){buttonHandler(12)};
    document.getElementById("divide").onclick = function(){buttonHandler(13)};
    document.getElementById("equal").onclick = function(){buttonHandler(14)};
    document.getElementById("reset").onclick = function(){buttonHandler(15)};
    label.
}
/*Return element from document so I can use variables for dom objects*/
function getElement(id){
    return document.getElementById(id);
}
function buttonHandler(button){
    switch (button){
        case 0:
            appendNum("0");
            break;
        case 1:
            appendNum("1");
            break;
        case 2:
            appendNum("2");
            break;
        case 3:
            appendNum("3");
            break;
        case 4:
            appendNum("4");
            break;
        case 5:
            appendNum("5");
            break;
        case 6:
            appendNum("6");
            break;
        case 7:
            appendNum("7");
            break;
        case 8:
            appendNum("8");
            break;
        case 9:
            appendNum("9");
            break;
        case 10:
            if (operator != null){
                calculate();
            }
            break;
        case 11:
            if (input.value == ""){
                appendNum("-")
            }
    }
}
function appendNum(value){
    if(input.value == solutiton){
        resetValues();
    }
    input.value += value;
}