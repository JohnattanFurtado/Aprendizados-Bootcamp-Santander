// trocar os elementos paraes de uma array e substituir por zero.
//se o array for vazio, retorna -1

function substituiPares (array){ //o parametro array é o nome da variavel. Pode ser outro nome
    for (let i = 0; i < array.length; i++){ //para cada indice, a partir do nro 0, desde que o indice seja menor que o comprimento do array, incrementa e verifica
        if (array[i] === 0){ //se array, que esta nesse indice (i) array for igual a 0, entao console logo e diz já é 0.
        console.log("Você já é 0");
        } else if (array[i] % 2 === 0){ //se o resto for igual zero, entao a gente determina que o elemento que esta dentro do array
                                        //(i) vai ser zero (atribuição)
        console.log(`Substituindo ${array[i]} por 0..`);
         array[i] = 0;
        } 
    } 
    return array;
}
let arr = [1, 8, 4 , 6, 80, 40, 23, 90];
substituiPares(arr);
console.log(substituiPares(arr));


function substituiPares (array) { 

    for (let i = 0; i < array.length; i++){ 
        if (array[i] === 0){ 
        console.log("Você já é 0");
        } else if (array[i] % 2 === 0){
        console.log(`Substituindo ${array[i]} por 0..`);
         array[i] = 0;
        } 
    } 
    return array;
}
let arr2 = [1, 3, 4 , 6, 80, 33, 23, 90];
substituiPares(arr);
console.log(substituiPares(arr2));