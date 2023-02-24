
//DECRARANDO FUNCAO
function addContact() {
  //PEGANDO ELEMENTO PELO ID NESTE CASO UMA SECTION
  const contactSection = document.getElementById('contacts-list')
  //CRIANDO UM H3 PARA COLOCAR CONTATO: NA TELA
  const h3 = document.createElement('h3')
  //ESCREVENDO CONATO:
  h3.innerText = "Contato"
  //CRIANDO UMA UL PARA HOSPEDAR AS LI QUE VIRAO A SEGUIR
  const ul = document.createElement('ul')
   //CRIANDO LI
  const nameLi = document.createElement('li')
  //ESCREVENDO NA LI (NOME:)
  nameLi.innerText = "Nome: "
  // CRIANDO UM INPUT PARA ESTA LI
  const nameInput = document.createElement('input')
  // TIPANDO INPUT
  nameInput.type = 'text'
  //NOMEANDO INPUT
  nameInput.name = 'fullname'

  //COLOCANDO CADA NOVO ELEMENTO EM SEU DETERMINADO NÓ
  //INPUT SENDO FILHO DA LI
  nameLi.appendChild(nameInput)
  //LI SENDO FILHO DA UL
  ul.appendChild(nameLi)
  //QUEBRANDO AS LINHAS DO ELEMENTO UL VAI SEPARAR AS LI 
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  //PONDO O H3 E UL PARA APARECER NO HTML 
  contactSection.append(h3, ul)
}

//FUNCAO PARA REMOVER CONTATO
function removeContact() {

  //PEGANDO O ELEMENTO POR ID 
  const contactSection = document.getElementById('contacts-list')
  //PEGANDO O ELEMENTO POR TAGNAME
  const titles = document.getElementsByTagName('h3')
  //PEGANDO O ELEMENTO POR TAGNAME
  const contacts = document.getElementsByTagName('ul')
  
  //REMOVENDO COM .REMOVECHILD TODOS OS NÓS DE CONTACTSECTION
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}

//OBS: REPARE QUE... const contactSection = document.getElementById('contacts-list')... FOI REDECLARA, TEVE USO NAS DUAS FUNCOES ADDCONTACT E REMOVECONTACT.