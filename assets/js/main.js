const keybord = document.querySelectorAll('button[data-type="letter"]');
const startBtn = document.querySelector('button[data-type="start"]');
const details = document.getElementById("details");
const myWords = [
    "PREMIER",
    "DEUXIEME",
    "TROISIEME",
    "QUATRIEME",
    "CINQUIEME",
    "SIXIEME",
    "SEPTIEME",
    "HUITIEME",
    "NEUVIEME",
    "DIXIEME"
];

var nbTry = 7;

// Renvoie un entier aléatoire dans l'intervalle passé en paramètre
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

startBtn.addEventListener('click', () => {
    
    let gameWord = myWords[getRandomInt(myWords.length-1)];
    let cutGameWord = gameWord.split('');
    
    // Parcourir le tableau et créer un span pour chaque lettre
    for (let i = 0; i < cutGameWord.length; i++) {
        let mySpan = document.createElement("span");

        mySpan.setAttribute("id", cutGameWord[i]);
        mySpan.innerHTML = " _ ";
        details.append(mySpan);
    }

    keybord.forEach(element => {
        element.addEventListener('click', function() {
            let spanTab = document.querySelectorAll("span");

            for (let i = 0; i < spanTab.length; i++) {

                if (this.dataset.value == spanTab[i].getAttribute("id")) {
                    spanTab[i].innerHTML = this.dataset.value;
                }
            }
        });
    });
});