/* 
        OPERADORES LOGICOS
&&  ->  AND -> E - Todas as expressões precisam ser verdadeiras para retornar true.
||  ->  OR  -> OU - Se tiver qualquer condição for verdadeira o retorno é True.
!   ->  NOT -> NÃO - Retorna o valor inverso que for condição
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || true;
const expressaoNot = !true // o valor retornado será false, pois ele determina q o valor não seja "True."
console.log(expressaoOr);
