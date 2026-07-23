const pontuacaoUsuario = 2000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário Vip" : "Usuário comum.";

const corUsuario = null;
const corPadrao = corUsuario || "Preto";

console.log(nivelUsuario, corPadrao);
