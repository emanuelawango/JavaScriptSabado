var cor = prompt("Digite os números relacionados as cores: \n1 -Vermelho\n2 -Azul\n3 -preto");
/*
if(cor==1){
    document.body.style.backgroundColor="red";
 } 
 else if(cor==2){
     document.body.style.backgroundColor="blue";
    
} else{
document.body.style.backgroundColor="white";
    alert("o valor digitando não corresponde as cor especificadas");
}
*/
// DRY-> Don't Reapet Yourself (Não se repita)
//vamos refatorar o código acima (refactor)
var fundo ="white";
if(cor==1){
    fundo = "red";
}
else if(cor==2){
   fundo = "blue";
}
else if(cor==3){
    fundo = "black";
}
else{
    alert("o valor digitado não corresponde as cor especificadas");
}

document.body.style.backgroundColor= fundo;