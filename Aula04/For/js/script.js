function calculoCPF(){

  var cpf = prompt("Digite o seu CPF");
    /*
    a varioavél cpf9 irá armazenar os 9 primeiros digitos do cpf para o cálculo. para 
    cálculo.para capturar os 9 primeiro estamos uwsando a função substring
    e passando para ela 2 parametros. que são:
    a posição inicial da captura de dados e a quantidade de dados que devem
    ser capturado                                                                                                  
    */

    
    var cpf9 = cpf.substring(0,9);
    console.log(cpf9);

    var peso10 = 10;
    var peso11 = 11;

    resultado = 0;
    resto = 0;
    for(var i=0; i < 9; i++){
      resultado +=(cpf9[i])* peso10;
      peso10--;
    }
     console.log(resultado);
      if(resto < 2){
        cpf9+0;
      }
      else{
     cpf9+=(11-resto);

}
resultado = 0;
for(var i=0; i < 10; i++){
  resultado +=(cpf9[i])* peso11;
  peso11--;
}
 console.log(resultado);
  if(resto < 2){
    cpf9+0;
  }
  else{
 cpf9+=(11-resto);

}
  console.log(cpf9);
}