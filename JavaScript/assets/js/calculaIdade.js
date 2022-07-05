function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 ={
    nome: "John",
    idade: 28,
};

const pessoa2 ={
    nome: "Eloisa",
    idade: 22,
};

const animal ={
    nome: "cachorro",
    idade: 5,
    raca: "vira-lata",
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(animal, [4]));
