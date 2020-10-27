/*
    Download media files from API
    It is necessary to run every time when media added to Backend
*/ 
const axios = require("axios");
const { config } = require("./config");
const download = require('download')
const fs = require('fs');
let data = {};

(async function () {
    console.log("Preinstall started...");

    await Promise.all(
        config.endPoints.map(async u => {
            data = (await axios.get(u.url, {
                auth: config.auth
            })).data
            fs.mkdirSync("./src/data/", { recursive: true })
            fs.writeFileSync("./src/data/" + u.saveName, JSON.stringify(data));
        })
    )
    config.endPoints.map(async endpoint => {
        const data = (await axios.get(endpoint.url)).data
        const list = flatten(data)
        Object.keys(list).map((e) => {
            if (!(e.includes('url') || e.includes('uri'))) {
                delete list[e]
            }
            if (list[e] && list[e].includes('internal')) {
                delete list[e]
            }
            if (list[e] && list[e].includes('http')) {
                delete list[e]
            }
        })
        Object.values(list).map((url) => {
            url = ('/' + url.replace(config.host, ''))
                .split('//')
                .join('/')
                .split('?')[0]

            let folder = url.split('/')
            folder.pop()

            folder = config.mediafolder + folder.join('/')
            let filename = url.split("/")
            filename = decodeURI(filename[filename.length - 1])
            fs.mkdir(folder, { recursive: true }, (_) => {
                try {
                    download(config.host + url, folder, { filename })
                    console.log("Downloading: " + filename);
                } catch (error) { }
            })
        })
    })
    const included = {}
    data.included.map((e) => {
        included[e.id] = e
    })
    try {
        download(config.host + included[data.data.relationships.favicon.data.id].attributes.uri, "./static", { filename: "favicon.png" })
    } catch (error) { }

    try {
        let ext = included[data.data.relationships.logo.data.id].attributes.uri.split(".")
        ext = ext[ext.length - 1]
        download(config.host + included[data.data.relationships.logo.data.id].attributes.uri, "./static", { filename: "logo." + ext })
    } catch (error) { }

})();

function flatten(ob) {
    const toReturn = {}

    for (const i in ob) {
        if (!ob.hasOwnProperty(i)) continue

        if (typeof ob[i] === 'object' && ob[i] !== null) {
            const flatObject = flatten(ob[i])
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue

                toReturn[i + '.' + x] = flatObject[x]
            }
        } else {
            toReturn[i] = ob[i]
        }
    }
    return toReturn
}