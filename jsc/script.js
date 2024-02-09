/*
Sfruttiamo le timing functions per fare il
conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà
scalare fino alle 9:30 di lunedì mattina!
*/

// Setto la fine del timer a sabato 10/02/2024
let dataFine = new Date();

dataFine.setDate(dataFine.getDate() + 1)

// Setto anche l'orario
dataFine.setHours(9);
dataFine.setMinutes(30);


// Faccio la formattazione della data in "giorno"/"mese"/"anno"

let giorno = dataFine.getDate();
let mese = dataFine.getMonth() + 1;
let anno = dataFine.getFullYear();

// Faccio la formattazione dell'orario
let ore = dataFine.getHours();
let minuti = dataFine.getMinutes();


// Creo la stringa della data
let dataScritta = giorno + "/" + mese + "/" + anno;

// Creo la stringa dell'orario
let orarioScritto = ore + ":" + minuti;


// Scrivo la data della dine del timer nel div #dataScadenza
document.getElementById("dataScadenza").innerHTML = "Tempo mancante fino a " + dataScritta + "alle " + orarioScritto;


// Creo una funzione che mi farà vedere il tempo rimanente
// (che si aggiorna ogni secondo) alla data di scadenza.
// Questo timer verrà visualizzato in pagina al "click"
// del button "calcola-tempo"

// Setto l'eventListener al button
document.getElementById("calcola-tempo").addEventListener("click", function(){

    // Per far si che il timer di aggiorni ogni secondo
    // gli assegno un setInterval() con delay
    // di 1000 millisecondi (un secondo) che continuerà
    // a funzionare fino a che la differenza di tempo tra
    // la data di scadenza e quella in cui viene cliccato
    // il button è minore di 0
    setInterval(tempoMancante, 1000);

    // Creo la funzione che calcolerà il tempo mancante
    function tempoMancante() {

        // Dichiaro la data e l'orario corrente
        let dataCorrente = new Date().getTime();

        // Dichiaro la differenza tra la data corrente e la data di scadenza
        let difference = dataFine - dataCorrente

    }

})