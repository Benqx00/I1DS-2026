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
