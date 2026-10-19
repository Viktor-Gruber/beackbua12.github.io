console.log("Hello, World!");

// liste aufpassen const kann man nicht mehr ändern let schon :)
const moeglichkeiten = ["Schere", "Stein", "Papier"];

// spiele Button
    document.getElementById("x").addEventListener("click", function () {

        document.getElementById("spiele").hidden = false;
});
// Wupp schere button gottsedank hot ds nd so laung dauert XD

document.getElementById("schere").addEventListener("click", function () {

    const spielerWahl = "schere";
    let zufall = Math.floor(Math.random() * 3);
    let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:", computerWahl);
})
// Huans Stoa

document.getElementById("stein").addEventListener("click", function () {
    
    const spielerWahl = "stein";
    let zufall = Math.floor(Math.random() * 3);
    let computerWahl = moeglichkeiten[zufall];
    console.log("Du.", spielerWahl, "Computer:",computerWahl);
}) 

// Scheiß Papier

document.getElementById("papier").addEventListener("click", function () {
    
    const spielerWahl = "papier";
let zufall = Math.floor(Math.random() * 3);
let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:" ,computerWahl);
})
