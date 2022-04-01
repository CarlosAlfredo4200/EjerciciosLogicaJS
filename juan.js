//Que dia es hoy

// let numDia = 1;
// let semana = 7;

// let diaSolicitado = parseInt(prompt("Ingrese el número de dia :"));

// if (diaSolicitado === 1) {
//   console.log("Hoy es Domingo");
// } else if (diaSolicitado === 2) {
//   console.log("Hoy es lunes");
// } else if (diaSolicitado === 3) {
//   console.log("Hoy es miercoles");
// } else if (diaSolicitado === 4) {
//   console.log("Hoy es jueves");
// } else if (diaSolicitado === 5) {
//   console.log("Hoy es viernes");
// } else if (diaSolicitado === 6) {
//   console.log("Hoy es sabado");
// }

//-------------------------

// Capture varios datos con: código, nombre, edad, sexo y estatura. Seleccione las mujeres
// solteras con estatura no mayor que 1.79. Imprima la edad promedio de los hombres casados.

let mujerSoltera = 0;
let hombreCasado = 0;
let edadHombreIng = 0;
let edadesHombre = 0;
let estado = "";
let promedioEdadHombres = 0;
let codigo = 0;

//------ Inicio pido código --------
codigo = parseInt(prompt("Ingrese código :"));

//Inicio ciclo
while (codigo !== 0) {
 
  nombre = prompt("Ingrese nombre :");
  let sexo = prompt("Ingrese sexo :");

  if (sexo === "f") {
    estado = prompt("Estado civil ? :");

    if (estado === "s") {
      estatura = parseFloat(prompt("Ingrese la estatura :"));
    }
    if (estatura < 1.79) {
      mujerSoltera = mujerSoltera + 1;
      codigo = parseInt(prompt("Ingrese código :"));

    }
  } else {
    estado = prompt("Estado civil ? :");
    if (estado === "c") {
      edadHombreIng = parseInt(prompt("Ingrese edad :"));
      hombreCasado = hombreCasado + 1;
      edadesHombre = edadesHombre + edadHombreIng;
      codigo = parseInt(prompt("Ingrese código :"));

    }

  }
}

//---- Fin ciclo mientras -----

promedioEdadHombres = edadesHombre / hombreCasado;

//----- Imprima ------------------ 
console.log("Promedio edad hombres" + promedioEdadHombres);
console.log("Número de mujeres solteras" + mujerSoltera);
