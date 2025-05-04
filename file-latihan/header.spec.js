const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

describe('coba header', async () => {
    let header = {
        'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }
    let url = 'https://api.travelpayouts.com';
    let endpoint = '/v1/prices/monthly'

    it('Run Test Positif', async ()  => {
        const response = await request(url).get(endpoint).set(header);
        expect(response.statusCode).to.eq(200);
        // console.log(response.body);
    });


});