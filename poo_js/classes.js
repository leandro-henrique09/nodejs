class Pessoa { // aqui estou criando uma classe "Pessoa"
    constructor(nome, sobrenome) { // declarando a "construção" dessa classe com os parametros de nome e sobrenome.
        this.nome = nome; // definindo o "this" para ser usado sempre o parametro passado quando a classe for utilizada.
        this.sobrenome = sobrenome;
    }

    falar() { // criando um prototype com a função de "falar", onde é atribuido na classe Pessoa, replicando para toda vez que a classe for usada.
        console.log(`${this.nome} está falando! `);
    }
    comer() {
        console.log(`${this.nome} está comendo! `);
    }
    beber() {
        console.log(`${this.nome} está bebendo! `);
    }
}

const p1 = new Pessoa("Leandro", "Henrique") // usando a classe Pessoa para criar uma pessoa com o nome "Leandro" e sobrenome "Henrique",
//  por conta do this usado la na criação o parametro usado será o que for passado em new Pessoa, sempre que for criado um novo.
const p2 = new Pessoa("Joao", "Henrique")
console.log(p1.beber());
console.log(p2.falar());
