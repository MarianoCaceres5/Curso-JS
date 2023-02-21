
//Seleccion de elementos dom

let mainTitle = document.getElementById('main-title');
console.log(mainTitle);

let buttons = document.getElementsByTagName('button');
console.log(buttons);

let instructionsParagraph = document.getElementsByClassName('instructions');
console.log(instructionsParagraph);

let dinamicLink = document.querySelector('.dinamic-link');
console.log(dinamicLink);

let jumboItems = document.querySelectorAll('.jumbo li');
console.log(jumboItems);


// Manipulacion de elementos DOM

mainTitle.innerHTML = 'Titulo cambiado';

buttons[1].disabled = true; // se desactiva el boton de enviar

instructionsParagraph[0].style.color = 'green'

dinamicLink.setAttribute('href', 'http://google.com'); // le doy al link un href


let options = ['Windows','MacOS','Linux'];

for(i=0;i<options.length;i++){
    jumboItems[i].innerHTML = options[i];
}


// Creacion de elementos en el DOM

let item = document.createElement('li');
item.innerHTML = 'Android';

let jumboList = document.querySelector('.jumbo');
jumboList.appendChild(item); // anadimos un elemento a la lista

jumboList.removeChild(jumboItems[1]) // eliminamos el segundo elemento de la lista

let item2 = document.createElement('li');
item2.innerHTML = 'Ios'
jumboList.replaceChild(item2, jumboItems[0]) // sustituimos el primer elemento


// Eventos en el DOM

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay')

function toggleModal(){

    if(modal.style.display == 'none'){
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    }else{
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }    
}

//

let input = document.querySelector('input');
input.addEventListener('input', () => {
    buttons[1].disabled = false;
})



// Manipulacion de clases CSS

jumboList.addEventListener('click', () => {
    // jumboList.classList.add('marked'); // .remove(clase-css a eliminar)

    jumboList.classList.toggle('marked');
})

