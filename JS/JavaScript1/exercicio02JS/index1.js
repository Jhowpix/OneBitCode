let medida = prompt("Insira a medida em metros.")
let unidade = prompt("qual unidade de medida deseja converter?" +
"\n1. milimetros (mm)" +
"\n2. milimetros (cm)" +
"\n3. milimetros (dm)" +
"\n4. milimetros (dam)" +
"\n5. milimetros (hm)" +
"\n6. milimetros (km)" 
)
 
switch ( unidade ){
  case "1":
    alert("resultado: " + medida + "m =" + medida * 1000 + "mm")
    break
   case "2":
      alert("resultado: " + medida + "m =" + medida * 100 + "cm")
      break
    case "3":
        alert("resultado: " + medida + "m =" + medida * 10 + "dm")
        break
      case "4":
          alert("resultado: " + medida + "m =" + medida / 10 + "dam")
          break
        case "5":
            alert("resultado: " + medida + "m =" + medida / 100 + "hm")
            break
          case "6":
              alert("resultado: " + medida + "m =" + medida / 1000 + "km") 
              break
            default:
                alert("opcao invalida!")
                }