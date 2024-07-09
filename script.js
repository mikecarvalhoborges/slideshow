var slide = document.querySelector('.slideshow')

var imagens = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg'
]

var tempo = 2000

var cont = 0

function moveSlideShow(){
    slide.src = imagens[cont]

    if(cont < imagens.length - 1) {
        cont++
    } else {
        cont = 0
    }

    setTimeout("moveSlideShow()", tempo)
}

window.onload = moveSlideShow