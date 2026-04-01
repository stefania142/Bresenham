//script.js
//punto de partida del proyecto
console.log("script.js");

/**
 *Función principalque se ejecuta al hacer clic en "dibujar".
 *lee los valores de la tabla y los muestra en consola 
 */

 function dibujar (){
    //leer los valores y convertirlos a numero entero
    let x0= parseInt(document.getElementById("x0").value);
    let y0= parseInt(document.getElementById("y0").value);
    let x1= parseInt(document.getElementById("x1").value);
    let y1= parseInt(document.getElementById("y1").value);

    //Verificación en consola 
    console.log("x0:", x0, " y0:", y0);
    console.log("x1:", x1, " y1:", y1);
 }