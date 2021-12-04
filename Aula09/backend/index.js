const express = require("express");

const app = express();
app.use(cors());
const clientes =[
    {
        id:12,
        nome: "helena",
        email:"helena@terra.com.br"
    },
    {
        id:56,
        nome: "wagner",
        email:"wagner@terra.com.br"
    },
    {
        id:48,
        nome: "thais",
        email:"thais@terra.com.br"
    }
]

app.get("/clientes",(request,response)=>{
    response.send(clientes);

});

app.listen(3000,()=>console.log("servidor online em http://localhost:3000"))