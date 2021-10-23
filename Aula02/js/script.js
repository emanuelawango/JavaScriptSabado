/*
o comando abaixo será executado quando o usuário abrir a pagina.
será exibido uma janela(prompt) pedindo uma cor.De acordo com a 
cor selecionada acor do fundo muda.
para essa execução, estamos usando o comando window(janela|navelador).
document(meu documento html).body(corpo da página). addEventLister(
    adicionando um evento ao body para que ele preste atenção ao 
    carregamento da página(load) e assim executar afunção ()=>{} com 
    todo o código do desvio do fluxo if...elseif...else
)
*/


window.document.body.onload=()=>{

     let escolha = prompt("Digite:\n1->Amarelo\n2->Vermelho\n3->Azul");
     if(escolha==1)
     window.document.body.style.backgroundColor="yellow";
     else if(escolha==2)
     window.document.body.style.backgroundColor="red";
     else if(escolha==3)
     window.document.body.style.backgroundColor="blue";
     else
     window.alert("o número não existe na lista")
};