
function verificacaPalindormo (string){
    //primeiro verifica se a string existe. Se diferente de true, ela retorna.
    if(!string) return "String Inexistente"; //se for verdade de true, ela acaba a função.

    return string.split("").reverse().join("") === string;
    // split, se passa vazio ele separa todas as letras
    //reverse: quando dar o split a string vai retornar um array com todos os caracteres, e colocar a palavra ao contrario
    //join: junta todos os elementos do array e forma um string. A string revertida, é igual a string que recebeu?

}


console.log(verificacaPalindormo("ama")); 
//solucao 2
// ele compara os dois das pontas por isso divide por 2, pq a cada lopping, 2 numero sao testados
function verificacaPalindormo2(string) {
    if (!string) return "String Inexistente";
    for (let i = 0; i < string.length / 2; i++){ //começa no indice 0, depois 0 é menor que a lenght > i++ (incrementou 1, o indice vai ser 1)
        if(string[i] !==string[string.length - 1 - i]){
            return false;
        } //se o caracter que está dento desse indice,  nao for igual ao correspondente do outro lado (string.lenth-1)
                    // - i se for difrente, retorna falso.
    }
    return true;
}

console.log(verificacaPalindormo2("abba"));