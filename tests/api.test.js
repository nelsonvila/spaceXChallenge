const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('GET /launches', function () {
    it('responds with json', function () {
        const mockupLaunche =
        {
            flight_number: 1,
            mission_name: 'FalconSat',
            rocket: {
                rocket_id: 'falcon1',
                rocket_name: 'Falcon 1',
                description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
                images: [
                    'https://imgur.com/DaCfMsj.jpg',
                    'https://imgur.com/azYafd8.jpg'
                ]
            },
            payloads: [
                {
                    payload_id: 'FalconSAT-2',
                    manufacturer: 'SSTL',
                    type: 'Satellite'
                }
            ]
        }
        return request(app)
            .get('/launches')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert(response.body[0], mockupLaunche)
            })
    });
});