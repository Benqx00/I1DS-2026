// operadores de incremento e decremento | pré r pós incremento
// incremento => somar algo de alguma variavel
// decremento => subtrair algo de alguma variavel

let idade = 16;
console.log(idade);

// idade = idade + 1; // somei 1 na idade
idade++;
console.log(idade);
idade++;
console.log(idade);
console.log("-----------------------------");

// idade = idade - 1; // subtrai 1 n idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("-----------------------------");

let novaIdade = idade++;
console.log("Idade:", idade, "| Nova idade:", novaIdade);

novaIdade = idade++;
console.log("Idade:", idade, "| Nova idade:", novaIdade);
