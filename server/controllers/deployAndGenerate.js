const { config } = require("../../config")
const consola = require("consola")
const { spawnAsync } = require("../lib/spawn")

exports.deployAndGenerate = (req, res) => {
    const uuid = req.query.uuid || config.uuid
    consola.info(`Generation started... (UUID: ${uuid})`)
    spawnAsync("cd ../../ && node deployServer.js " + uuid)
    res.json({
        msg: "ok"
    })
}