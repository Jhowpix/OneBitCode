let opcao = "5";

do{
  opcao = prompt(
    "seja bem vindo(a)\n" +
    "\n escolha uma opcao abaixo: " +
    "\n1. opcao um" +
    "\n2. opcao dois" +
    "\n3. opcao tres" +
    "\n4. opcao quatro" +
    "\n5. sair"
  )

  switch (opcao){
    case "1":
      alert("opcao 1")
      break
    case "2":
      alert("opcao 2")
      break
    case "3":
      alert("opcao 3")
      break
    case "4":
      alert("opcao 4")
      break
    case "5":
      alert("encerrando...")
      break
    default:
        alert("opcao invalida")
  }
} while ( opcao !=="5");

//estou tendo dificuldade na logica de programacao e montar a estrutura para realizar a tarefa nao sei se e falta de pratica ou atencao em alguma aula. voltando para as aulas iniciais deste modulo....