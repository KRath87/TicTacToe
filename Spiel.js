const prompt = require("prompt-sync")({ sigint: true });

function Spielfeld() {
  console.log(arr[1], arr[2], arr[3]);
  console.log(arr[4], arr[5], arr[6]);
  console.log(arr[7], arr[8], arr[9]);
}

function Zug1() {
  let dec1 = prompt("Spieler 1, wo setzt du dein x? ");
  if (dec1 < 1 || dec1 > 9 || arr[dec1] === "x" || arr[dec1] === "o") {
    console.log("");
    console.log("Bitte gebe eine gültige Position ein! ");
    console.log("");
    return Zug1();
  }
  arr[dec1] = "x";
  return arr[dec1];
}

function Zug2() {
  let dec2 = prompt("Spieler 2, wo setzt du dein o? ");
  if (dec2 < 1 || dec2 > 9 || arr[dec2] === "x" || arr[dec2] === "o") {
    console.log("");
    console.log("Bitte gebe eine gültige Position ein! ");
    console.log("");
    return Zug2();
  }
  arr[dec2] = "o";
  return arr[dec2];
}

console.log("");
console.log("Willkommen zu TicTacToe");
console.log("");
console.log("Hier ist euer Spielfeld.");
console.log("");

// habe das in ein array zusammengefasst, damit ich eine laufende for-Schleife nutzen kann.
let arr = ["[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]", "[]"];
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];
// let arr5 = [];
// let arr6 = [];
// let arr7 = [];
// let arr8 = [];
// let arr9 = [];

Spielfeld();

console.log("");
console.log(" Spieler 1 spielt mit x");
console.log("");
console.log(" Spieler 2 spielt mit o");
console.log("");

while (Winprüfung() != true) {
  Zug1();
  Spielfeld();
  if (Winprüfung() === true) {
    break;
  } else if (Winprüfung() != true) {
    Zug2();
    Spielfeld();
    if (Winprüfung() === true) {
      break;
    }
  }
}

function Winprüfung() {
  // Reihe horizontal 1
  if (arr[1] === "o" && arr[2] === "o" && arr[3] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[1] === "x" && arr[2] === "x" && arr[3] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Reihe horizontal 2
  if (arr[4] === "o" && arr[5] === "o" && arr[6] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[4] === "x" && arr[5] === "x" && arr[6] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Reihe horizontal 3
  if (arr[7] === "o" && arr[8] === "o" && arr[9] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[7] === "x" && arr[8] === "x" && arr[9] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Diagonal 1

  if (arr[1] === "o" && arr[5] === "o" && arr[9] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[1] === "x" && arr[5] === "x" && arr[9] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Diagonal 2

  if (arr[7] === "o" && arr[5] === "o" && arr[3] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[7] === "x" && arr[5] === "x" && arr[3] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Reihe vertikal 1
  if (arr[1] === "o" && arr[4] === "o" && arr[7] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[1] === "x" && arr[4] === "x" && arr[7] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Reihe vertikal 2
  if (arr[2] === "o" && arr[5] === "o" && arr[8] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[2] === "x" && arr[5] === "x" && arr[8] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  // Reihe vertikal 3
  if (arr[3] === "o" && arr[6] === "o" && arr[9] === "o") {
    console.log("Spieler Nummer 2 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }

  if (arr[3] === "x" && arr[6] === "x" && arr[9] === "x") {
    console.log("Spieler Nummer 1 hat gewonnen. Herzlichen Glückwunsch! ");
    return true;
  }
}
