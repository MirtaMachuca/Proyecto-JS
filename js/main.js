function num_random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function validar_num(texto){
    let NUMERO=parseFloat(prompt(texto))
    while(isNaN(NUMERO) || NUMERO <1) { 
        alert('Ingrese el dato que corresponde');
        NUMERO=parseFloat(prompt(texto))
    }
    return NUMERO;
}
let jugar=true;
while(jugar){
    
    let NOMBRE = prompt('Ingresa tu nombre');
    alert(`Bienvenida al juego Adivina Adivinador, ${NOMBRE}`);

    let RANGO_MAX, CANT_INTENTOS;
    let NIVEL = validar_num('Elige un nivel de dificultad:\n 1: Fácil (1-20) \n 2: Medio (1-50) \n 3: Difícil (1-100)');

    switch (NIVEL) {
        case 1:
            RANGO_MAX = 20;
            CANT_INTENTOS = 5;
            break;
        case 2:
            RANGO_MAX = 50;
            CANT_INTENTOS = 7;
            break;
        case 3:
            RANGO_MAX = 100;
            CANT_INTENTOS = 10;
            break;
        default:
            alert("Por defecto comenzaremos con nivel Fácil.");
            RANGO_MAX = 20; 
            CANT_INTENTOS = 5; 
            break;
    }

    let NUM_ADIVINADOR = num_random(1, RANGO_MAX);
    alert (NUM_ADIVINADOR);

    for (let i = 0; i < CANT_INTENTOS; i++) {

        let NUM_INGRESADO = validar_num(`Ingresa un número del 1 al ${RANGO_MAX}, tienes ${CANT_INTENTOS} intentos`);

        if (NUM_INGRESADO === NUM_ADIVINADOR) {
            alert(`¡Felicidades, ${NOMBRE}! Acertaste el número ganador: ${NUM_ADIVINADOR}`);
            break;
        } else if (NUM_INGRESADO < 1 || NUM_INGRESADO > RANGO_MAX) {
            alert(`El rango de números a jugar es del 1 al ${RANGO_MAX}`);
        } else if (NUM_INGRESADO < NUM_ADIVINADOR) {
            alert('Una pista el número es mayor');
        } else {
            alert('Una pista el número es menor');
        }
        CANT_INTENTOS=CANT_INTENTOS-1;
    }

    if (CANT_INTENTOS == 0) {
        console.log(`Te quedaste sin intentos. El número secreto era ${NUM_ADIVINADOR}.`);
    }

    SEGUIR=confirm("¿Desea seguir jugando?");

    if(!SEGUIR){
       break;
    }
}

//const SEGUIR=confirm("¿Desea seguir jugando?");

//if(!SEGUIR){
////    break;
//}