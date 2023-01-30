// collego il mio pulsante e associo un evento
const scegliEl = document.getElementById("scegli");

scegliEl.addEventListener(
    "click",
    function () {
        // faccio scegliere la quantità di array al mio utente
        let numArray = prompt("Inserisci un numero da 0 a 100");

        // controllo che il valore inserito sia un numero
        while (isNaN(numArray) && numMinoreEl >= 0 && numMinoreEl <= 100) {
            alert("Non è un numero tra 0 e 100.")
            numArray = prompt("Inserisci un numero da 0 a 100");
        };

        // converto il numero inserito dall'utente in un numero per js
        numArray = parseInt(numArray);
        console.log(numArray);

        // dichiaro la mia quantità di array iniziale e il mio array vuoto
        let startArray = 0;
        let newArray = [];

        // prendo il mio div dove scriverò i vari array
        const inizioArrayEl = document.getElementById("inizioArray");

        while (startArray < numArray) {
            // creo il mio array provvisorio di 10 elementi
            for (let i = 0; i < 10; i++) {
                // creo un numero random
                let numRandom = Math.floor((Math.random() * 100) + 1);
                // push il mio numero random
                newArray.push(numRandom);
            };
            // incremento la mia quantità di array 
            startArray++;

            // creo un li da mettere nel mio html
            let arrayFinito = document.createElement("li");

            // scrivo il mio array e rinizio il ciclo finchè non ne ho quanti stabiliti
            arrayFinito.innerHTML = "Questo è il mio array n " + startArray + ": " + newArray;
            inizioArrayEl.appendChild(arrayFinito);
            // resetto il mio array
            newArray = []
        };
    }
);