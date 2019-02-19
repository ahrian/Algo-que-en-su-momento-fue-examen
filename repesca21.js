function clickeame() {
    alert("Has conseguido un total de " + puntos + "puntos"); //Aquí tenemos la función del botón que muesta tu puntuación toal
}
let restart = 1; //Aquí inicializo la variable global del valor de repetir la juego.
let puntos = 0; //En esta variable global almacenamos la puntuación.
while (restart) { //Comenzamos el loop jugable.

    numero1 = Math.floor((Math.random() * 10) + 1); //Generamos los valores aleatorios de los dos dígitos a operar.
    numero2 = Math.floor((Math.random() * 10) + 1);
    resultadosuma = numero1 + numero2; //Hacemos dos variables, una con el resultado de la suma y otra de la multiplicación.
    resultadomultiplicacion = numero1 * numero2;

    let pregunta = prompt("Quieres sumar o multiplicar?"); //Hacemos que el juego pregunte que modo de juego vas a jugar.
    switch (pregunta) { //Utilizamos un switch para selecciónar el modo de juego.
        case 'sumar':
            respuesta1 = prompt("Vamos a sumar " + numero1 + "+" + numero2); //Aquí te muestra que operación tienes que hacer.
            if (respuesta1 == resultadosuma) { //Si aciertas de felicita.
                alert("Has acertado!!");
                for (puntos; puntos += 10; i++) { //Como has hacertado te suma 10 puntos a la variable global "puntos".
                    alert('Correcto!!');
                    alert("Actualmente tienes " + puntos + " puntos(s)"); //Te dice la cantidad de puntos que llevas.
                    break;
                }
            } else {
                alert("Has fallado, vuelve a empezar.") //Si has fallado la operación te dice vuelves a empezar.
            }
            break;
        case 'multiplicar': //Aquí sería exactamente lo mismo que en lo anterior pero cambiado los operadores a multiplicar.
            respuesta2 = prompt("Vamos a sumar " + numero1 + "*" + numero2);
            if (respuesta2 == resultadomultiplicacion) {
                alert("Has acertado!!");
                for (puntos; puntos += 10; i++) {
                    alert('Correcto!!');
                    alert("Actualmente tienes " + puntos + " puntos(s)");
                    break;
                }
            } else {
                alert("Has fallado, vuelve a empezar.")
            }
            break;
        default: // Si al comenzar elegise un modo de juego que no existe o lo escribiste mal, vuelves a empezar.
            alert('Noo! Tienes que escribir que operación quieres hacer.');
    };
    restart = confirm("Repetir juego?"); //Pregunta después de cada ronda si quieres seguir.
};