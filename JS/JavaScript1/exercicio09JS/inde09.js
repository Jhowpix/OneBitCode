const imoveis = [];
let opcao = "";

do{
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de imoveis!\n" +
    "Total de imoveis: " + imoveis.length +
    "\n\n Escolha uma opcao:\n1. Novo imovel\n2. Lista imoveis\3n. Sair"
  )

  switch (opcao){
      case "1":
        const imovel ={}
        imovel.proprietario= prompt("Informe o nome do proprietario do imovel:")
        imovel.quartos = prompt("Quantos quartos possui o imovel?")
        imovel.banheiros = prompt("Quantos banheiros possui o imovel?")
        imovel.garagem = prompt("O imovel possui garagem?(Sim/Não)")

        const confirmacao = confirm(
          "Salvar este imovel?\n"+
          "\nProprietario: " + imovel.proprietario +
          "\nQuartos: " + imovel.quartos +
          "\nBanheiros: " + imovel.banheiros +
          "\nGaragem: " + imovel.garagem
        )

         if (confirmacao){
          imoveis.push(imovel)
          alert("Imovel salvo com sucesso!")
         } else{
          alert("voltando ao menu inicial.")
         }
         break

      case "2":
        for (let i = 0; i < imoveis.length; i++){
          alert(
            "Imovel " + (i + 1) +
            "\nProprietario: " + imoveis[i].proprietario +
            "\nQuartos: " + imoveis[i].quartos +
            "\nBanheiros: " + imoveis[i].banheiros +
            "\nGaragem: " + imoveis[i].garagem
          )
          break
        }
      case "3":
        alert("Encerrando...")
        break
        default:
          alert("opcao invalida.")
  }

}while(opcao !== "3");