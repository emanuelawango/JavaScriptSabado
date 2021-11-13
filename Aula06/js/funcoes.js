function pares(valores){
    let lista = [];

    for (let i = 0; i < valores.length; i++) {
        if(valores[i]% 2 == 0){
            lista.push(valores[i]);
        }
        
    }
  return lista;
}

// Função anonima. Ela está vinculada a alguma a coisa: pode ser um botão, um elemento
// hmtl(relacionado a um evento), uma varievél ou constante
// Abaixo a função anonima vinculada a uma constante

const anos = function(){
    let qtd = 0;
    let anosBissextos = [];
    for (let i = 1950; i < 2021; i++) {
       if(i % 4 ==0){
        anosBissextos.push(i);
        qtd++;
       }
        
    }

  // return `${qtd}  ${anosBissextos}`
   return [qtd, anosBissextos];

}

const texto =(t)=>{
  return t.length;

}