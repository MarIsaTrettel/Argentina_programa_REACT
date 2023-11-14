const num1 = document.getElementById("num1");
const num2 = document.getElementById('num2');
const resultado = document.getElementById('resultado');

const botonSuma = document.getElementById(`sumar`);
botonSuma.addEventListener('click', suma);
const botonResta = document.getElementById(`restar`);
botonResta.addEventListener('click', resta);
const botonDiv = document.getElementById(`dividir`);
botonDiv.addEventListener('click', dividir);
const botonMultip = document.getElementById(`multiplicar`);
botonMultip.addEventListener('click', multiplicar);

function suma() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);
    let total = numero1 + numero2;
    resultado.textContent = total;
}

function resta() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);
    let total = numero1 - numero2;
    resultado.textContent = total;
}

function dividir() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);

    if (numero2 != 0 && numero2 != NaN && numero2 != null && numero2 != undefined) {
        let total = numero1 / numero2;
        resultado.textContent = total;
    } else {
        resultado.textContent = ('No se puede dividir');
    }
}

function multiplicar() {
    let numero1 = parseFloat(num1.value);
    let numero2 = parseFloat(num2.value);
    let total = numero1 * numero2;
    resultado.textContent = total;
}