// console.log('monty hall problem');
// console.log("d'abord afficher la frequence pour du rand simple");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function sum(a, ...b) {
    if (a) {
        return a + sum(...b);
    }
    return 0
}

const freq = total => n => n * 100/total

// 1) On affiche les 3 possibilites
//
// 2) le spectateur choisi une porte
// 3) l'animateur montre une chevre
//
// 4) le spectateur fais un choix
//
// 4.1) "je change pas"
// 4.2) "je change"


// 1

// // C chevre
// // V voiture
const possibilites = [
    ['C', 'C', 'V'],
    ['C', 'V', 'C'],
    ['V', 'C', 'C'],
]

// expected output: 0, 1 or 2

function run() {
    const portes = [...possibilites[getRandomInt(3)]];

    // 2)
    const choixSpec = getRandomInt(3);

    let portesRestantes;

    if (choixSpec === 0) {
        portesRestantes = [portes[1], portes[2]]
    } else if (choixSpec === 1) {
        portesRestantes = [portes[0], portes[2]]
    } else if (choixSpec === 2) {
        portesRestantes = [portes[0], portes[1]]
    }


    // 3)
    // on montre une chevre
    const montreChevre = portesRestantes.findIndex(a => a === 'C')

    let porteRestante;
    if (montreChevre === 0) {
        porteRestante = portesRestantes[1]
    } else {
        porteRestante = portesRestantes[0]
    }

    return portes[choixSpec];
}


let winIfKeep = 0;
let winIfChange = 0;


for (let i = 0; i < 10000000; i++) {
    if (run() === 'V') {
        winIfKeep++;
    } else {
        winIfChange++
    }
}


console.log({winIfKeep, winIfChange});
