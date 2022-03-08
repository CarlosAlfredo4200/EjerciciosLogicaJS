// Dado un numero, inviertelo y devuelve de nuevo el entero

//--------------mi version -----------------------------
const invertirNumero = (numero) => {
  let newNumero = "";

  let invertir = numero.toString();
  for (let digito of invertir) {
    newNumero = digito + newNumero;
  }
  console.log(newNumero);
};

//invertirNumero(456);

//-----------Version Victor --------------------------

function invertirNum (numero) {
    let invertido = numero.toString().split('').reverse().join('')
    console.log(invertido);
}
invertirNum(456)
