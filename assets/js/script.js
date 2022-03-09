//Adicionar ids nos botões
//1 - 4 (check)
//selecionar os botões
//interceptar os eventos de clique
//recuperar o id adicionado

//Selecionando UL da lista
const listaOpcoes = document.querySelector(
  ".secaoDetalhesConta_opcoesTransacoes"
);

//Adicionando Listener eventos
listaOpcoes.addEventListener("click", identificarOpcoes);

//Ação depois do click
function identificarOpcoes(event) {
  //Identificando elemento do clique
  const elemento = event.target;

  //Verificando o LI
  if (elemento.tagName == "LI") {
    //Recuperando ID
    const id = elemento.id;

    //Selecionando uma seção utilizando uma escolha do usuario pelo id
    const secaoEscolha = document.querySelector(`div[data-id="${id}"]`);

    //removendo classe mostrar
    removeClasseMostrar();
    //Adicionar classe Mostrar
    secaoEscolha.classList.add("mostrar");
  }
}

//Função para remover as classes das divs
function removeClasseMostrar() {
  const divs = document.querySelectorAll(".secaoTransacao .container div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.remove("mostrar");
  }
}

//console.log(event.target);  -> mostra exatamente qual elemento foi acionado
