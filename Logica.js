var cont=0;
var person = [];
var	persona="";
var personRide=[];
var contride=0;
var diasSem=[];
var personConfig=[];
var contfig=0;
var users = JSON.parse(sessionStorage.getItem("usuarios"));



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

                    document.location.href=("Perfil.html");
                    sessionStorage.setItem("usuarios",user);
                  
          return;
}

    }
    }catch (variable) {

      alert(variable);
      return;
    }
  }

}

function acces(){
 document.getElementById("user1").textContent=sessionStorage.getItem("usuarios");
}
function agregarRide(){
debugger;
//datos persona
  var nom= document.getElementById("nombreD").value;
  var estoy=  document.getElementById("estoy").value;
  var voypara=  document.getElementById("voypara").value;
  var horaS= document.getElementById("horainD").value;
  var horaLl=  document.getElementById("horafinD").value;
  var acerca= document.getElementById("infoD").value;

//dias

var lunes= document.getElementById("lunes").checked;
var martes= document.getElementById("martes").checked;
var miercoles= document.getElementById("miercoles").checked;
var jueves= document.getElementById("jueves").checked;
var viernes= document.getElementById("viernes").checked;
var sabado= document.getElementById("sabado").checked;
var domingo= document.getElementById("domingo").checked;


    if(lunes==true){
      diasSem[0]="lunes";
    }
    if(martes==true){
      diasSem[1]="martes";
    }
    if(miercoles==true){
      diasSem[2]="miercoles";
    }
    if(jueves==true){
      diasSem[3]="jueves";
    }
    if(viernes==true){
      diasSem[4]="viernes";
    }
    if(sabado==true){
      diasSem[5]="sabado";
    }
    if(domingo==true){
      diasSem[6]="domingo";
    }

  personaR={
    "nombre": nom,
    "estoy":estoy,
    "voypara":voypara,
     "horainicial": horaS,
     "horallegada": horaLl,
      "acercade": acerca,
      "dias": diasSem
      };

try {
  if(personaR.nombre.length==0){
      throw "Falta el nombre";
  }
  else if(personaR.voypara.length==0){
    throw "Falta la direccion";
  }
  else if(personaR.estoy.length==0){
    throw "Falta la direccion";
  }
  else if(personaR.horainicial.length==0){
    throw "Falta la hora de salida";
  }
  else if(personaR.horallegada.length==0){
    throw "Falta la hora de llegada";
  }
  else if(personaR.dias.length==0){
    throw "No ha escogido los dias";
  }

  else{

    personRide[contride]=((personaR));
    contride=contride+1;
    localStorage.setItem(sessionStorage.getItem("usuarios"),JSON.stringify(personRide));
    alert("Te has agregado un ride");
    limp();
  }
}    catch (variable) {
          alert(variable);
  }

}

function guardarConfig(){

  debugger;

  var velocidadConfig= document.getElementById("nomconfig").value;
  var nombreConfig=  document.getElementById("velconfig").value;
  var acercaConfig= document.getElementById("acercaconfig").value;


    personaConf={
      "nombre": nombreConfig,
      "velocidad":velocidadConfig,
        "acercade": acercaConfig
        };

  try {
    if(personaConf.nombre.length==0){
        throw "Falta el nombre";
    }
    else if(personaConf.velocidad.length==0){
      throw "Falta la velocidad";
    }
    else if(personaConf.acercade.length==0){
      throw "Falta informacion sobre ti";
    }

    else{

      personConfig[contfig]=((personaConf));
      contfig=contfig+1;
      localStorage.setItem(sessionStorage.getItem("usuarios")+"-config",JSON.stringify(personaConf));
      alert("Te has agregado un ride");
      limp();
    }
  }    catch (variable) {
            alert(variable);
    }

}

function mostrarPerfilTabla(){

  var table = document.getElementById("rides");
//  var user_html = "";
/*  for (var i = 0; i < users.length; i++) {
    // add users to the table
    var u = users[i];
    user_html = user_html + "<tr><td>"+u.username+"</td><td>"+
    u.password+"</td></tr>";
  }*/
  /*
  <tr>
    <th>Conductor</th>
    <th>Esta en</th>
    <th>Va para</th>
  </tr>
  */

  for (var i = 0; i < 1; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < 3; j++) {
      var celda = document.createElement("th");
      var textoCelda = document.createTextNode("Ride a "+i+", Esta en "+j+"Va para"+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
  }

  // Crea las celdas
  /*
 for (var i = 0; i < users.length; i++) {
   // Crea las hileras de la tabla
   var hilera = document.createElement("tr");

   for (var j = 0; j < users.length; j++) {
     // Crea un elemento <td> y un nodo de texto, haz que el nodo de
     // texto sea el contenido de <td>, ubica el elemento <td> al final
     // de la hilera de la tabla
     var celda = document.createElement("td");
     var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
     celda.appendChild(textoCelda);
     hilera.appendChild(celda);
   }

   // agrega la hilera al final de la tabla (al final del elemento tblbody)
  // tblBody.appendChild(hilera);
 }
*/
 // posiciona el <tbody> debajo del elemento <table>
 tabla.appendChild(hilera);

}
function salir(){

  sessionStorage.clear();

}
