// criando variaveis do tipo array (vetor)

var dinos = ["tironosauro rex", "estegosauro", "brontosauro", "bencolasiros"];

console.log(dinos);
console.table(dinos);
// imprimindo os dados em forma de tabela
console.table(dinos);

// lenght -> "tamanho" do array (quantidade de elementos)
console.log("o vetor tem", dinos.length, "elementos");

// imprimir elemento atraves do indice
console.log(dinos[1]);

// push -> adiciona um novo elemento ao final da fila
dinos.push("kelisauro");
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// unshift -> adiciona um novo elemento no começo da fila
dinos.unshift("heliosauro");
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// obter um elemento atraves do seu indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[5]);

// pop -> remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// shift -> remover um elemento do inicio do vetor(primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// splice -> remover um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluido a partir do indice
dinos.splice(1, 1); //remove somente o segundo item da lista
console.table(dinos);
console.log("o vetor agora tem", dinos.length, "elementos");

// adiciona um elemento a partir do nome (descrição)
dinos.push("benqxouaro");
dinos.push("babuino");
dinos.push("dipasauro");

// procurar um elemento a partir do nome (descrição)
// indexOf(procurado) -> retorna o indice do elemento no vetor
let procurado = "dipasauro";
let indice = dinos.indexOf(procurado);
console.log("O", procurado, "esta no indice", indice);


// excluir um elemento com base no seu nome
// 1ª localizar o indice do elemento a partir do nome
// 2ª excluir o registro com base no indice retornado

procurado = "dipasauro";
indice = dinos.indexOf(procurado);
console.log("O", procurado, "esta no indice", indice);
dinos.splice(indice, 1);
console.table(dinos);

// alterar o valor de um elemento a partir do indice
dinos[1] = "dipassauro";
console.table(dinos);