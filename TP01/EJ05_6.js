var url = require('url');
var adr = 'http://www.ort.edu.ar:8080/alumnos/index.htm?year=2022&month=mayo';
try{
    if(adr=="") throw "No se escribió nada";
    if(adr==" ") throw "Campo vacío";
    parsearUrl()
}catch(err){
    console.log(err)
}

function parsearUrl(){
    var q = url.parse(adr, true);
    var qdata = q.query;
    objeto={
        "host": q.host,
        "pathname":q.pathname,
        "parametros": {"año": qdata.year, "mes": qdata.month}
    }    
    console.log(objeto)
}