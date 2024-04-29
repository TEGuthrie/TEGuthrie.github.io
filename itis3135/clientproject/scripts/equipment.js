var bod = getBody();
window.onload = function(){
    document.getElementById("theater").onclick = function(){theaterMode()};
    defaultBGC = getBody().style.backgroundColor;
    defaultTxt = getBody().style.color;
}
function theaterMode(){
    if (bod.style.backgroundColor === defaultBGC){
        document.body.style.backgroundColor = '#090b0c';
        bod.style.color = '#b7c3cd';
        console.log("Theater Mode activate")
    }
    else{
        bod.style.backgroundColor = defaultBGC;
        bod.style.color = defaultTxt;
        console.log("Theater Mode deactivate")
    }
}

function getBody(){
    return document.getElementsByTagName('body')[0];
}