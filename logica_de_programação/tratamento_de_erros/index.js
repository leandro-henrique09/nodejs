// Exemplo 1

// function soma(x,y) {
//     if(typeof x !== "number" || typeof y !== "number"){
//         throw('x e y precisam ser numeros.')
//     }

//     return x + y
// }

// try {
//     console.log(soma(1,2))
//     console.log(soma("1",2))
// } catch(e) {
//     console.log("Ocorreu uma falha na autenticação.")
// };




// Exemplo 2
// try{
//     console.log(a);
//     console.log("Deu certo");
      
// } catch (e) {
//     console.log("Tratando erro");
    
// } finally {
//     console.log("Eu sempre apareço");
    
// }





// Exemplo 3
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new Error("Esperando instância de data.");   
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try {
    const data = new Date("01-01-2010 13:10:02");
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    console.log("Ocorreu um erro.");
} finally {
    console.log("Valeu por retornar a hora.");
}

