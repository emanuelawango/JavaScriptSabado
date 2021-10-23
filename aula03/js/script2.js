var  cor = prompt("Digite uma cor, que pode ser\nVermelho,Verde,Azul,Amarelo,Preto,Cinza");
var fundo = "";
/*
para transformar os caracteres em maiúculo ou minúsculo podemos usar os seguintes comandos:
toUpperCase() -> para letras maiúsculas
toLouwerCase() -> para letras minúsculas
*/
var cor = cor.toLocaleLowerCase();
switch(cor){
case "vermelho":
    fundo="red";
    break;

case "verde":
    fundo="green";
        break;
case "azul":
      fundo="blue";
         break;
    case "amarelo":
    fundo="yellow";
           break;
 case "preto":
        fundo="black";
           break;
        case "cinza":
         fundo="gray";
            break;
 default:
         fundo="white";
            break;

                    
}
document.body.style.backgroundColor=fundo;