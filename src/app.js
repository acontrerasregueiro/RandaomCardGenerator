function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generarPalo() {
  let numero = getRandomArbitrary(1, 5);
  //console.log(numero);
  let palo,
    color = "";
  switch (numero) {
    case 1: // corazones ♥
      palo = "♥";
      color = "red";
      break;
    case 2: //treboles ♣
      palo = "♣";
      color = "green";
      break;
    case 3: //picas ♠
      palo = "♠";
      color = "black";
      break;
    case 4: //diamantes ♦
      palo = "♦";
      color = "red";
      break;
  }
  let string = palo + color;
  return string;
}

function darColor(color, carta) {
  // console.log(color);
  if (color == "red") {
    document.getElementById(carta).style.color = "red";
  } else if (color == "green") {
    document.getElementById(carta).style.color = "green";
  } else {
    document.getElementById(carta).style.color = "black";
  }
}

function pintarFiguras(numero) {
  if (numero == 10) {
    document.getElementById("numero").innerHTML = "J";
  } else if (numero == 11) {
    document.getElementById("numero").innerHTML = "Q";
  } else if (numero == 12) {
    document.getElementById("numero").innerHTML = "K";
  }
}

renderizar();
function renderizar() {
  let palo = generarPalo();
  let numero = getRandomArbitrary(1, 12);
  document.getElementById("numero").innerHTML = numero;
  pintarFiguras(numero);
  document.getElementById("palo").innerHTML = palo[0];
  document.getElementById("palodos").innerHTML = palo[0];

  darColor(palo.substring(1), "carta");
}
