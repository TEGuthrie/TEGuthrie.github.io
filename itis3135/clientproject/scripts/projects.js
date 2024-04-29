window.onload = function(){
    document.getElementById('mv').onclick = function(){loadImages(0)};
    document.getElementById('other').onclick = function(){loadImages(1)};
    document.getElementById('all').onclick = function(){loadImages(2)};
    loadImages(0);
}
function loadImages(val){
    let divs = document.querySelectorAll('subgallery');
    for (let i = 0; i < 2; i++){
        if(i == val || val == 2){
            divs[i].style.display = "block";
        }
        else{
            divs[i].style.display = "none";
        }
    }
}

function getDiv(){
    return document.getElementById('images')
}