// minha segunda tentaiva de fazer sozinho nao deu certo
// vamos refazer seguindo a aula

const vagas = [];

function listarVagas(){   
                                     //funcao criada somente para formatar o texto
    const vagasEmTexto = vagas.reduce( function(textoFinal, vagas, indice){
        // texto final mostrara nome da vaga e quantidades de candidatos

        textoFinal += indice + ". "
        textoFinal += vagas.nome
        textoFinal += " (" + vagas.candidatos.legth + "candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt('Informe um nome para a vaga.')
    const descricao = prompt('Informe uma descricao para a vaga.')
    const dataLimite = prompt('Informe data limite desta vaga.')

    const consirmacao = confirm('Deseja criar uma nova vaga?\n'+
                                 'Nome: ' + nome + 
                                 '\nDescricao: ' + descricao +
                                 '\nData Limite: ' + dataLimite
    )

    if (consirmacao){
        const novaVaga = {nome, descricao, dataLimite}
    }
}