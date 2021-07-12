//  Pari e dispari

function getNumber() {
    return Math.floor(Math.random() * 5) + 1
}

// Dichiarazione isEven
function isEven(number) {
    if (number % 2 === 0) {
    return true;
    }
    return false;
}

// input scelta utente
var userChoice = prompt("Pari o Dispari", "pari").toLowerCase();

var userNum = parseInt(prompt("Inserisci un numero da 1 a 5", "3"));
var cpuNum = getNumber();

console.log(userChoice);
if (userChoice === "pari") {
    if (isEven(userNum + cpuNum)) {
        alert("Hai vinto")
    } else {
        alert("Hai perso!")
    }
} else if (userChoice === "dispari") {
    if (!isEven(userNum + cpuNum)) {
        alert("Hai vinto")
    } else {
        alert("Hai perso!")
    }
}

console.log(userNum);
console.log(cpuNum);