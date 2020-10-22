let boton: any[];
let info: any;
let texto: any;
info = document.getElementById("info");
boton[0] = document.getElementById("1");
boton[1] = document.getElementById("2");
boton[2] = document.getElementById("3");
boton[3] = document.getElementById("4");
boton[4] = document.getElementById("5");
boton[5] = document.getElementById("6");
boton[6] = document.getElementById("7");
boton[7] = document.getElementById("8");
boton[8] = document.getElementById("9");
boton[9] = document.getElementById("10");

boton[0].addEventListener("click", function(){
    info.classList.toggle("rojo");
    texto.innetHTML = "info 1";
});
boton[1].addEventListener("click", function(){
    info.classList.toggle("verde");
    texto.innetHTML = "info 2";
});
boton[2].addEventListener("click", function(){
    info.classList.toggle("azul");
    texto.innetHTML = "info 3";
});
boton[3].addEventListener("click", function(){
    info.classList.toggle("rojo");
    texto.innetHTML = "info 4";
});
boton[4].addEventListener("click", function(){
    info.classList.toggle("verde");
    texto.innetHTML = "info 5";
});
boton[5].addEventListener("click", function(){
    info.classList.toggle("azul");
    texto.innetHTML = "info 6";
});
boton[6].addEventListener("click", function(){
    info.classList.toggle("rojo");
    texto.innetHTML = "info 7";
});
boton[7].addEventListener("click", function(){
    info.classList.toggle("verde");
    texto.innetHTML = "info 8";
});
boton[8].addEventListener("click", function(){
    info.classList.toggle("azul");
    texto.innetHTML = "info 9";
});
boton[9].addEventListener("click", function(){
    info.classList.toggle("rojo");
    texto.innetHTML = "info 10";
});