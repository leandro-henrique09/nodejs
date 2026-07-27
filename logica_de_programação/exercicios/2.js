// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem(number). Retorne true se a imagem 
// estiver no modo paisagem.

// minha solução
// function ePaisagem(largura, altura) {
//     return largura > altura
// }

// console.log(ePaisagem(1920,1080));

// =======================

// solução da aula
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1920, 1080));

