
let menus = 0;
let candidato = '';

do{
   
 
    function menu(){
       menus = parseInt(prompt('SISTEMA DE VAGAS ' + 
                               '\n\n1. Listar vagas ' +
                               '\n2. Criar nova vaga ' +
                               '\n3. Visualizar vaga ' +
                               '\n4. Inscrever candidato ' +
                               '\n5. Excluir vaga. ' +
                               '\n6. Sair'))
    }

    function listarVagas(){
         for(let i = 0; i < vagas.length; i++){
           vagas += [i] + 1
           alert(vagas)
        }
    }  

    function visualizar(){
       let verVaga = parseInt(prompt('insira o numero da vaga que gostaria de ver.'))
    }

    let vagas = [];

    function criarVaga(){
     let nomeVaga = prompt('insira nome da vaga');
     let descVaga = prompt('descricao da vaga.');
     let numeroVaga = prompt('Numero de vagas.');
        vagas.push(
           'Nome da vaga: ' + nomeVaga,
           'Descricao: ' + descVaga,
           'numero de vagas: ' + numeroVaga
        )
     console.log(vagas)
     return vagas
     
    }

    let vaga = {};

    function inscrever(){
     let candidato = prompt('Insira nome do candidato.');
     let numeroDaVaga = parseInt(prompt('insira o numero da vaga.'))
      vaga += candidato += vagas[numeroDaVaga]
     return candidato
    }

    function excluir(){
     let number = parseInt(prompt('Digite numero do candidato a ser excluido'))
     candidato.push([number]);
    }

    switch(menus){
        case 1:
            listarVagas()
            break
            case 2:
                criarVaga()
                break
                case 3:
                    visualizar()
                    break
                    case 4:
                        inscrever()
                        break
                        case 5:
                            excluir()
                            break
                            case 6:
                                alert('Saindo do sistema de vagas...');
                                break
                                default:
                                    alert('Opcao invalida!');
    }

  
    menu()
    console.log(menus)
    
}while(menus !== 6 )

