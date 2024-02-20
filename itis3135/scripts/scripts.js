function greetings(){
    const company = "Titanic Gopher Co"
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let text = (company + " welcomes you," + name + ". We hope you will still feel " + feeling + ", or that your mood improves.");
    console.log(text);
    document.getElementById("greeting").innerHTML = text;
}
function gonFunc(){
    let text;
    let gons = ["Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Enneagon", "Decagon"];
    let gon = document.getElementById("number").value;
    gon = Math.abs(Math.ceil(gon));
    console.log(("Validated input = " + gon));
    switch(gon){
        case 1:
            text = gons[1-1];
            console.log(("Output: " + text));
            break;
        case 2:
            text = gons[2-1];
            console.log(("Output: " + text));
            break;
        case 3:
            text = gons[3-1];
            console.log(("Output: " + text));
            break;
        case 5:
            text = gons[5-1];
            console.log(("Output: " + text));
            break;
        case 6:
            text = gons[6-1];
            console.log(("Output: " + text));
            break;
        case 7:
            text = gons[7-1];
            console.log(("Output: " + text));
            break;
        case 8:
            text = gons[8-1];
            console.log(("Output: " + text));
            break;
        case 9:
            text = gons[9-1];
            console.log(("Output: " + text));
            break;
        case 10:
            text = gons[10-1];
            console.log(("Output: " + text));
            break;
        default:
            text = "Invalid Input";
            break;
        }
        console.log(("Output: " + text));
        alert(text);
}
function size(){
    const sizes = ["miniscule", "itsy-bitsy", "tiny", "small", "average", "big", "large", "enormous", "titanic", "off the charts"];
    let input = Math.abs(Math.ceil(document.getElementById("sizeNum")));
    let size;
    console.log("input: " + input);
    switch(input){
        case 1:
            size = input -1;
            break;
        case 2:
            size = input -1;
            break;
        case 3:
            size = input -1;
            break;
        case 4:
            size = input -1;
            break;
        case 5:
            size = input -1;
            break;
        case 6:
            size = input -1;
            break;
        case 7:
            size = input -1;
            break;
        case 8:
            size = input -1;
            break;
        case 9:
            size = input -1;
            break;
        default:
            size = 9;
            break;
    }
    let text = ("Your creature's size is " + sizes[size] + " compared to the titanic gopher");
    console.log("Text: " + text);
    document.getElementById("sizeText").innerHTML = text;
}