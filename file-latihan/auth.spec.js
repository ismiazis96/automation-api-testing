const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

// panggil credentials
const credentials = require('./data/credentials.json');

describe('API E2E', async () => {
    //let statusCode = 200;
    let header = {
        'Content-Type': 'application/json'
    }
    let url = 'https://restful-booker.herokuapp.com';
    let endpointBooking = '/booking';
    let endpoint = '/auth';
    let bookingId;
    let tokenId;

    const body = {
        "firstname" : "izmi",
        "lastname" : "azis",
        "totalprice" : 100,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2025-04-27",
            "checkout" : "2025-04-28"
        },
        "additionalneeds" : "Breakfast"
    }
    
    it.only('Positive - Create Token with credential valid ', async function()  {
        this.timeout(5000);
        const response = await request(url).post(endpoint).set(header).send({
            username: credentials.username,
            password: credentials.password
        });
        // tokenId = response.body.token;
        console.log(await response.body);
        expect(await response.statusCode).to.eq(200);
        expect(await response.body.token);
        // tokenId = response.body.token;
    
    });

    it('Create Booking with token', async function() {

        const response = await request(url).post(endpointBooking).set(header).set('Cookie', `token=${tokenId}`).send(body);
        //expect(await response.statusCode).to.equal(200);
        // expect(await response.body).to.have.property('booking');
        // expect(await response.body.booking.firstname).to.equal('izmi');
        bookingId = await response.body.bookingid;
        console.log('Booking ID'.bookingId);

    });

    it('Get kode booking', async () => {
        const response = await request(url).get(endpointBooking).set(header).set('Cookie',`token=${tokenId}`)
        console.log(response);
    });

    it('Negative - API auth with credentials invalid ', async ()  => {
        const response = await request(url).post(endpoint).set(header).send({
            username: "admin123",
            password: credentials.password
        });
        expect(response.statusCode).to.eq(200);
        expect(response.body.reason).to.eq("Bad credentials")
    
    });

});

// masih ada PR di create booking dan ambil getId booking