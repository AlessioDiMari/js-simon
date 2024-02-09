/*
Sfruttiamo le timing functions per fare il
conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà
scalare fino alle 9:30 di lunedì mattina!
*/

// Setto la fine del timer a sabato 10/02/2024 alle 9:30
let dataFine = new Date();

dataFine.setDate(dataFine.getDate() + 1)


// Faccio la formattazione della data in "giorno"/"mese"/"anno"

let giorno = dataFine.getDate();
let mese = dataFine.getMonth() + 1;
let anno = dataFine.getFullYear();

// Creo la srtinga della data
let dataScritta = giorno + "/" + mese + "/" + anno;


