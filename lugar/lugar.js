const axios = require('axios');


const getDireccion = async (dir) =>{
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(dir)}`,
    headers: {
      "x-rapidapi-key": "746129284amsh195bb9c8bd53754p1249a1jsnc5caf35f76df"
    }
  });
  
  const resp = await instance.get();
  
  if(resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }
    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat;
    const lng = data.lon;
    
    return {
      direccion,
      lat,
      lng
    }
}

module.exports = {
  getDireccion
}
