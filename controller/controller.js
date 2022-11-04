const { find } = require("../services/spacexService");

const getLaunches = async function (req, res) {
    return await find(req, res);
}

module.exports = { getLaunches }