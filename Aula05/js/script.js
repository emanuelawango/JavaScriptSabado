function array1(){
var cidade = ["São Paulo","Curitiba","Salvador"];
console.log(cidade[1]);

}

function array2(){

}  var n = [5,10,3];
 for(let i = 0; i < n.length; i++){
     console.log("contei"+n[i]);

     var rs = 0;
     var i = 0;

     do{
         rs+=n[i];
         i++;
     }while(i < n.length);
     console.log("Soma dos valores é"+rs);
 }

var colecao = [];

function adicionar(){
  
    var entrada = prompt("Digite um numérico ou digite S para sair");
    while(entrada != "S"){
        colecao.push(entrada);
        entrada = prompt("Digite um numérico ou digite S para sair");
    }
}    for (let i = 0; i < colecao.length; i++) {
    console.log(colecao[i]);  
    
}
 var rs = 0;
 for (let i = 0; i < colecao.length; i++) {
   rs+=perseInt(colecao[i]);  
    
    
}


 document.getElementById("btn").onclick = function(){
     array3();
 }