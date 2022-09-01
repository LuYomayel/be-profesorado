

const subirArchivos = ( files, extensionesValidas = ['png', 'jpeg', 'jpg', 'gif'], carpeta = '' ) => {
    return new Promise( (resolve, reject)=>{

    const {file} = files;

    const nombreCortado = file.name.split('.')
    const extension = nombreCortado[nombreCortado.length-1]

    
    if(!extensionesValidas.includes(extension)){
        return reject(`La extensión ${extension} no es permitida `)
    }

    const nombreTemp = uuidv4() + '.' + extension;
    // const uploadPath = path.join( __dirname + '/uploads/' + file.name);
    let uploadPath;
    if(carpeta){
        uploadPath = `../uploads/${carpeta}/${nombreTemp}`
    }else{
        uploadPath = `../uploads/${nombreTemp}`
    }

    file.mv(uploadPath, (err) => {
        if (err) {
        return reject(err)
        }
        resolve(uploadPath);
    });
    })
}


module.exports = {
    subirArchivos
}
