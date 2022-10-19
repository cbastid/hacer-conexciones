console.log("page loaded...");
function idgear(){

    let usuario = document.querySelector(".card-body h1");
    usuario.innerText = "Cristian Bastidas"
    imguser = document.getElementsByClassName("avatar-m");
    console.log(imguser[0].src);
    imguser[0].src = "images/user-circle.png";

}
let totalconect = 2;
function idclose(usuario){

    let removeUser = document.querySelectorAll("#mono");
    removeUser[usuario].innerHTML = "";

    totalconect--;

    let menosconect = document.querySelector("#totalcont");
    menosconect.innerText = totalconect;
    
    
}
let totaluser = 418;
function idadduser(usuario){

    let removeUser = document.querySelectorAll("#mono");
    removeUser[usuario].innerHTML = "";

    totaluser++;

    let menosconect = document.querySelector("#totalusuario");
    menosconect.innerText = totaluser;
    
    totalconect--;

    let menosconect2 = document.querySelector("#totalcont");
    menosconect2.innerText = totalconect;
    
}
