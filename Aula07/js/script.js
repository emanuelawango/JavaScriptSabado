document.getElementById("abrir").onclick =()=>{
    document.getElementById("menu").style.top= "0px";
   // document.getElementById("conteudo").style.margintop= "250px";

}

document.getElementById("fechar").onclick=()=>{
    document.getElementById("menu").style.top="-200px";
    //document.getElementById("conteudo").style.margintop= "0px";
}
document.getElementById("abrirmodal").onclick=()=>{
    document.getElementById("fundomodal").style.width="100vw";
    document.getElementById("fundomodal").style.width="100vw";
    document.getElementById("fundomodal").style.height="100vh";
    document.getElementById("fundomodal").style.opacity="1";
}
document.getElementById("fecharmodal").onclick=()=>{
    document.getElementById("fundomodal").style.width="0vw";
    document.getElementById("fundomodal").style.width="0vw";
    document.getElementById("fundomodal").style.height="0vh";
    document.getElementById("fundomodal").style.opacity="0";
}