const { get } = require('axios');
const a = 33;
const b = 7;
const URL = `https://kodaktor.ru/api/add/${a}/${b}`;

const headers = { 'Content-Type': 'application/json' };
(async () => {
  const {data : {"Сумма": s}}  = await get(URL, { headers });
  console.log(s);
})();