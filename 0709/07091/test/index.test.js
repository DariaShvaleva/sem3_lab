require('should');
const { get } = require('axios');


const cases = [
	{a: 3, b: 6, s: 9}, 
	{a: -4, b: 1, s: -3}, 
	{a: 0.1, b: 0.2, s: 0.3},
	{a: 11, b: 8, s: 19} 
];
const headers = { 'Content-Type': 'application/json' };

cases.forEach(({ a, b, s }) =>
	describe(s + ' asyncAdd()', function() {
	  it('respond with sum', async function() {
		const URL = `https://kodaktor.ru/api/add/${a}/${b}`;  
	    const { data : { 'Сумма' : sum} } = await get(URL, { headers });
		sum.should.equal(s);
	  });
	})
);