// prendo il mio bottone e associo un evento
const inserisciEl = document.getElementById("inserisci");

inserisciEl.addEventListener("click",
    function () {
        // creo il mio array vuoto e il mio contatore somma
        let numListEl = [];
        let somma = 0;

        while (somma < 50) {
            // inserisco il numero
            let currentNum = prompt("Inserisci un numero.");
            // controllo che il valore inserito sia un numero
            if (isNaN(currentNum)) {
                alert("Non è un numero!");
            } else {
                // converto il mio numero in un numero per js
                currentNum = parseInt(currentNum);
                // pusho nell'array
                numListEl.push(currentNum);
                // tengo conto del numero corrente nella somma
                somma += currentNum;
            };
        };

        // quando la mia somma supera 50 stampo l'array e la somma raggiunta
        document.getElementById("numList").innerHTML = "I numeri da te inseriti sono: " + numListEl + ". La somma raggiunta è " + somma + "."
    }
);