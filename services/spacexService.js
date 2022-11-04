require("dotenv").config();
const axios = require("axios");

const urlLaunches = process.env.EXTERNAL_URL_LAUNCHES;
const urlRockets = process.env.EXTERNAL_URL_ROCKETS;
const requestOne = axios.get(urlLaunches);
const requestTwo = axios.get(urlRockets);

const find = async (req, res) => {
    axios
        .all([requestOne, requestTwo])
        .then(
            axios.spread((...responses) => {
                const responseLaunches = responses[0].data;
                const responseRockets = responses[1].data;

                var result = responseLaunches.map(function (launche) {
                    const rocket = findRockets(launche.rocket.rocket_id, responseRockets);
                    const payloads = findPayloads(launche.rocket.second_stage.payloads);
                    const launches =
                    {
                        "flight_number": launche.flight_number,
                        "mission_name": launche.mission_name,
                        "rocket": rocket,
                        "payloads": payloads
                    };

                    return JSON.parse(JSON.stringify(launches))
                });

                res.send(result)
            })
        )
        .catch(errors => {
            console.error(errors);
        });

}

const findRockets = (rocketId, responseRockets) => {
    let rocketFind = responseRockets.find(item => item.rocket_id === rocketId)
    return {
        "rocket_id": rocketFind.rocket_id,
        "rocket_name": rocketFind.rocket_name,
        "description": rocketFind.description,
        "images": rocketFind.flickr_images
    };
}

const findPayloads = (payloads) =>
    payloads.map((payload) => {
        return {
            'payload_id': payload.payload_id,
            'manufacturer': payload.manufacturer,
            "type": payload.payload_type
        }
    });

module.exports = { find }