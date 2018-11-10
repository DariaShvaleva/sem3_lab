const { get } = require('axios');

let a = 3;
const URLs = [ 'kodaktor.ru/api2/there/', 'kodaktor.ru/api2/andba/' ];

const headers = {'Content-Type' : 'application/json'};

(async () => {
  for (url of URLs) {
    const { data : res} = await get(url+a, {headers});
    console.log(url+a);
    a = res;
    console.log(res);
  }
})();