const turista =prompt("qual seu nome?"); // desta forma voce pede para digitarem o valor que vai entar nesta variavel turista no caso Nome do turista.

let cidades = ""; //aqui abrimos sem valor para que haja o encremento desta variavel de acordo com a resposta de acordo com o usuario

let contagem = 0; // iniciamos com o valor zero pois vamos atribuir a quantidade de cidades somando o numero das respostas sim do usuario, cada vez que o usuario digitar sim o codigo vai percorrer toda a funcao while novamente fazendo o incremento com o operador ++ .

let continuar = prompt("voce visitou alguma cidade (sim/nao)."); // exemplo de resposta simples do usuario sim ou nao a ser captado pelo prompt.

while( continuar === "sim") {
  let cidade = prompt("qual o nome da cidade?")

  cidades += "-" + cidade + "\n"
  contagem++ 
  continuar = prompt( "voce visitou alguma outra cidade(sim/nao)?")
}

alert(
  "turista: " + turista + 
  "\n quantas cidades visitadas: " + contagem +
  "\n quais cidades visitou: " + cidades 
)

// este foi complicado para eu elaborar sozinho preciso rever mais vezes 