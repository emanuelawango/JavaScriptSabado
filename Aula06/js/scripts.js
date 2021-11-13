let x=1;
function movimenta(){
    document.getElementById("caixa1").style.marginLeft=`${x}px`;
    x+=5;
}

document.getElementById("caixa1").onmouseout=()=>{
    document.getElementById("caixa1").style.backgroundColor="blue";
    document.getElementById("caixa1").style.width="300px";
    document.getElementById("caixa1").style.height="300px";
}

document.getElementById("caixa1").onmousemove=()=>{
    document.getElementById("caixa1").style.backgroundColor="darkred";
    document.getElementById("caixa1").style.width="100px";
    document.getElementById("caixa1").style.height="100px";
}

window.setInterval(movimenta,100);