const keybord = document.querySelectorAll('button[data-type="letter"]');

const myWords = [
    "mot1",
    "mot2",
    "mot3",
    "mot4",
    "mot5",
    "mot6",
    "mot7",
    "mot8",
    "mot9",
    "mot10"
];

// Renvoie un entier aléatoire dans l'intervalle passé en paramètre
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

