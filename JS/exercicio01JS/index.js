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

/*
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

  */

  // nao funciona o codigo acima ainda buscando solucao 

  //refazendo os exercicios para fixar conheciment.


/*
  const primeiroNome = prompt("Escreva seu nome.");
  const sobreNome = prompt("Escreva se sobre nome.");
  const anoDeNascimento = prompt("Ano de nascimento.");
  const cursoDeCarreira = prompt("Escreva aqui a area que quer seguir.");

 //  anoDeNascimento = anoDeNascimento - 2023; ERROUUUU!!!!!!!

  alert(
    "Nome completo: " + primeiroNome + " " + sobreNome + 
    "\nIdade: " + (2023 - anoDeNascimento) +  // esqueci de efetuar o calculo nesta area...
    "\nCarreira a seguir: "  +  cursoDeCarreira
  )
*/


//refando exercicio 02 



/*

//Desta vez deu certo

const car1 = prompt("informe o nome do carro 1 .");
const car2 = prompt("informe o nome do carro 2 .");

const vel1 = prompt("qual a velocidade do carro 1 ?");
const vel2 = prompt("qual a velocidade do carro 2 ?");

if( vel1 > vel2 ){
  alert("A velocidade do: " + car1 + " " + "e maior que a do :" + car2)
} 
else if ( vel1 < vel2 ){
  alert("A velocidade do: " + car2 + " " + "e maior que a do :" + car1)
} 
else if ( vel1 === vel2 ){
  alert( "a velocidade de ambos os carros sao iguais.")
}

*/


// deu super certooooooo!!!!!! 

const persA = prompt("informe o nome do personagem de ataque.");
const dano = prompt("quantos pontos de dano o personagem de ataque causa?.");
const persD = prompt("informe o nome do personagem de defesa.");
const vida = prompt("quantos pontos de vida o personagem de defesa tem?.");
const escudo = prompt(" possui algum escudo(sim/nao)?.");
let seSim = prompt("Se seu personagem possui escudo qual valor de defesa?");

seSim += vida;

if( vida + seSim <= dano){
  alert("personagem: " + persA + " "+ "venceu")
} else if( vida + seSim >= dano){
  alert("personagem: " + persD + " "+ "sobrevivel")
}

// preciso ser mais criativo e atento com os nomes das variaveis.