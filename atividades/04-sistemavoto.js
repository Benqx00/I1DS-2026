/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "não pode votar";
  }
  else if (idade >= 18 && idade <= 65) {
    frase = "Voto obrigatório";
  } else {
    frase = "pode votar, mas é opcional";
  }

  return frase;
}

let idade = 70;
console.log("idade:", idade, "-", podeVotar(idade));




/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function NotaAluno(nota) {
  let frase;
  if (nota >= 7) {
    frase = "O aluno passou de ano";
  } else if (nota >= 5 && nota <= 6.9) {
    frase = "está em recuperação";
  } else {
    frase = "reprovou";
  }
  return frase;
}
let nota = 7;
console.log("nota:", nota, "-", NotaAluno(nota));
// extra
function calcularSituacao(n1, n2, n3, n4) {
    let media = (n1 + n2 + n3 + n4) / 4;
    let situacao;

    if (media >= 2) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    console.log("Média:", media.toFixed(2));
    console.log("Situação:", situacao);
}
