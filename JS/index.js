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
