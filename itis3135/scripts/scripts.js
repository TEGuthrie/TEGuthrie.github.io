let glob_size = 5;
window.onload = function(){
    facts();
}
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
    let input = parseInt(document.getElementById("sizeNum").value);
    if(input > 10){
        glob_size = 10;
    }
    else{
        glob_size = input;
    }
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
    let text = ("Your gopher's size is " + sizes[size]);
    console.log("Text: " + text);
    document.getElementById("sizeText").innerHTML = text;
}
function holes(){
    const min =  Math.ceil(2);
    const max = Math.floor(50);
    let holes = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("holes").innerHTML = ("There are " + holes + " gopher holes in your yard.");
}
function length(){
    //["miniscule", "itsy-bitsy", "tiny", "small", "average", "big", "large", "enormous", "titanic", "off the charts"];
    //                   mi  ib   tin sml avg big  lrg  eno tit
    const multipliers = [.1, .25, .5, .75, 1, 1.2, 1.4, 1.6, 2, 3, 5];
    const min = Math.ceil(5);
    const max = Math.floor(14);
    let def_size = Math.floor(Math.random() * (max - min + 1) + min);
    console.log("glob_size:" + glob_size);
    let size = Math.floor(def_size * multipliers[glob_size]);
    console.log("def_size: " +def_size);
    console.log("Size: " +size);
    if (size <= 24){
        document.getElementById("length").innerHTML = ("Your gopher is " + size + " inches long.");
    }
    else{
        let feet = Math.floor(size/12);
        let inches = size%12;
        console.log("Feet: "+feet+", Inches: "+inches);
        document.getElementById("length").innerHTML = ("Your gopher is " + feet +" feet and "+ inches +"inches long.")
    }
}
function facts(){
    const facts = [
        "Gophers can close their lips behind their four incisors to keep dirt out of their mouths while digging.",
        "Gophers have small eyes and ears, and no distinct neck.",
        "Gophers have short but powerful legs that end in broad feet with large claws.",
        "Gophers have four-inch tails that they use for navigation while moving backwards through tunnels.",
        "Gophers have abundant whiskers that help them feel out their surroundings.",
        "Gophers have a highly-developed sense of touch, which they rely on heavily for survival.",
        "Gophers use pouches in their cheeks to carry food.",
        "Gophers are known for building complex underground tunnel systems.",
        "Gophers can travel at speeds of up to 16 miles per hour.",
        "Gopher litters usually average 5 to 6 young. In non-irrigated areas, gophers tend to have 1 litter per year but in irrigated sites, gophers can produce up to 3 litters per year.",
        "Gophers' predators include snakes, owls, coyotes, weasels, badgers, bobcats, and even herons."
    ]
    let fact = Math.floor(Math.random() * (11 - 0 + 1) + 0);
    document.getElementById("fact").innerHTML = facts[fact];
}