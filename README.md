## About Proyecto

This project allows you to interact with the SpaceX API where an endpoint was created to obtain all launches with their rockets.

## Get Starting

1. Clone or download this repository to your project folder.
1. Run `npm install` to installl dependencies.
1. Run `npm start` to start the local server.

## Running the app

To correctly perform the tests we suggest using [Postman](https://identity.getpostman.com/signup?continue=https%3A%2F%2Fgo.postman.co%2Fbuild).

### Get all launches

1. Open Postman and create a new `GET` request pointing to the following address: http://localhost:3000/launches/
1. In the `Header` tab, add (if it does not exist) a new key `Content-Type` with the value `application/json`.

1. Click on the `Send` button and the request will be sent to the project, you should receive a response with the status `200 Ok` and a json with the following format

```json
[
  {
    "flight_number": 1,
    "mission_name": "FalconSat",
    "rocket": {
      "rocket_id": "falcon1",
      "rocket_name": "Falcon 1",
      "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      "images": [
        "https://imgur.com/DaCfMsj.jpg",
        "https://imgur.com/azYafd8.jpg"
      ]
    },
    "payloads": [
      {
        "payload_id": "FalconSAT-2",
        "manufacturer": "SSTL",
        "type": "Satellite"
      }
    ]
  }
  ...
]
```

## Test

```bash
# unit tests
$ npm test
```

# Resources

- [Express](https://www.npmjs.com/package/express)
- [Supertest](https://www.npmjs.com/package/supertest)
