/*
Author : Ismi Azis
Date   : 4 Mei 2025
Rle    : QA Automation
*/

const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const dotenv = require('dotenv');

const authData = require("./data/credential.json");
const bookingData = require("./data/bookingData.json");
//const header = require("./data/header.json"); 

// config .env
dotenv.config();
const api = request(process.env.BASE_URL);


// Skenario API E2E Booker
describe('Restfull API Booker', async function() {
    let header = {
        'Content-Type': 'application/json'
    }
    let token;
    let bookingId;

    // testcase 1
    it('Create Token with credential valid', async function() {
        this.timeout(5000);
        const response = await api
        .post("/auth")
        .set(header)
        .send(authData)
        .expect(200);

        console.log(response.body);

        expect(response.body).to.have.property("token");
        token = response.body.token;
        
    });

    // testcase 2
    it('Create a new booking', async function() {
        this.timeout(10000);

        const response = await api
        .post("/booking")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(bookingData)
        .expect(200);

        //console.log(response.status,response.body);

        expect(response.body).to.have.property("bookingid");
        bookingId = response.body.bookingid;
    });

    // testcase 3
    it('Get Booking ID', async function() {
        this.timeout(5000);

        // untuk nunggu agar fungsi delete tidak diekseskusi lebih dulu 
        //await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 detik

        if (!bookingId) {
            throw new Error("Booking ID tidak tersedia");
        }

        const response = await api
        .get(`/booking/${bookingId}`)
        .set("Accept", "application/json")
        .expect(200);

        // console.log("Status:", response.status);
        // console.log("Body:", response.body);

        if (response.status === 200) {
            expect(response.body.firstname).to.equal(bookingData.firstname);
            expect(response.body.lastname).to.equal(bookingData.lastname);
            //console.log(response.body.firstname);
        } else {
            console.error("GET Booking gagal. Status:", response.status);
        }

    });

    // testcase 4
    it('Delete BookingId with token', async function()  {
        this.timeout(5000);
        const response = await api
        .delete(`/booking/${bookingId}`)
        .set("Cookie", [`token=${token}`])
        .expect(201);

        expect(response.text).to.include("Created");
    });
});
