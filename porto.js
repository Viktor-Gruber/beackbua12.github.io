console.log("Hello, World!");
// liste aufpassen const kann man nicht mehr ändern let schon :)
// o doch sr, mit einen push :(
    let player = 0
    let computer = 0
const moeglichkeiten = ["Schere", "Stein", "Papier"];
function spielen(spielerWahl) {
    // Math floor für keine kommazahlen
    let zufall = Math.floor(Math.random() * 3);
    let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:", computerWahl);
    // Für die Konsole zum Testen document (console.log)
    const playeranzeige = document.getElementById("player")
    const computeranzeige = document.getElementById("computer")
    const ergebnis = document.getElementById("ergebnis")
    const wahl = document.getElementById("wahl")
    wahl.textContent = "Du " + spielerWahl + " Computer " + computerWahl;
    if (spielerWahl === computerWahl) {
        console.log("Unentschieden!");
        ergebnis.textContent = "Unentschieden";

        // === checkt gleich ? && checkt ob beide true sind || ist gleich wie in python ein or 
    } else if (
        (spielerWahl === "Schere" && computerWahl === "Papier") ||
        (spielerWahl === "Papier" && computerWahl === "Stein") ||
        (spielerWahl === "Stein" && computerWahl === "Schere")
    ) { // textContent für die webseite text ist verbunden mit ergebnis
        console.log("Du hast gewonnen" + ergebnis);
        ergebnis.textContent = "Super gewonnen";
        player += 1
        playeranzeige.textContent = "Spieler: " + player;

    } else {
        console.log("Du hast verloren");
        ergebnis.textContent = "Verloren";
        computer += 1
        computeranzeige.textContent = "Computer: " + computer;
    }
};
// spiele Button
document.getElementById("x").addEventListener("click", function () {

    document.getElementById("spiele").hidden = false;
});
// Wupp schere button

document.getElementById("Schere").addEventListener("click", function () {
    spielen("Schere")
})
// Huans Stoa

document.getElementById("Stein").addEventListener("click", function () {

    spielen("Stein")
});


// Scheiß Papier

document.getElementById("Papier").addEventListener("click", function () {
    // snipi snapi snu aaaaaaaaaaaaa
   spielen("Papier")
});


