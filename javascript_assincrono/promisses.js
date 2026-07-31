function rand(max, min) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject(false)

            resolve(msg);
        }, tempo)
    })
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Transformando dados', rand(1, 3))
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Exibe dados na tela.', rand(1, 3))
    }).then((resposta) => {
        console.log(resposta);
    }).catch((e) => {
        console.log(e);
    })