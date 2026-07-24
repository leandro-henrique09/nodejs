const pessoa = {
    nome: "Leandro",
    sobrenome: "Henrique",
    idade: 22,
    endereco: {
        rua: "Av Brasil",
        numero: 140
    }
}
    // aqui estou acessando o nome que esta no objeto "pessoa" e pedindo para criar uma variavel com o valor de "nome"
const {nome} = pessoa
console.log(nome);

        // aqui estou passando que quero criar uma variavel a partir do valor
        // da chave "nome", que seria a variavel "nomeDaPessoa"
//              |               
//              |               serve o mesmo para o cenario de "sobrenome"
//              |                           |
const {nome: nomeDaPessoa, sobrenome: sobrenomeDaPessoa} = pessoa
console.log(nomeDaPessoa, sobrenomeDaPessoa);


//           aqui estou criando a variavel rua e numero,
//           que estão dentro de outro objeto
//                     |||
const {endereco: {rua, numero}} = pessoa
console.log(rua, numero);
