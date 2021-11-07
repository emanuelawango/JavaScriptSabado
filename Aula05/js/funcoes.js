function mensagem(){
console.log("Minha função");

}

function mensagem2(){
    return "Minha função 2";
}

function executar(){
    alert(mensagem2());
    alert(mensagem());
}

function soma(n1,n2){
    return n1 + n2;
}

function total(numeros){
    let rs = 0;
    
    for (let i = 0; i < numeros.length; i++){
       rs += numeros[i];
        
    }
 
let p = document.createElement("p");

        p.innerHTML = rs;
        document.body.appendChild(p);

    } 
    const  n = [10,2,5,3];

    n.push(20)
    console.log(n);

    //  constroi função anonima
    document.getElementById("btn").onclick = function(){
       //alert ("O resultado da soma entre 10e 20 é "+soma(10,20));
       alert (`Hoje é ${new Date().toDateString()}. Fizemos uma soma: ${soma(10,20)}`);

    }
    
document.body.addEventListener("load",total(n));
  
