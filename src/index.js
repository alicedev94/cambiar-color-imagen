const Jimp = require('jimp');
const ruta = "img/logodeno.png";

Jimp.read(ruta)
  .then(imagen => {
    return imagen.color([
        { apply: 'red', params: [0] }, // Reducir rojo
        { apply: 'green', params: [255] }, // Aumentar verde
        { apply: 'blue', params: [0] } // Reducir azul
    ])
    .write(ruta); // Guardar la imagen
  })
  .catch(err => {
    console.error(err);
  });
