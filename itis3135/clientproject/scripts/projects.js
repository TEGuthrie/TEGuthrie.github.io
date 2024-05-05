window.onload = function(){
    document.getElementById('mv_btn').addEventListener('click', function(){loadImages(0)});
    document.getElementById('other_btn').addEventListener('click',function(){loadImages(1)});
    document.getElementById('all_btn').addEventListener('click', function(){loadImages(2)});
    document.querySelector('.popout span').addEventListener('click', function(){
        document.getElementById('popout').style.display = "none";
    });
    /*document.querySelectorAll('.imgGallery').forEach((image) =>{
        image.addEventListener('click', popImage(image.getAttribute('src')));
    });
    */
}
window.onclick = e => {
    console.log(e.target.className);
    if (e.target.className === 'imgGallery'){
        popImage(e.target.src);
    }
    else if(document.getElementById('popout').style.display === 'flex' && e.target.id != 'pop-image'){
        document.getElementById('popout').style.display = "none";
    }
}
function loadImages(val){
    let divs = document.querySelectorAll('.subgallery');
    for (let i = 0; i < 2; i++){
        if(i === val || val === 2){
            divs[i].style.display = "flex";
        }
        else{
            divs[i].style.display = "none";
        }
    }
}
function popImage(image){
    console.log('Image clicked');
    document.getElementById('popout').style.display = "flex";
    document.getElementById('pop-image').setAttribute('src', image);

}

function getDiv(){
    return document.getElementById('images')
}