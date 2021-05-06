const keybord = document.querySelectorAll('button[data-type="letter"]');
const startBtn = document.querySelector('button[data-type="start"]');
const details = document.getElementById("details");

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

// console.log();

// Renvoie un entier aléatoire dans l'intervalle passé en paramètre
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

startBtn.addEventListener('click', () => {
    
    let gameWord = myWords[getRandomInt(myWords.length-1)];
    
    for (let i = 0; i < gameWord.length; i++) {
        let mySpan = document.createElement("span");
        mySpan.innerHTML = " _ ";
        details.append(mySpan);
    }
});