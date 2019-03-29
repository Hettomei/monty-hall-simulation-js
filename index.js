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

// expected output: 0, 1 or 2

const a = [0, 0 ,0]
for (let i = 0; i < 10000000; i++) {
    const j = getRandomInt(3);
    a[j]++;
}
console.log(a);
const sumA = sum(...a);
console.log('total :', sumA);
console.log('freq :', a.map(freq(sumA)));

// // V voiture
// A A V
// A V A
// V A A
