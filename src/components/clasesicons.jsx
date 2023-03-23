export class Puerta {
    nombrePuerta= 'holapuerta'
    abrirPuerta(nombrePuerta) {
      alert(`Abriendo puerta ${nombrePuerta}`)
      console.log(`Abriendo puerta ${nombrePuerta}`);
    }
  }

export class Reja {
    abrirReja(nombreReja) {
      alert(`Abriendo reja ${nombreReja}`)
       console.log(`Abriendo reja ${nombreReja}`);
    }
  }

export class Camara {
    llamarCamara(idCamara) {
      alert(`Llamando a la cámara con ID ${idCamara}`)
       console.log(`Llamando a la cámara con ID ${idCamara}`);
    }
  }




export function abrirDispositivo(nombreDispositivo, nombreEspecifico) {
    if (nombreDispositivo === 'puerta') {
      const puerta = new Puerta();
      puerta.abrirPuerta(nombreEspecifico);
    } else if (nombreDispositivo === 'reja') {
      const reja = new Reja();
      reja.abrirReja(nombreEspecifico);
    } else if (nombreDispositivo === 'camara') {
      const camara = new Camara();
      camara.llamarCamara(nombreEspecifico);
    } else {
      console.log('El dispositivo especificado no existe');
    }
  }
