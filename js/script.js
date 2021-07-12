// Input parola
var inputWord = prompt("Inserisci una parola", "anna");

// dichirazione funzione isPalindrome()

function isPalindrome (word) {
    // Memorizzo lunghezza parola e la assegno al secondo indice
    var wordLen = word.length;
    var j = wordLen;
    // Confronto delle lettere
    for (var i = 0; i < word.length; i++) {
        j--;
        // Se le lettere smettono di essere uguali ritorna falso
        if (word[i] !== word[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(inputWord));