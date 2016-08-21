var cont=0;
var person = [];
var	persona="";


function guardar(){

  persona={"nombre": document.getElementById("nombre").value, "contrasena":document.getElementById("pass").value, "telefono": document.getElementById("numero").value, "usuario": document.getElementById("user").value};

try {


    if(persona.nombre.length==0){
        throw "Falta el nombre";
    }
    else if(persona.contrasena.length==0){
      throw "Falta el pass";
    }
    else if(persona.telefono.length==0){
      throw "Falta el numero";
    }
    else if(persona.usuario.length==0){
      throw "Falta el usuario";
    }

    else{

      person[cont]=((persona));
      cont=cont+1;
      localStorage.setItem("Usuarios",JSON.stringify(person));
      alert("Te has registrado");
    }

    limp();

} catch (error) {
  alert(error);
}

}
function limp(){

  document.getElementById("datos").reset();
}

function logueo(){

    var usuarios=JSON.parse(localStorage.getItem("Usuarios"));


  var user= document.getElementById("user-reg").value;
  var pass=  document.getElementById("pass-reg").value;


  for (var i = 0; i <= usuarios.length; i++) {

    try {
      if((usuarios[i].usuario)==user){
        if(usuarios[i].contrasena==pass){
          alert("Has accesado correctamente");

          debugger;
                    document.location.href=("AgregarRides.html");
                    sessionStorage.setItem("usuarios",user);
                    loading(user);


          return;
}

    }
    }catch (variable) {

      alert(variable);
      return;
    }
  }

}

function loading(user){
  document.getElementById("user1").textContent=sessionStorage.getItem("usuarios");
}

function mostrarUser(){

  alert("hola");
}


window.addEventListener("load",loading,false);
