let value = 20;

function teste(){
  console.log('estou dentro da funcao.')
}


console.log(value);
teste()  // funcao void ( vazia )

let val = 40; 

function teste1(){
  val += 40 ;
}

console.log(val)
teste1()
console.log(val)



function mostraNome (nomePessoa){
   console.log(nomePessoa)
}

mostraNome('Jhonatan')
console.log(mostraNome)
mostraNome('pode ser dados varios valores')

function soma(numero1, numero2){
  const somaNumeros = numero1 + numero2
  console.log(somaNumeros)
}

soma(20 ,30)
soma (50,50)
soma (2.5, 2.5)

//...............................................

function newSoma( numero1, numero2){
const newValue = numero1 + numero2
return newValue
}

let chamaFuncao = newSoma (10,15)
chamaFuncao = newSoma (100, 200)
console.log(chamaFuncao)

const mult = (numero1, numero2) => numero1 * numero2

const multipli = mult(2,30)
console.log(multipli)