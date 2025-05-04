const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');


// let statusCode = 200;
// let statusCodeFail = 400;

// describe('Test Connect', () => {
//     it('test connect positif', () => {
//         expect(statusCode).to.equal(200)
//     });
//     it('test connect negativ', () => {
//         expect(statusCodeFail).to.equal(400)
//     });
// });
let statusCodeFail = 400;
let statusCode = 200;
//let  method = get;
let url = 'https://dummyjson.com';
let endpoint = '/products/1';

describe('Testing API with Dummy Json', () => {
    context('API GET', () => {
        it('Status code, 200 sukses', async () => {
            const response = await request(url).get(endpoint);
            expect(response.statusCode).to.eq(200);
            expect(response.body)
        });

        it('status code, 400 gagal', () => {
            let newEndPoint = `${endpoint}s`;
            const response = request(url).get(newEndPoint);
            console.log(response.statusCodeFail);
        });
    });
});