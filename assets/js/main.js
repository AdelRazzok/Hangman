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

tryCount.innerHTML = nbTry;

startBtn.addEventListener('click', () => {
    
    // Récupère un mot du tableau au hasard
    let gameWord = myWords[getRandomInt(myWords.length-1)];
    
    // Transforme le mot en tableau de caractères
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
            
            // Récuperer nos span en tableau
            let spanTab = document.querySelectorAll("span");
            let isGood = false;

            // Compare l'entrée clavier à chaque lettre du mot
            for (let i = 0; i < spanTab.length; i++) {

                if (this.dataset.value == spanTab[i].getAttribute("id")) {
                    isGood = true;
                    spanTab[i].innerHTML = this.dataset.value;
                }
                this.style.backgroundColor = "black";
            }
            if (!isGood) {
                nbTry --;
                tryCount.innerHTML = nbTry;
            }

            

            if (nbTry <= 0) {
                tryCount.innerHTML = "PERDU";
            }
        });
    });
});