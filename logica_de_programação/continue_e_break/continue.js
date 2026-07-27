let pares = [];
let impares = [];
const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    if (numero % 2 == 0){
        pares.push(numero);
        // o continue é usado para mandar o laço 
        // "pular para o próximo" item a ser percorrido
        // neste caso quando chegar em um numero que é par ele vai pular para o próximo.
        continue;
    }
    impares.push(numero);
}

// console.log(`Pares: ${pares}\nImpares: ${impares}`);

// =======

for (let numero of numeros) {
    if(numero == 4) {
        console.log("o número 4 foi encontrado.");
        // neste caso o break manda o laço parar
        //  quando um item for encontrado no laço
        // como no exemplo o número 4.
        break;
    }
    console.log(numero);
}


