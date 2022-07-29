
const parrafoMayusculas = document.getElementById('p1');
const contenidoP1 = parrafoMayusculas.innerHTML

const parrafoMayusculasInicial = document.getElementById('p2');
const contenidoP2 = parrafoMayusculasInicial.innerHTML
const x = contenidoP2;




const cambioParrafor = (cadena1, cadena2 ) => {

    const palabraToUpperCase =[];
    for (const palabra of cadena1.split(' ')) {
        palabraToUpperCase.push(palabra.toUpperCase());
        
    }
    const mayusuclas =  palabraToUpperCase.join(' ');
    console.log(mayusuclas);

    
    let palabraInicialMayuscula = [];
    for (const palabra of cadena2.split(' ')) {
        palabraInicialMayuscula.push(palabra.charAt(0).toUpperCase()+palabra.slice(1))
    }
    const inicioMayusculas = palabraInicialMayuscula.join(' ');
    console.log(inicioMayusculas);    
}


cambioParrafor(contenidoP1, contenidoP2)



const parrafoMayusculasRespuesta = document.createElement('p');
// const parrafoMayusculasRespuestaInicial = document.createElement('respuestap2');

parrafoMayusculasRespuesta.textContent = 'x';
// parrafoMayusculasRespuestaInicial.textContent = inicioMayusculas;

console.log(parrafoMayusculasRespuesta);

console.log(typeof(mayusuclas));




 