const prompt = require("prompt-sync")({ sigint: true });

function Spielfeld(){
    console.log (arr1, arr2, arr3);
    console.log (arr4, arr5, arr6);
    console.log (arr7, arr8, arr9);
}

console.log ("Willkommen zu TicTacToe");
console.log ("Hier ist euer Spielfeld.");

let arr1 =[];
let arr2 =[];
let arr3 =[];
let arr4 =[];
let arr5 =[];
let arr6 =[];
let arr7 =[];
let arr8 =[];
let arr9= [];


Spielfeld();

console.log(" Spieler 1 spielt mit x");
console.log(" Spieler 2 spielt mit o");



Zug1();
Spielfeld();
//Zug (2);


function Zug1(){
let dec1 = prompt ("Spieler 1, wo setzt du dein x? ");
if (dec1 === 9){
    // return true;
//   return arr9[0]= "x";
arr9[0]="x";

return arr9[0];
}

}

// if(Zug1() === true){
//     arr9[0] = 9;
//     Spielfeld();
// }