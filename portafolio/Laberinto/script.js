var matriz = [];
for(let i=0;i<20;i++){
    matriz.push(0);
}
function crear(){
    var div = document.getElementById("div");
    div.innerHTML = "";
    div.innerHTML = "<table id = 'tablero'>";
    var tablero = document.getElementById("tablero");
    for(let i=0;i<matriz.length;i++){
        tablero.innerHTML += "<tr id = '"+i+"'>";
        for(let j=0;j<matriz.length;j++){
            document.getElementById(i).innerHTML += "<td><button type = 'button' class = 'tic' onclick = 'marca("+i+","+j+");' id = '"+i+","+j+"'>"+matriz[i][j]+"</button>";
        }
    }
}
function leerDatos(){
//Importamos el modulo fs (viene preinstalado)
const fs = require('fs');

//Creamos un objeto
let objeto = {
  texto : "Un texto de prueba",
  numero : 3.1416,
  lista : [1, 2, 3],
  otroObjeto : {clave : "valor"},
  listaObjetos : [
    {clave : "valor"},
    {clave : "valor"},
    {inception : {
      inception : "valor"
      },
    },  
  ]
};

//Guardamos el objeto en un archivo de texto
fs.writeFileSync("test.json", 
JSON.stringify(objeto));

//Leemos el archivo que acabamos de crear
let Datos = fs.readFileSync("test.json");
Datos = JSON.parse(Datos);
console.log(Datos);
}