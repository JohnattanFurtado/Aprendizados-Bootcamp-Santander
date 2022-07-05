
const pessoa = {
    nome: 'john',
};

const animal = {
    nome: 'tirulipa',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(animal);

