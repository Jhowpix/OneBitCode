// let nome = prompt('Qual é o seu nome?');
// alert('Seja bem vindo ' + nome);


// nomes e comparacao de idade

/*
const nome1 = prompt('Se for o mais velho digite seu nome?');
const  idade1 = prompt('Agora e a sua idade?');
const nome2 = prompt('Se for a pessoa mais nova digire aqui seu nome.');
const idade2 = prompt('Agora digite sua idade.');

let result = idade1 -idade2;

alert( 
  nome1 + " idade " + idade1 + "\n" +
  nome2  + " idade " + idade2 + "\n" +
  "A diferenca de idade e: " + result
)
*/


// um alerta para seis digitos diferentes

/*
let n = prompt('digite um numero de 1 a 6.');

switch (n){
  case "1":
  alert(1);
  break
  case "2":
  alert(2);
  break
  case "3":
  alert(3);
  break
  case "4":
  alert(4);
  break
  case "5":
  alert(5);
  break
  case "6":
  alert(6);
  break
  default:
    alert('opcao invalida.')
}
*/


//multiplicacao ate mil

/*
let value = parseInt(prompt('digite o numero a ser multiplicado ate mil.'));

let ind = 1;
while( ind <= 1000 ){
  document.write(value + ' x ' + ind + ' = ' + ( value*ind)+"<br>")
  ind = ind+1
}
document.write('saiu do loop');
*/


//tabuada (numero escolhido) ate x 10

/*
let value = parseInt(prompt("Digite um numero a ser multiplicado ate dez"));

let ind=1;
while( ind <= 10){
  document.write( value + " x " + ind + " = " + (value * ind)+ "<br>");
  ind = ind+1
}
document.write('saiu do loop');
*/

//nome piloto mais confirmacao e opcao de troca de velocidade 

/*
let nome = prompt('qual o seu nome piloto?');

let speed = 0;

let opcao = prompt('quer ajustar velocidade da nave para qual velocidade?');

let inf = prompt('estamos indo para velocidade: ' + opcao + ' confirma a velocidade ( sim / nao )?');

if (inf ==="sim"){
  let speed1 = prompt( 'qual a nova velocidade?')
  alert('estamos indo para velocidade: ' + speed1)
} else if (inf === "nao"){
  alert( 'estamos indo para velocidade de ' + opcao)
}
*/



// conversao de anos luz em km
/*
let serioIsso =  parseInt(prompt('digite valor em anos-luz (l.y) para converter em Km. Exemplo: 1 = 9,461000000000000 km'));

let taDeBrincadeira = serioIsso * 9.4608e+12;

alert( taDeBrincadeira);

// para tirar a prova real dos valore eu abri outro site ja com valor de 2km informado entao tive que reajustar o valor de 9.460e+12 para 9.4608e+12
*/


// eu do risada com estes exercicios, rumo a spaceX.

/*
let dobra = 0;
let opcao = "";

let nomeNave = prompt( " digite o nome da nave.");
opcao = prompt('deseja realizar a dobra espacial?' + '\n.1 sim ' + '\n.2 nao');

while(opcao === "1"){
  dobra += 1
  opcao = prompt('deseja realizar a proxima dobra?' + '\n.1 sim ' + '\n.2 nao');
  
}

alert('nave: ' + nomeNave + "\nQuantidade de dobras: " + dobra );
*/


/*
alert('Seja bem vindo!')
let nomeUsuario = prompt('Escreva seu nome.');
let idadeUsuario = prompt( nomeUsuario + '' + ' qual sua idade?');
let confirma = confirm( 'Sua idade é : '+ idadeUsuario );


alert( 'Nome: ' + nomeUsuario +
'\nIdade: ' + idadeUsuario );
*/

/*
let nomeNave = prompt('Digite o nome da nave.');
let caracter = prompt('Qual caracter voce deseja subistituir?');
let subistituir = prompt('Por qual voce deseja subistituir?');
let novaNave ='';

for(let pos = 0; pos < nomeNave.length; pos++ ){
  if(nomeNave[pos] == caracter){
    novaNave += subistituir
  } else {
    novaNave += nomeNave[pos]
  }
}

console.log( 'o nome da nave agora e: ' + novaNave);
*/