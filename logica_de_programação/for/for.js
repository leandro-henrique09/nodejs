// for para achar numero par e impar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? "é Par" : "é Impar"
    console.log(i,par);
}

const frutas = ["maçã", "pera", "uva"]
console.log(frutas.length);


// para percorrer em um array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


//     esse parametro é usado para declarar
//     uma variavel que vai servir como "contador"
//     ||||
for (let i = 0;         i < 10;     i++){
    console.log(i);//     |||        |-> aqui ocorre o incremento, para que o laço não se torne infinito;
}                  //     |||  
                    //   já essa parte define até quantas
                    //   vezes o laço vai se repetir