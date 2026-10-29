console.log("Hello, World!");
// liste aufpassen const kann man nicht mehr ändern let schon :)
// o doch sr, mit einen push :( btw das ist der scope der zwischen raum für alle 
    
const playeranzeige = document.getElementById("player")
    const spielerw = document.getElementById("spielerw")
    const computerw = document.getElementById("computerw")
    const computeranzeige = document.getElementById("computer")
    const computerbild = document.getElementById("computerbild")
    const spielerbild = document.getElementById("spielerbild")
    let player = 0
    let computer = 0
const moeglichkeiten = ["Schere", "Stein", "Papier"];
function spielen(spielerWahl) {
    // Math floor für keine kommazahlen
    
    let zufall = Math.floor(Math.random() * 3);
    let computerWahl = moeglichkeiten[zufall];
    console.log("Du:", spielerWahl, "Computer:", computerWahl);
    // Für die Konsole zum Testen document (console.log)
   
    const ergebnis = document.getElementById("ergebnis")
     spielerw.textContent = "Spieler: " + spielerWahl;
    spielerbild.src = spielerWahl.toLowerCase() + ".png";
   
    computerbild.src = computerWahl.toLowerCase() + ".png";
    document.getElementById("bilder").hidden = false;
        computerw.textContent = "Computer: " + computerWahl;
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
        confetti();
        
    } else {
        console.log("Du hast verloren");
        ergebnis.textContent = "Verloren";
        computer += 1
    }
    computeranzeige.textContent = "Computer: " + computer;
   
};
// spiele Button
document.getElementById("x").addEventListener("click", function () {

    document.getElementById("spiele").hidden = false;
});
// Wupp schere button

document.getElementById("Schere").addEventListener("click", function () {
    spielen("Schere")
})
// Stoa

document.getElementById("Stein").addEventListener("click", function () {

    spielen("Stein")
});


// Papier

document.getElementById("Papier").addEventListener("click", function () {
    // snipi snapi snu aaaaaaaaaaaaa
   spielen("Papier")
});
// restart Button
document.getElementById("restart").addEventListener("click", function () {
    player = 0
    computer = 0
    playeranzeige.textContent = "Spieler: " + player;
    computeranzeige.textContent = "Computer: " + computer;
})
// test

