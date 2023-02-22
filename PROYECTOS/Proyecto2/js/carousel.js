let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');
let images = document.querySelectorAll('.carousel .slide img');

let rightArrow = document.querySelector('.right-arrow');
let leftArrow = document.querySelector('.left-arrow');
let counter = 0;


function loadSlides() {

    carousel.style.height = '90vh';
    let heightCarousel = carousel.offsetHeight; 

    for (i=0; i < images.length; i++) {
        if (images[i].offsetHeight < heightCarousel) {
            heightCarousel = images[i].offsetHeight;
        }
    }

    carousel.style.height = heightCarousel + 'px';

    for (i=0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
}


function openModal(){
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    loadSlides()
}

function closeModal(){
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}

function nextSlide(){
    counter++;
    updateArrowsState();
    for(i = 0; i < slides.length; i++){
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px'; //desplazar el slide a la derecha
    }
}

function prevSlide(){
    counter--;
    updateArrowsState();
    for(i = 0; i < slides.length; i++){
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px'; //desplazar el slide a la derecha
    }
}

function updateArrowsState(){
    
    if(counter != 0){
        leftArrow.style.display = 'flex';
    }else{
        leftArrow.style.display = 'none';
    }

    if(counter === slides.length -1){
        rightArrow.style.display = 'none';
    }else{
        rightArrow.style.display = 'flex';
    }

    rightArrow.style.pointerEvents = 'none'; //desactivamos la flecha
    leftArrow.style.pointerEvents = 'none';

    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto'; //activamos las flechas cuando termine la animacion
        leftArrow.style.pointerEvents = 'auto';
    }, 900)
}