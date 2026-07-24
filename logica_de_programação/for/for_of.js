const frutas = ['Pera', 'Maçã', 'Uva'];


// diferente do for in, o for of retorna especificamente o valor e não o indice.

//       aqui o parametro "fruta" é uma variavel que vai ser criada recebendo o
//       valor do indice que estiver sendo acessado no laço
//         |   
for (let fruta of           frutas) {
    // console.log(fruta); //     |
    //                      e aqui é o array que vai ser percorrido. 
}

frutas.forEach(function(valor, indice) {
    console.log(valor, indice);
})