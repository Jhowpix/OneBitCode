// criar uma funcao para adicionar jogadores 

function addPlayer(){

  //quardando os valores das label.
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  
  //criar variavel para confirmar escala do jogador.
  const confirmation = cfim(" Escalar " + name + "como" + position +  "?" );

  if (confirmation){

    //criada variavel para lincar a lista ul do documento html.
    const teamList = document.getElementById("teamList");
    
    // criou uma funcao para atribuir uma li para ul.
    const playerTeam = document.createElement("li");


//me perdi nesta parte ????????????????????????????
    playerTeam.id = "player" + number;

    // variavel playerTeam escreve na tela a posicao informada do jogador o nome mais o numero.
    playerTeam.innerText = position + ":" + name + " (" + number + ")";

          document.getElementById("position").value;
          document.getElementById("name").value;
          document.getElementById("number").value;
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player" + number);

  const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");

  if (confirmation) {
    document.getElementById("team-list").removeChild(playerToRemove)
    document.getElementById("numberToRemove").value = ""
  }
}