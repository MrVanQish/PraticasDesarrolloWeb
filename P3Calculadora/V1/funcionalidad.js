const btnnumeros = document.getElementsByName("btnnumeric");
const btnoperaciones = document.getElementsByName("btnoperaciones");

const btnigual = document.getElementsByName("btnigual")[0];
const btnborrar = document.getElementsByName("btnborrar")[0];

console.log(btnborrar)
let resultado = document.getElementById("result");

let opActual = "";
let opAnterior = "";

let operacion = undefined;

///////////////////////////////////////////////////////////

///Eventos

btnnumeros.forEach((btn) => {
        btn.addEventListener("click", function () {
            agregarNumero(btn.innerText);
        });
    });

btnoperaciones.forEach(function (btn) {
  btn.addEventListener("click", function () {
    op(btn.innerText);
  });
});

btnigual.addEventListener("click", function () {
  calcular();
  actualizarDisplay();
});

btnborrar.addEventListener("click", function () {
    clear();
  });

///////////////////////////////////////////////////////////

///Funciones

function agregarNumero(num) {
  opActual = opActual.toString() + num.toString();
  actualizarDisplay();
}

function op(operador){

    if(opActual === '') return;

    if(opAnterior !== '') {calcular()};

    operacion = operador.toString();
    opAnterior = opActual;
    opActual = '';
}

function calcular(){

    let resultado;

    const actual = parseFloat(opActual);
    const anterior = parseFloat(opAnterior);

    if(isNaN(actual) || isNaN(anterior))return;

    switch(operacion){

        case '+':
            resultado = anterior + actual;
            break;

        case '-':
            resultado = anterior - actual;
            break;

            
        case '/':
            resultado = anterior / actual;
            break;

        case '*':
            resultado = anterior * actual;
            break;

        default:
            return;


    }

    opActual = resultado;
    operacion = undefined;
    opAnterior = ''


}

function clear(){
    opActual = ''
    let opAnterior = "";
    let operacion = undefined;

    actualizarDisplay();
}

function actualizarDisplay() {
  return (resultado.value = opActual);
}
