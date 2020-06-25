const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=========='.green)
    console.log(`tabla de ${base}`.green)
    console.log('=========='.green)

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } por ${ i } es igual a ${ base *i }`)
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`)
            return
        }
        let datados = '';

        for (let i = 1; i <= limite; i++) {
            datados += `${ base } por ${ i } es igual a ${ base *i }\n`
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/${ base }.txt`, datados, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}