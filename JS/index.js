/*
const primeiroNome = prompt("Nome:")
const sobreNome = prompt("Sobre Nome:")
const dataDeNascimento = prompt("Ano de nascimento:")
const campoDeEstudo = prompt("Campo de estudo:")

alert(
  "Recruta cadastrado com sucesso!\n" + " " +
  "\nNome completo:" + " " + primeiroNome + " " + sobreNome + " " +
  "\nIdade:" + " " + (2023 - dataDeNascimento) + " " +
  "\nCampo de estudo:
  " + " " + campoDeEstudo 
);
*/

/*
const enter1 = prompt("informe o primeiro valor");
const enter2 = prompt("informe o segundo valor");

const x = parseFloat (enter1);
const y = parseFloat (enter2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultado:\n" +
    "\nsoma " + soma +
    "\nsubtracao " + subtracao +
    "\nmultiplacacao " + multiplicacao +
    "\ndivisao " + divisao 
)
*/


/*
const nomeCar1 = prompt("Carro 1:");
const x = prompt("informe a velocidade do carro 1.");

const nomeCar2 = prompt("Carro 2:");
const y= prompt("informe a velocidade do carro 2.");

if ( x > y ) { 
  alert( nomeCar1 + "\n é o mais rapido")}

  else if ( x < y ) {
    alert(nomeCar2 + "\n é mais rapido")}
    else if (x == y) {
      alert ( "ambos tem a mesma velocidade")
    }
  
*/


const atacante = prompt("qual e o nome do personagem atacante?");
const poderDeAtaque = prompt("qual valor de ataque?");

const defensor = prompt("qual e o nome do personagem defensor?");
const poderDeDefesa = prompt("qual valor de defesa?");
const pontosDeVida = prompt("quantos pontos de vida ele possui?");
const possuiEscudo = prompt ("ele possui escudo( sim/nao)?");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "nao"){
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado;

alert(atacante + "causou" + danoCausado + "pontos de dano em " + defensor);
alert( 
  atacante + "\npoder de ataque: " + poderDeAtaque + "\n\n"+
  defensor + "\npontos de vida: " + pontosDeVida +
  "\npoder de defesa: " + poderDeDefesa + "\npossui escudo: " + possuiEscudo
  );

  // nao funciona o codigo acima ainda buscando solucao 