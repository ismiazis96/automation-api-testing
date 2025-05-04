const chai = require('chai');
const expect = chai.expect;
// const assert = chai.should;
const request = require('supertest');

let statusCode = 200;
let failedStatusCode = 404;

let method = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products';
let body = {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }


describe('test API product', function(){
    // ini untuk api getProduct
    context('hit api get product', function(){
        it('success', async function(){
            const response = await request(url).get(endpoint);
            
            expect(response.statusCode).to.eq(200);
            expect(response.body[0].id).to.eq(1);
        });
        
        it('failed', async function(){
            const response = await request(url).get(`${endpoint}s`); 
            expect(response.statusCode).to.eq(404) 
        });
    });

    context('hit api create product', function(){
        it('success', async function(){
            const response = await request(url).post(endpoint).send(body);
            // const response = await request(url).post(endpoint).send(data[index].);
            expect(response.statusCode).to.eq(201);
            expect(response.body.title).to.eq(body.title);
        });
        

        it('gagal', async function(){
            let wrongBody = {
                id: 0,
                // title: true,
                title: [],
                price: 0.1,
                description: 'string',
                category: 'string',
                image: 'http://example.com'
            }

            let body = JSON.stringify(wrongBody)

            const response = await request(url).post(endpoint).set(header).send(body);
            
            expect(response.statusCode).to.eq(400);
        })
    })
});