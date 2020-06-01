let nome = ['alexandre', 'barbosa', 'de', 'alves ', 'lima'];

/**
 * toString() converte um array em string separado por vírgulas.
 */
console.log(nome.toString());

/**
 * join() transforma um array em string separado pelo valor que foi passado por parâmetro.
 */
console.log(nome.join('-'));

/**
 * indexOf() procura um item especifico e retorna a posição caso não tenha o item ele retorna menos um
 */
console.log(nome.indexOf('de'));

let carros = ['gol', 'palio', 'fusca', 'camaro', 'civc', 'corolla',];

/**
 * pop() remove o último elemento do array
 */
carros.pop();
console.log(carros);

/**
 * shift() remove o primeiro elemento do array
 */

 carros.shift();
 console.log(carros);

 /**
  * push() adiciona um novo item no array
  */
carros.push('renegade');
console.log(carros);

/**
 * unshift() adiciona um novo item no começo do array
 */
carros.unshift('kombi');
console.log(carros);

/**
 * length informa a quantidade de elementos de um array
 */
console.log(carros.length);

/**
 * splice() recebe dois parâmetros o primeiro qual item vai ser deletado e o segundo a quantidade de itens, 
 * que vão ser deletados a partir do primeiro parâmetro
 */
console.log(carros.splice(2,1));
console.log(carros);

/**
 * concat() junta dois arrays
 */

let juncao = carros.concat(nome);
console.log(juncao);

/**
 * sort() ordena o array em forma alfabética
 */
carros.sort();
console.log(carros);

/**
 * reverse() reverte a ordem do array
 */
carros.reverse();
console.log(carros);

/**
 * map() retorna um novo array
 */
let numeros = [1,2,3,4,5,6,11];
let multiplicacao = numeros.map((multi)=>{
    return multi * 2;
});
console.log(multiplicacao);

/**
 * filter() retorna verdadeiro ou falso
 */
let pares = numeros.filter((num)=>{
    return (num % 2 == 0) ? true : false;
})
console.log(pares);

/**
 * every() retorna true se todos os elementos obedecerem a condição estipulada
 */
let numeros2 = numeros.every((num)=>{
    return (num > 10)? true : false;
})
console.log(numeros2);

/**
 * some() retorna true se algum elemento obedecer a condição especificada
 */
let numeros3 = numeros.some((num)=>{
    return (num > 10)? true : false;
})
console.log(numeros3);

/**
 * find() retorna o item especificado.
 */
lista = [
    {id: 1, nome: 'alexandre', sobrenome: 'lima'},
    {id: 2, nome: 'maria', sobrenome: 'lima'},
    {id: 3, nome: 'sebastião', sobrenome: 'lima'}
]

let pessoa = lista.find((item)=>{
    return (item.id == 2)? true : false;
})
console.log(pessoa);

/**
 * FindeIndex() retorna o indice do item especificado.
 */
let indicePessoa = lista.find((item)=>{
    return (item.nome == 'sebastião')? true : false;
})
console.log(indicePessoa);
