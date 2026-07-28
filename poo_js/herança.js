class Dispositivo {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já esta ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iPhone', 'Azul', '15')
// console.log(s1);

// ======== pratica

class Familia {
    constructor(nomePai, nomeMae, sobrenome) {
        this.nomePai = nomePai;
        this.nomeMae = nomeMae;
        this.sobrenome = sobrenome;
    }
}

class Filho extends Familia {
    constructor(nomePai, nomeMae, sobrenome, nome, idade, naturalidade){
        super(nomePai, nomeMae, sobrenome);

        this.nome = nome
        this.idade = idade;
        this.naturalidade = naturalidade;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

const filho1 = new Filho('Pedro Oliveira', 'Rosa Oliveira', 'Oliveira', 'Lucas', 22, 'Osasco')
console.log(filho1.nomeCompleto);
