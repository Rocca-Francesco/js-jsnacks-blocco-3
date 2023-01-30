// prendo il mio bottone e gli assegno un evento
const generaEl = document.getElementById("genera");

generaEl.addEventListener(
    "click",
    function () {
        // prendo il primo valore dall'utente
        let numMinoreEl = prompt("Inserisci il numero minore.");

        // verifico che l'utente abbia inserito un numero nel primo prompt e che sia nel range compreso
        while (isNaN(numMinoreEl) && numMinoreEl >= 0 && numMinoreEl <= 100) {
            alert("Inserisci dei numeri, da 0 a 100.");
            numMinoreEl = prompt("Inserisci il numero minore.");
        };

        // prendo il secondo valore dall'utente
        let numMaggioreEl = prompt("Inserisci il numero maggiore.");

        // verifico che l'utente abbia inserito un numero nel secondo prompt e che sia nel range compreso
        while (isNaN(numMaggioreEl) && numMinoreEl >= 0 && numMinoreEl <= 100) {
            alert("Inserisci dei numeri, da 0 a 100.");
            numMaggioreEl = prompt("Inserisci il numero maggiore.");
        };

        // verifico che i numeri inseriti siano giusti
        while (numMinoreEl > numMaggioreEl) {
            alert("Il primo numero è maggiore del secondo, riprova.");
            numMinoreEl = prompt("Inserisci il numero minore.");
            numMaggioreEl = prompt("Inserisci il numero maggiore.");
        };

        // genero il numero nel range scelto
        let numRandomEl = 0;

        while (numRandomEl < numMinoreEl || numRandomEl > numMaggioreEl) {
            numRandomEl = Math.floor((Math.random() * 100) + 1);
        };

        // scrivo il numero generato in pagina
        document.getElementById("numRandom").innerHTML = "Il numero generato è " + numRandomEl;
    }
);