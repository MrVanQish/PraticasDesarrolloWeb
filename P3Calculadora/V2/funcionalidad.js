///////////////////////////////////////////////////////////

//Botones (constantes)
const btnnumeros = document.getElementsByName("btnnumeric");
const btnoperaciones = document.getElementsByName("btnoperaciones");
const btnigual = document.getElementsByName("btnigual")[0];
const btnborrar = document.getElementsByName("btnborrar")[0];


//Variables
let resultado = document.getElementById("result");





///////////////////////////////////////////////////////////

///Eventos

btnnumeros.forEach((btn) => {
  btn.addEventListener("click", function () {
    impNumero(btn.innerText);
  });
});

btnoperaciones.forEach(function (btn) {
  btn.addEventListener("click", function () {
    impOp(btn.innerText);
    realizarOp(btn.innerText);
  });
});

btnigual.addEventListener("click", function () {
    calcularResultado();
});

btnborrar.addEventListener("click", function () {
    borrar();
});

///////////////////////////////////////////////////////////

///Funciones

function impNumero(num){


}

function impOp(op){

}

function mostrarEnPantalla(){


}

function borrar(){

}

function realizarOp(op){
  


}