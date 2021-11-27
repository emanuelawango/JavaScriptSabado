var cidades = ["são paulo","curitiba","campinas"]

// for (let i = 0; i < cidades.length; i++) {
    // console.log(cidades[i])
    
// }
// function valor(dado, ix){
// console.log(dado);
// }

// cidades.forEach((valor,index)=>{
    // console.log(`dentro do foreach ${valor} e ${index}`)

// });

// cidades.map((dados)=>{
    // console.log(`map da cidade ${dados}`)
// })

// vamos construir um objeto em javascript
/*var produto1 = {
    nome: "Teclado",
    descricao: "sem fio",
    preco: 50.90,
    quantidade: 30
};
var produto2 = {
    nome: "Mouse",
    descricao: "sem fio",
    preco: 30.90,
    quantidade: 10
};
var produto3 = {
    nome: "Monitor",
    descricao: "Monitor Dell",
    preco: 500.90,
    quantidade: 5
};

var lista = [produto1, produto2,produto3];

console.log(lista);

var lstproduto = [
    
     {
        nome: "Teclado",
        descricao: "sem fio",
        preco: 50.90,
        quantidade: 30,
        fornecedores:[
         "Microsoft",
         "Multilaser"

        ]
    },
     {
        nome: "Mouse",
        descricao: "sem fio",
        preco: 30.90,
        quantidade: 10,
        fornecedores:[
            "Microsoft",
            "Multilaser"
   
           ]
    },
     {
        nome: "Monitor",
        descricao: "Monitor Dell",
        preco: 500.90,
        quantidade: 5,
        fornecedores:[
            "Dell"
            
   
         ]
    },
    
]
lstproduto.map((item)=>{
   item.fornecedores.map((fr)=>{
       console.log(`Empresa: ${fr}`)
   })
   
        
    
})

para obter os dados relacionados aos filmes que veem api themoviedb
iremos utilizar uma url com o caminho onde os dados.
para que requisição aconteça, iremos usar uma função do javascript
chamada fetch(buscar). o fech é uma função especial do javascript
classificada com promise. ou seja uma promessa de que ela irá conseguir
buscar os dados.porém existe a possibilidade de essa promessa falhar,
portante temos a opção de tratar essa falha

*/
fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
.then((response)=>response.json())
.then((listaFilmes)=>{
 //fazer uma referencia ao body

 const body = window.document.body;
 const container = window.document.createElement("div");
 const header = window.document.createElement("header");
 const main = window.document.createElement("main");
 const h1= window.document.createElement("h1");
 
 container.setAttribute("id","container");
 header.setAttribute("id","header");

 
 h1.innerHTML="Filmes";
 header.appendChild(h1);
 header.innerHTML+=`pag. atual:${listaFilmes.page} 
                    -Total de páginas: ${listaFilmes.page}
                    -Total de resultados: ${listaFilmes.total_results}`;
 

 main.setAttribute("id","main");
 listaFilmes.results.map((dado)=>{
 var item = window.document.createElement("div");
 var img = window.document.createElement("img")
 var h2 = window.document.createElement("h2");
 var pR= window.document.createElement("p");
 var pV = window.document.createElement("p");

      h2.innerHTML=dado.title;

      pR.setAttribute("class","lancamento");
      pR.innerHTML=`Lançamento:${dado.release_date}`;

      pV.setAttribute("class","media");
      pV.innerHTML=`Média: ${dado.vote_average}`;


 img.src=`https://image.tmdb.org/t/p/w500${dado.poster_path}`;
 item.appendChild(img);
 item.appendChild(h2);
 item.appendChild(pR);
 item.appendChild(pV);
 main.appendChild(item);

 })

 body.appendChild(header);
 body.appendChild(main);
 body.appendChild(container);

})

.catch((erro)=>console.error(`Erro ao tentar carregar a api ${erro}`));
