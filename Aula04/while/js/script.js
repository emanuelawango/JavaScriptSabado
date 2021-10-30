function while1(){
    var i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
function while2() {
    var entrada = prompt("Digite uma letra");
    while (entrada != "s") {
        alert("olá");
        entrada = prompt("Digite uma letra")
    }
}
function while3() {
  
    if(operacao <1 || operacao > 9){
        alert("Esta operação não existe");
    }
     if(operacao > 4 && operacao < 9){
         alert("Esta operação não existe");
     }
    var operacao =prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair");
    while(operacao !=9){
        var numero1 =prompt("Digite um valor");
        var numero2 =prompt("Digite outro valor");

     // numero1= parseInt(numero1);
     // numero2 = parseInt(numero2);

        switch (operacao) {
            case "1":
                alert(parseInt(numero1)+ parseIn(numero2));
                break;
                case"2":
                    alert(numero1-numero2);
                    break;
                    case "3":
                        alert(numero1*numero2);
                        break;
                        case "4":
                alert(numero1/numero2);
                break;     
            default:
                alert("esta operação não existe!")
                break;
        }
        var operacao =prompt("Digite: \n1-Soma\n2-Subtrair\n3-Multiplicar\n4-Dividir\n9-Sair");
    }     
}     