let numeroSecreto = 0
let intentos = 0;
let listaSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento() {
    //para capturar lo que el usuario colocó en el input box.
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto){
        //Se asigna a la etiqueta p de HTML el mensaje de que el usuario acertó si cumple la condición
        //Se hace uso del operador ternario.
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        //se elimina el atributo DISABLED del botón Nuevo Juego que tiene id "reiniciar"
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p',"El número secreto es menor.");
        } else {
            asignarTextoElemento('p',"El número secreto es mayor.");
        }
        intentos++;
        //Se usa la función limpiar al final del else de cuando el usuario no adivina el numero secreto
        limpiarCaja();
    }
}

function limpiarCaja() {
    //borrar el valor ingresado en el input box de la página
    document.querySelector('#valorUsuario').value = "";
}

function generarNumeroSecreto() {
    //generar número aleatorio
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaSorteados);
    console.log(listaSorteados.length);
    /*
    FORMA 1.
    //Antes de validar el array de la listaSorteados
    //Debemos averiguar si ya se hizo el aleatorio de todos los números
    if (listaSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',"Ya fueron sorteados todos los números posibles");
    } else {
        //Validar si el número generado está incluido en la  lista
        if (listaSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();              
        } else {
            //Cuando el numeroGenerado será jugado, se guarda en la lista para que no lo tome más
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    */
    //FORMA 2.
    //Antes de validar el array de la listaSorteados
    //Debemos validar que solo hayan maximo 3 numeros en la lista
    if (listaSorteados.length == 3) {
        asignarTextoElemento('p',"Ya se cumplió el número máximo de juegos disponibles");
        document.querySelector("#intento").setAttribute('disabled',true)
    } else {
        //Validar si el número generado está incluido en la  lista
        if (listaSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();              
        } else {
            //Cuando el numeroGenerado será jugado, se guarda en la lista para que no lo tome más
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
}

function condicionesIniciales(){
    //Restablecer los mensajes iniciales del juego con las etiquetas HTML
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //Definir nuevamente la variable numero secreto con la función generarNumeroSecreto()
    numeroSecreto = generarNumeroSecreto();
    //Inicializar intentos en 1;
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio
    //generar nuevo número aleatorio
    //Inicializar intentos
    condicionesIniciales();
    //Disable botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled',true);
}

// asignarTextoElemento('h1',"Juego del número secreto");
// asignarTextoElemento('p',"Indica un número del 1 al 10");
condicionesIniciales();




