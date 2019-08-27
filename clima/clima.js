const axios = require('axios');

const getClima = async(lat, long) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&units=metric&appid=5722cf0cfbd1e9c580b99e42bdb1af1d`);
  
  return resp.data.main.temp
}

module.exports = {
  getClima
}