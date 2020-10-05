function sing() {

    let letra = [];
    let frases = 0;
        do {
            if (frases == 5) {
                letra.push(" words of wisdom");
            } else if (frases == 11) {
                letra.push(" there will be an answer");
            } else {
                letra.push("let it be");
            }
            frases++
        } while (frases <= 12);
        return letra.join() + ".";
}

//Your code above ^^^

console.log(sing());