// Escreva uma função que recebe 2 números e retorne o maior deles


// minha solução
function maxNumber(num1, num2) {
    return Math.max(num1, num2);
}

// console.log(maxNumber(5,8));

// solução apresentada na aula

const max2 = (x,y) => x > y ? x : y;
console.log(max2(300,80));
 