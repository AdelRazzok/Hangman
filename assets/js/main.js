const keybord = document.querySelectorAll('button[data-type="letter"]');
const startBtn = document.querySelector('button[data-type="start"]');
const resetBtn = document.querySelector('button[data-type="reset"]');

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
var score = 0;

// Renvoie un entier aléatoire dans l'intervalle passé en paramètre
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

startBtn.addEventListener('click', () => {
    
    startBtn.disabled = true;
    resetBtn.disabled = false;

    // Récupère un mot du tableau au hasard
    let gameWord = myWords[getRandomInt(myWords.length-1)];
    
    // Transforme le mot en tableau de caractères
    let cutGameWord = gameWord.split('');
    let nbChar = 0;

    // Parcourir le tableau et créer un span pour chaque lettre
    for (let i = 0; i < cutGameWord.length; i++) {
        let mySpan = document.createElement("span");

        mySpan.setAttribute("id", cutGameWord[i]);
        mySpan.innerHTML = " _ ";
        details.append(mySpan);

        nbChar++;
    }

    // Découpe l'écran en autant de parties que de caractères
    let a = 0;
    for (let i = nbChar; i > 0; i--) {
        let myDiv = document.createElement("div");
        myDiv.setAttribute("id", "div" + a);
        myDiv.setAttribute("class", "cut-div");
        cutScreen.append(myDiv);

        a++;
    }

    // Et on ajoute une case en plus pour la victoire
    let myDiv = document.createElement("div");
        myDiv.setAttribute("id", "div" + a);
        myDiv.setAttribute("class", "cut-div");
        cutScreen.append(myDiv);

    const myCutDivs = document.querySelectorAll('div[class="cut-div"]');
    myCutDivs.forEach(element => {
        element.style.width = "500px";
        element.style.border = "1px solid black";
    });

    // Création du compteur de vie et du personnage
    let createPerso = document.createElement("div");
    createPerso.setAttribute("id", "perso");
    createPerso.setAttribute("class", "perso");

    let createHeart = document.createElement("img");
    createHeart.setAttribute("src", "assets/img/heart.png");
    createHeart.setAttribute("alt", "Heart");
    createHeart.setAttribute("class", "heart");

    let createLife = document.createElement("span");
    createLife.setAttribute("id", "tryCount");
    createLife.setAttribute("class", "life");

    myCutDivs[0].append(createHeart);
    myCutDivs[0].append(createLife);
    myCutDivs[0].append(createPerso); 

    tryCount.innerHTML = nbTry;

    // A chaque appui sur une lettre :
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

                    score++;
                }
                this.disabled = true;
            }
            if (!isGood) {
                nbTry --;
                tryCount.innerHTML = nbTry;
            }else {
                myCutDivs[score].append(createPerso);
            }

            if (score >= spanTab.length - 1) {
                alert("Vous avez gagné !");
                keybord.forEach(element => {
                    element.disabled = true;
                });
            }
            if (nbTry <= 0) {
                alert("Vous avez perdu !");
                keybord.forEach(element => {
                    element.disabled = true;
                });
            }
        });
    });

    // Relance une partie
    resetBtn.addEventListener('click', () => {
    
        // Replace le personnage sur la première case
        myCutDivs[0].append(createPerso);
        
        // On réinitialise nos paramètres
        nbTry = 7;
        score = 0;
        tryCount.innerHTML = nbTry;
        details.innerHTML = "";

        keybord.forEach(element => {
            element.disabled = false;
        });

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
    });
});