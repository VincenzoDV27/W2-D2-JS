/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const PERSONA = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 25,
  citta: "Roma",
};

console.log(
  `${PERSONA.nome} ${PERSONA.cognome}, ${PERSONA.eta} anni, vive a ${PERSONA.citta}`,
);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
PERSONA.email = "mariorossi@gmail.com";
delete PERSONA.eta;

console.log(PERSONA);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const UTENTE = {
  username: "pippo",
  age: 27,
  indirizzo: {
    via: "Roma",
    citta: "Napoli",
    cap: "81030",
  },
};

console.log(UTENTE.indirizzo.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const CHIAVE = "nome";
console.log(PERSONA[CHIAVE]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const A = 20;
const B = 20;
const C = 12;

if (A > B && A > C) {
  console.log(`Il numero più grande è: ${A}`);
} else if (B > A && B > C) {
  console.log(`Il numero più grande è: ${B}`);
} else if (C > A && C > B) {
  console.log(`Il numero più grande è: ${C}`);
} else {
  console.log(`Pareggio`);
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const TOTALE = 27;
let s_free;

if (TOTALE >= 50) {
  s_free = "Spedizione gratuita";
} else {
  s_free = 9.9;
}

if (s_free === "Spedizione gratuita") {
  console.log(
    `Totale carrello: ${TOTALE}€ - ${s_free} - Totale finale:${TOTALE}€`,
  );
} else {
  console.log(
    `Totale carrello: ${TOTALE}€ - Spedizione: ${s_free}€ - Totale finale:${TOTALE + s_free}€`,
  );
}

let check_t = TOTALE >= 50 ? "Spedizione gratuita" : 9.9;

check_t === "Spedizione gratuita"
  ? console.log(
      `Totale carrello: ${TOTALE}€ - ${check_t} - Totale finale:${TOTALE}€`,
    )
  : console.log(
      `Totale carrello: ${TOTALE}€ - Spedizione: ${check_t}€ - Totale finale:${TOTALE + check_t}€`,
    );

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ARRAY = ["Baolo", 22, true];
for (let i = 0; i < ARRAY.length; i++) {
  if (typeof ARRAY[i] === "number") {
    console.log(`${ARRAY[i]} è un numero`);
  } else {
    console.log(`${ARRAY[i]} non è un numero`);
  }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const AR = [];
AR.unshift(0);
for (let index = 1; index < 5; index++) {
  AR.push(index);
}
console.log(AR);
console.log(AR.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ROBA = ["Penna", "Quaderno", "Zaino", "Astuccio"];
ROBA.splice(1, 1);
console.log(ROBA);
ROBA.splice(1, 0, "Diario");
console.log(ROBA);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(`Zaino è in carrello: ${ROBA.includes("Zaino")}`);

if (ROBA.includes("Zaino") === true) {
  console.log(ROBA.indexOf("Zaino"));
} else {
  console.log(`Non in carrello`);
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const USER = [
  {
    nome: "Samuele",
    eta: 23,
  },
  {
    nome: "Luca",
    eta: 52,
  },
  {
    nome: "Mauro",
    eta: 26,
  },
];

for (let l = 0; l < USER.length; l++) {
  console.table(USER[l]);
}

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const INV = [
  {
    nome: "Patatine",
    prezzo: 2,
    disponibile: 0,
  },
  {
    nome: "Latte",
    prezzo: 1.5,
    disponibile: 5,
  },
  {
    nome: "Pollo",
    prezzo: 12,
    disponibile: 11,
  },
  {
    nome: "Mela",
    prezzo: 1,
    disponibile: 0,
  },
];

for (let m = 0; m < INV.length; m++) {
  if (INV[m].disponibile && INV[m].prezzo < 10) {
    console.log(`OFFERTA: ${INV[m].nome} ${INV[m].prezzo}€`);
  } else if (INV[m].disponibile && INV[m].prezzo >= 10) {
    console.log(`${INV[m].nome} - ${INV[m].prezzo}€`);
  } else if (!INV[m].disponibile) {
    console.log(`${INV[m].nome} - esaurito`);
  }
}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const AY = [1, 2, 3, 4, 5];
let rev = [];

for (let z = AY.length - 1; z >= 0; z--) {
  rev.push(AY[z]);
}
console.log(rev);
