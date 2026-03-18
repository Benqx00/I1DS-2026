// desvio condicional - IF-ELSE

/* condicoes simples com IF
	Sintaxe: if( condicao){
	    cofigo a ser executado, se verdadeiro
	}
	*/

let anoNascimento = 2001;
if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003.");
}

if (anoNascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003");
}

if (anoNascimento == 2003) {
  console.log("a pessoa nasceu em 2003");
}

// Condicional IF-ELSE

if (anoNascimento > 2000) {
  console.log("a pessoa nasceu depois de 2000");
} else {
  console.log("a pessoa nasceu antes de 2000");
}

// Condicional composta com IF

const login = "admin";
const senha = "12345";

let loginUser = "admin";
let senhaUser = "12345";

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("acesso negado!");
}

// desvio aninhados - IF-ELSE-IF-ELSE...

let semaforo = "verdeu";

if (semaforo == "vermelho") {
  console.log("PARE!");
} else if (semaforo == "amarelo") {
  console.log("ATENÇÃO!");
} else if (semaforo == "verde") {
  console.log("SIGA!");
} else {
  console.log("opção incorreta");
}

// criando variaveis locais (so existem dentro do bloco nde foram criadas)

let mes = "agosto";
let dia = "20";
if (dia == 20 && mes == "agosto") {
  let mensagem = "hoje é dia 20 de agosto.";
  console.log(mensagem);
}
console.log("tentando acessar a variavel 'mensagem' fora do escopo if, vai dar erro!!!");
// console.log(mensagem)


//*****************************************************************/
// IF ternario (IFinline)

let preco = 500
let resultado = (preco <= 100) ? "ta barato" : "vish, ta caro";

// o codigo acima, faz exatamente a mesma coisa que o codigo abaixo

if(preco <= 100){
    resultado = "ta barato";
}else{
    resultado = "vish, ta caro";
}
console.log("preço:", preco, "-", resultado);