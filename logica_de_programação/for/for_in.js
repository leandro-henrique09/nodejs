const frutas = ['Pera', 'Maçã', 'Uva'];

// esse tipo de for é usado para percorrer um array indice por indice 
for (let fruta in frutas) {
    // console.log(frutas[fruta]);
}

// ====

const pessoa = {
    nome: 'Leandro',
    sobrenome: 'Henrique',
    idade: 22
}

for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}