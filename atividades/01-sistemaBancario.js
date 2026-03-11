/***************************************************** 
Exercícios para fixação 
*****************************************************/ 
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

//Atribuindo uma variável atribuindo um nome para um pessoa
let nome = "thomaz"
let banco = "nubank"
let agencia = 5866
let conta = "15874-9";
let saldo = 500;

console.log("-----------------------------");
console.log("nome do cliente:", nome);
console.log("agencia:", agencia, "| conta:", conta);
console.log("saldo: r$", saldo);

//efetuando e imprimindo movimentações
console.log("Pix premiado recebido: r$75,00");
saldo = saldo + 75;
console.log("Novo saldo é de r$", saldo);

console.log("Pix recebido de rafael gonsalez: r$30,00");
saldo = saldo + 30;
console.log("Novo saldo é de r$", saldo);

console.log("Pix enviado para maria eduarda comprar mc: r$45,00");
saldo = saldo - 45
console.log("Novo saldo é de r$", saldo);

console.log("Pix enviado para kelli pagar nossas compras: r$100,00");
saldo = saldo - 100
console.log("Novo saldo é de r$", saldo);

console.log("pix recebido por mirton compra coxinha pro mucal: r$13,00")
saldo = saldo + 13
console.log("Novo saldo é de r$", saldo);


