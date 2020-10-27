/*
    Deploy script run by drupal backend
    first arg: landing page UUID
*/

const fs = require('fs')
const { spawn } = require('child_process')
const axios = require("axios")
const { generateHost } = require("./vhost.js")
const { config } = require("./config.js")

const spawnOptions = {
    shell: true,
    cwd: __dirname,
    stdio: [process.stdin, process.stdout, process.stderr]
};

(async () => {
    const uuid = process.argv[2] || "b0b62bdd-a70f-496c-8df2-e1441d9636b8"
    console.log("Deploy started: " + uuid);

    const data = (await axios.get(`${config.host}api/landing_page/${uuid}?include=domain`)).data

    const folder = "sites/" + uuid

    let domain = data.included[0].attributes.hostname.replace('www.','')

    if (domain.split('.').length === 2) {
        domain = "www." + domain
    }
    const nodeId = data.data.attributes.internalId

    const subfolder = (await axios.get(`${config.host}api/domain_path/domain_path`)).data.data
        .find(e => e.attributes.source === `/node/${nodeId}`).attributes.alias

    fs.mkdirSync(`sites/config`, { recursive: true })
    fs.mkdirSync(folder, { recursive: true })

    generateHost(uuid, domain, subfolder, folder)
    spawn(`rsync -avr * ${folder} --exclude='node_modules' --exclude='sites' && cd ${folder} && ln -sfn ../../node_modules/ node_modules`, spawnOptions).on('close', (code) => {
        if (code !== 0) {
            console.error("failed install!")
            return
        }

        fs.writeFileSync(`sites/${uuid}/subfolder.js`, `exports.subfolder = '${subfolder}'\nexports.siteUrl = 'https://${domain}'`, { flag: 'w' }, function (err, data) {
            if (err) {
                return console.error(err)
            }
        })

        spawn(`sudo /usr/bin/certbot -n --nginx -d ${domain}`, spawnOptions).on('close', () => {
            spawn("sudo /etc/init.d/nginx reload", spawnOptions)
        })

        spawn(`cd ${folder} && UUID=${uuid} SUBFOLDER=${subfolder} node preinstall.js && npm rebuild node-sass && ./node_modules/.bin/gatsby build --prefix-paths`, spawnOptions).on('close', (code) => {
            if (code !== 0) {
                console.error("failed install!")
                return
            }
        })
    })
})()
