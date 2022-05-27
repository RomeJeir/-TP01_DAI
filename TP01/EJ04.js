var fs = require('fs')

getNombreArchivoTxt();
fs.rename('./rome.txt', './paste.txt', () => {
    console.log("\nFile Renamed\n")
    getNombreArchivoTxt();
});

function getNombreArchivoTxt(){
    console.log("Nombre actual: ");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    })
}