console.log("Hello, World!");

// liste aufpassen const kann man nicht mehr ändern let schon :)
const moeglichkeiten = ["schere", "stein", "papier"];

// spiele Button
    document.getElementById("x").addEventListener("click", function () {

        document.getElementById("spiele").hidden = false;
});
// Wupp schere button

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
});

// Scheiß Papier

document.getElementById("papier").addEventListener("click", function () {
    // snipi snapi snu aaaaaaaaaaaaa
    const spielerWahl = "papier";
let zufall = Math.floor(Math.random() * 3);
let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:" ,computerWahl);
    if (spielerWahl === computerWahl) {
        console.log("Untentschieden!");
    
    } else if (
        (spielerWahl === "schere" && computerWahl === "papier") ||
        (spielerWahl === "papier" && computerWahl === "stein") ||
        (spielerWahl === "stein" && computerWahl === "schere")
    ){
        console.log("Du hast gewonnen");
    } else {
        console.log("Du hast verloren");
    }});
