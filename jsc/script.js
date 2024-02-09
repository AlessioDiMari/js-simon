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


