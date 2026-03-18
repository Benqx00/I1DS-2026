// Switch case -> estrutura de decisao usada quando queremos comparar o valor de um variavel com varios possiveis resultados
// regra do prof castello -> se tiver mais que 3 comparadores , faça um switch case

//Exemplo 01- Menu
// Neste exemplo a variavel menuSelecionado guardará o nome de uma opção de menu.
// O switch verifica qual foi a opção escolhida e exibe uma mensagem correspodente

let menuSelecionado = "pagar um cafe";
switch (menuSelecionado) {
  case "home":
    console.log("você clicou no link home");
    break;
  case "quem somos":
    console.log("você clicou no link quem somos");
    break;
  case "contato":
    console.log("voce clicou no link contato");
    break;

  default:
    console.log("opção incorreta, selecione uma opção do menu!");
    break;
    case "redes sociais":
    console.log("voce clicou nas redes sociais");
    break;
      case "pagar um cafe":
    console.log("voce pagou um café");
    break;
}