const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros; // no momento que passo ...resto, todos o resto do conteudo vai pra uma variavel chamada "resto"

console.log(um, dois, tres);
console.log(resto);

const numerosLista = [[1,2,3,], [4,5,6], [7,8,9]];

//   essa primeira virgula indica que esta "pulando" o primeiro indice do array
//       essas duas virgulas estao pulando os dois primeiros valores do array de indice 1   
const [,[,,seis]] = numerosLista;
console.log(seis);

//  a primeira virgula, pula esse indice inteiro do array
//     |        
//     | 
//     |      a segunda e a terceira virgula pula esses dois valores do indice 1 do array "numeros"
//     |       | | 
// ____|____   | |
// [[1,2,3,], [4,5,6], [7,8,9]]
//                 |
            // e a variavel "seis" recebe o terceiro valor do indice 1 do array "numeros".

// aqui foi desestruturado, separando cada indice do array em uma "lista"
const [lista1, lista2, lista3] = numerosLista
console.log(lista1, lista2, lista3);
