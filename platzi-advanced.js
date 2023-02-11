
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');
const form = document.querySelector('#form');

//Evento addEventListener que escucha el evento click del boton btn y ejecuta la funcion btnOnClick
// btn.addEventListener('click', btnOnClick)
// function btnOnClick() {
//     const sumainputs = input1.value + input2.value;
//     presult.innerText = "El resultado es: " + sumainputs;
// }

form.addEventListener('submit', sumarInput)
//funcion que muestra la suma de los dos inputs con el evento submit
//y agregando un parrafo al que se le asigna, el resultado de la concatenacion de los dos inputs, con el evento innerText.
function sumarInput(event) {
    //al estar envuelto en una etiqueta html <form> la cual toca descomentar del index.html, 
    // automaticamente el ultimo boton adquiere el type="submit"  y se envia recarga la pagina como si fuera un formulario.
    // La solucion es definir el button con Type="button" para eliminar esta accion de carga de la pagina 
    //y que no se muestre el resultado esperado,para eso sirve el event.preventDefault que es para anular esa accion
    event.preventDefault();
    const sumainputs = input1.value + input2.value;
    presult.innerText = "El resultado es: " + sumainputs;
}