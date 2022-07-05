const alunos = [
    {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Kleber',
        nota: 3,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Joana',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Silvana',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Maluco',
        nota: 4,
        turma: '1B',
    },
    {
        nome: 'Ricardo',
        nota: 7,
        turma: '1B',
    },

];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

       const { nota, nome } = arr[i];

        if (nota >= media){
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));