/* funcion de carga */
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display= "none";
})
/* atajo de subida */
let caja=document.getElementById("subir__arriba");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 0) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})