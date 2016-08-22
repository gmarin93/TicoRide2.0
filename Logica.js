var cont=0;
var person = [];
var	persona="";
var personRide=[];
var contride=0;
var diasSem=[];
var personConfig=[];
var contfig=0;

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
  debugger;
 document.getElementById("user1").textContent=sessionStorage.getItem("usuarios");

 var table = document.getElementById("rides");
 var user_html = "<thead><tr> <th>Nombre Ride</th><th>Esta en</th><th>Va para</th> </tr></thead>";
 var users = JSON.parse(localStorage.getItem(sessionStorage.getItem("usuarios")));

 for (var i = 0; i <users.length; i++) {
   // add users to the table
   var u = users[i];
   user_html = user_html + '<tr><td>'+u.nombre+'</td><td>'+
   u.estoy+'</td><td>'+
   u.voypara+'</td>'+
   '<td><a id="r'+i+'" onclick="mostrarPerfilTabla(this)">ver</a></td>'+
   '</tr>';
 }

table.innerHTML=user_html;
}
function agregarRide(){

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

function mostrarPerfilTabla(element){
  var index=element.id.replace('r','');
  document.location.href=("EditarRides.html");
  sessionStorage.setItem("contador",index);
}
function loadeditride(){
  document.getElementById("user1").textContent=sessionStorage.getItem("usuarios");
  var index=sessionStorage.getItem("contador");
  var users = (JSON.parse(localStorage.getItem(sessionStorage.getItem("usuarios"))))[index];
  document.getElementById("nombreD").value=users.nombre;
  document.getElementById("estoy").value=users.estoy;
  document.getElementById("voypara").value=users.voypara;
  document.getElementById("horainD").value=users.horainicial;
  document.getElementById("horafinD").value=users.horallegada;
  document.getElementById("infoD").value=users.acercade;
  sessionStorage.setItem("contador",'');

  for (var i = 0; i < users.dias.length; i++) {

      if(users.dias[i]=="lunes"){
        document.getElementById("lunes").checked=true;
      }
      else if(users.dias[i]=="martes"){
        document.getElementById("martes").checked=true;
      }
      else if(users.dias[i]=="miercoles"){
        document.getElementById("miercoles").checked=true;
      }
      else if(users.dias[i]=="jueves"){
        document.getElementById("jueves").checked=true;
      }
      else if(users.dias[i]=="viernes"){
        document.getElementById("viernes").checked=true;
      }
      else if(users.dias[i]=="sabado"){
        document.getElementById("sabado").checked=true;
      }
      else if(users.dias[i]=="domingo"){
        document.getElementById("domingo").checked=true;
      }
  }
}

function editar(){

  var index=sessionStorage.getItem("contador");


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

      personRide[index]=((personaR));

      localStorage.setItem(sessionStorage.getItem("usuarios"),JSON.stringify(personRide));
      alert("Has modificado el ride");
      limp();
    }
  }    catch (variable) {
            alert(variable);
    }

}

function borrar()
{
  debugger;
   var mensaje=confirm("Desea continuar?");
  var index=sessionStorage.getItem("contador");
  if (mensaje) {
    personRide[index]="";

    localStorage.setItem(sessionStorage.getItem("usuarios"),JSON.stringify(personRide));
}

}
function salir(){

  sessionStorage.clear();

}
