

function register(element) {

  // criou a const pussou o elemento com seu filho e o valor dele
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value
  // possuindo os valores dos elementos guardado nas variaveis fez a comparacao logica usando if e alertou as opcoes 
  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}