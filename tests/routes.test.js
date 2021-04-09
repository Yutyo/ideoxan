const request = require('supertest')
const mongoose = require('mongoose')

let app = require('../src/apps/main').app

beforeEach(() => {
    jest.setTimeout(20000)
})

describe('(SERVER) Request Error Pages', () => {
    it('Should receive 404 NOT FOUND HTTP response for GET /a-404-page', async (done) => {
        const res = await request(app).get('/a-404-page')
        expect(res.statusCode).toEqual(404)
        done()
    })
})

