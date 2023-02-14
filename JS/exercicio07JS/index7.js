const palavra = prompt("Escreva uma palavra, para sabermos se ela é um palíndromo."); // serio isso!

let palavraInvertida = "";

for ( let i = palavra.length - 1; i >=0; i-- ){
  palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida){
  alert(palavra + "e um palindromo.")
} else {
  alert(palavra + "nao e um palindromo.\n\n" + 
  palavra + " !== " + palavraInvertida)
}

//outro exercicio a nao achar solucao sozinho