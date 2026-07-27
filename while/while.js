let controle = 0;

while (controle <= 10) {
    // console.log(controle);
    controle++
}

function random(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;


//       no while, a condição sempre é verificada 
//       antes de começar a percorrer pelo laço
while (rand !== 10){
    console.log(rand);   
}

console.log('######');


// já no do while, primeiro ele executa e depois
// verifica se a condição é falsa ou verdadeira.
do {
    rand = random(min, max)
    console.log(rand);
} while(rand !== 10);


