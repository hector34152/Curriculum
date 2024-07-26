function init() {
    let menu = document.querySelector('#menu');
    let boton = document.querySelector('#boton');
    let bLat = document.querySelector('#barraLateral');
    let info = document.querySelector("#informacion");
    let span = document.querySelector("#span");
    let name = document.querySelector("#name");
    let rever = document.querySelectorAll(".reverso");
    boton.addEventListener('click', function (e) {
        if(menu.style.visibility === 'visible'){
            menu.style.visibility = 'hidden';
            bLat.style.width = '32px';
            name.style.position = 'relative';
            span.style.visibility = 'visible';
            rever.forEach(element => {element.style.visibility = 'visible';});
        }
        else{
            menu.style.visibility = 'visible';
            bLat.style.width = '235px';
            name.style.position = 'static';
            span.style.visibility = 'hidden';
            span.style.width = '235px';
            rever.forEach(element => {element.style.visibility = 'hidden';});
        }
    }, false);
}
function changeColor(){
    let bLat = document.querySelector('#barraLateral');
    let colors = [
        "rgb( 21,67,96)","rgb(176,58,46)","rgb(156,100,12)","rgb(33,47,60)","rgb(0,0,0)"];
    if(i==colors.length)
        i=0;
    bLat.style.backgroundColor = colors[i];
    i++;
}