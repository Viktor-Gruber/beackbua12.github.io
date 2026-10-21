console.log("Hello, World!");
// liste aufpassen const kann man nicht mehr ändern let schon :)
// o doch sr, mit einen push :(
const moeglichkeiten = ["Schere", "Stein", "Papier"];
function spielen(spielerWahl) {
    let zufall = Math.floor(Math.random() * 3);
    let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:", computerWahl);
    const ergebnis = document.getElementById("ergebnis")
    const wahl = document.getElementById("wahl")
    wahl.textContent = "Du " + spielerWahl + " Computer " + computerWahl;
    if (spielerWahl === computerWahl) {
        console.log("Unentschieden!");
        ergebnis.textContent = "Unentschieden";


    } else if (
        (spielerWahl === "Schere" && computerWahl === "Papier") ||
        (spielerWahl === "Papier" && computerWahl === "Stein") ||
        (spielerWahl === "Stein" && computerWahl === "Schere")
    ) {
        console.log("Du hast gewonnen" + ergebnis);
        ergebnis.textContent = "Super gewonnen";

    } else {
        console.log("Du hast verloren");
        ergebnis.textContent = "Verloren";
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


