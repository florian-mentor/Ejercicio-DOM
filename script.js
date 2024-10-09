let elemento = document;

elemento = document.title;
console.log(elemento);

let elementoW = window;
console.log(elementoW);

let elementoS = document.styleSheets;
console.log(elementoS);

let elementoId = document.getElementById("tituloDOM");
console.log(elementoId);

let contenId = document.getElementById("contenido");
console.log(contenId)

let op1 = document.getElementById("p1");
op1.innerHTML = "Javascript";

document.getElementById("p2").innerHTML = "Kothin";
document.getElementById("p3").innerHTML = "C++";

let elementoClase = document.getElementsByClassName("editores");
console.log(elementoClase);

let elementoTag = document.getElementsByTagName("h2");
console.log(elementoTag);

let elementoQS = document.querySelector("ul");
//console.log(elementoQS);
console.log(elementoQS.children);
console.log(elementoQS.children[0]);
console.log(elementoQS.lastElementChild);

let elementoidQS = document.querySelector("#p1");
console.log(elementoidQS);

let elementoClaseQS = document.querySelector(".editores");
console.log(elementoClaseQS);

//console.log(document.getElementsByClassName());
let elementoP = document.getElementsByTagName("p");
console.log(elementoP.elementoP);
for(let i=0; i<elementoP.length; i++){
    console.log(elementoP[i].textContent);
}

elementoP[2].innerHTML = "Prueba";

let opID = document.getElementById("p1");
opID.style.background = "blue";
opID.style.color = "white";
opID.style.borderRadius = "8px";
opID.style.width = "350px";
opID.style.height = "25px";
opID.style.textAlign = "center";

function fecha(){
    let fech = document.getElementById("fecha");
    fech.innerHTML = Date();
}

function ocultarFecha(){
    let fech = document.getElementById("fecha");
    fech.innerHTML = "Fecha...";
}

function temperatura(){
    let temp = parseFloat(document.getElementById("dato1").value);
    let calculo = temp-273.5;
    document.getElementById("res").innerHTML = calculo;
}
