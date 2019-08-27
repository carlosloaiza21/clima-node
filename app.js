const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
  direccion:{
    alias: 'd',
    desc: 'Direccin de la ciudad deseada',
    demand: true
  }
})
.argv;

const direccion = argv.direccion;


const getInfo= async(direccion)=>{
  
  try {
    const coords = await lugar.getDireccion(direccion);
    const temperatura = await clima.getClima(coords.lat, coords.lng);
    
    return `la temperatura en ${direccion} es ${temperatura}`;
    
  } catch (e) {
    return `la temperatura en ${direccion} no se pudo obtener`;
  }
}


getInfo(direccion)
  .then((res)=>console.log(res))
  .catch((err) => console.log(err))

