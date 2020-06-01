let nome = 'alexandre barbosa de alves lima';

// length usado para se saber a quantiade de caracteres de uma string
console.log(nome.length);

// indexOf retorna a posição de inicio do parâmetro passado caso não exista retorna menos -1
console.log(nome.indexOf('alexandre'));

/**
 * substr recebe por parâmetro a posição inicial e a quantidade de caracteres que vai se retornar. caso seja passado
 * um valor negativo a contagem se inicia na ultima letra  
 */
console.log(nome.substr(0,9));
console.log(nome.substr(-4));

/**
 * replace recebe dois parâmetros o primeiro o que vai ser substituido e o segundo qual valor vai ser usado para se
 * substituir
 */
let novoNome = nome.replace('barbosa de alves lima', 'lima');
console.log(novoNome);

/**
 * toUpperCase() transforma a string todo em maiúscula
 */
console.log(nome.toUpperCase());

/**
 * tolowerCase() transforma toda a string em minúscula
 */
console.log(nome.toLowerCase());

/**
 * trim() usado para se tirar o espaço do início e no fim de uma string
 */
novoNome.trim();
console.log(novoNome);

/**
 * charAt() retorna qual o caractere que se encontra na posição que foi passada por parâmetro.
 */
console.log(nome.charAt(8));

/**
 * split() transforma uma string em array com o delimitador passado por parâmetro
 */
let novoNome2 = nome.split(' ');
console.log(novoNome2);