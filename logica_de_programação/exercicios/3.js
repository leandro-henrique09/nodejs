// Escreva uma função que recebe um número e
// retorna o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a função com números de 0 a 100


// minha solução
function validaNumero(n) {   
    if(typeof n !== 'number') {
        return n
    }

    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz"
    } else if (n % 3 === 0) {
        return "Fizz"
    } else if (n % 5 === 0) {
        return "Buzz"
    }
    return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, validaNumero(i));
}

// =========

// solução apresentada na aula
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}