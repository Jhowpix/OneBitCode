

// codico incompleto ainda em estudo

const arrayVagas = [];
let objVaga = {};

function listarVagas(){
  const vagasEmTexto = arrayVagas.reduce(function(textoFinal, vaga, indice){
    textoFinal += indice + ". "
    textoFinal += vaga.nome
    textoFinal += " (" + vaga.candidatos.lenght + "candidatos.)\n "
    return textoFinal 
  }, "")
  
  alert(vagasEmTexto)
}

function nomeVaga(){
  const nome = prompt("Informe nome da vaga. ")
  const descricao = prompt("Informe descricao da vaga.")
  const dataLimite = prompt("Data limite da vaga.")

  const confirmacao = confirm(
    "Deseja criar nova vaga?\n"+
    "Nome: " + nome + 
    "\nDescricao: " + descricao +
    "\nData limite: " + dataLimite
    )

    if(confirmacao){
      const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
      vagas.push(novaVaga)
      alert('Vaga criada com sucesso!')
    }
}
   
   function exibirVaga(){
    const indice = prompt('Informe o indice da vaga que gostaria de visualizar.')
    const vaga =[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidatos){
      return textoFinal + "\n - " + candidatos
    },"")

    alert(
      "Vaga n: " + indice +
      "\nNome: " + vaga.nome +
      "\nDescricao: " + vaga.descricao +
      )
   }

//codigo incompleto ainda em estudo 

function menu(){
const menu = parseInt(prompt('Sistema de vagas. \n' +
'\n1. Listar vagas disponiveis' + 
'\n2. Criar uma nova vaga ' +
'\n3. Visualizar um vaga ' +
'\n4. Inscreverse a uma vaga ' +
'\n5. Excluir uma vaga ' +
'\n6. Sair'))
}