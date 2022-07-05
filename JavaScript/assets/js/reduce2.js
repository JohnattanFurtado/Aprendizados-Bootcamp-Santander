const lista = [
    {
        name: 'pipoca',
        preco: 10,
    },
    {
        name: 'arroz',
        preco: 30,
    },
    
    {
        name: 'salmao',
        preco: 40,
    },
    {
        name: 'patinho',
        preco: 10,
    },
    {
        name: 'patinho moido',
        preco: 5,
    },
    {
        name: 'oleo',
        preco: 4,
    },
 ];
 const saldoDisponivel = 100;

 function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
 }
 console.log(calculaSaldo(saldoDisponivel, lista));