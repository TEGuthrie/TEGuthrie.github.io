let bod = getBody();
let dark = '#090b0c'
window.onload = function(){
    document.getElementById("theater").onclick = function(){theaterMode()};
    defaultBGC = getBody().style.backgroundColor;
    defaultTxt = getBody().style.color;
    defaultMain = getMain().style.color;
}
function theaterMode(){
    if (bod.style.backgroundColor === defaultBGC){
        document.body.style.backgroundColor = dark;
        bod.style.color = '#b7c3cd';
        document.getElementsByTagName('main')[0].style.backgroundColor = dark;
        console.log("Theater Mode activate")
    }
    else{
        bod.style.backgroundColor = defaultBGC;
        bod.style.color = defaultTxt;
        document.getElementsByTagName('main')[0].style.backgroundColor = defaultMain;
        console.log("Theater Mode deactivate")
    }
}

function getBody(){
    return document.getElementsByTagName('body')[0];
}
function getMain(){
    return document.getElementsByTagName('main')[0];
}