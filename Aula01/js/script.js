/* o comando abaixo diz que o documento html deve obter a tag h1 e 
// mudar o seu texto para "mudei o nome"
// document.getElementdbyTagName("h1")[0].innerHTML "Mudei o texto";
// nome = prompt("Digite o seu nome");
// document.getElementsByTagName("h1") [0].ennerHTML=nome;
var idade = 10;
let email = "emanuelawango@.com.br";
if (10==10){
    var nome = "pedro";
    let sobrenome = "oliveira";
}
console.log(nome);
console.log(sobrenome);


document.getElementById("saida").innerHTML="Mensagem"
document.getElementById("saida").style.backgroundColor="yellow";
document.getElementById("saida").style.color="red"; */

var tag = document.getElementById("saida"); 

tag.innerHTML = "Novo texto";
tag.style.backgroundColor="green";
tag.style.color="yellow";