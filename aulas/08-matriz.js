// criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

// obtendo elemento com base e seus indices

console.log(matriz[0][1]);

//1.crie uma matriz 3x3
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

// Alterando os valores
matriz[1][2] = 20;
matriz[2][0] = 30;

// Mostrando a matriz atualizada
console.table(matriz);


for(let linha = 0; linha < matriz.length; linha++)
  for(let coluna = 0; coluna < matriz[0].length;coluna++)
console.log("Matriz[", linha, ",", coluna, "] = ", matriz[linha][coluna]);
  

