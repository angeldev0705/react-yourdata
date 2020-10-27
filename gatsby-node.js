/*const path = require("path")
const { config } = require("./config")
const axios = require("axios");
exports.createPages = async ({ actions }) => {
    let data = null
    if (config.mode === "dev") {
        data = (await axios.get(config.endPoints[0].url, {
            auth: config.auth
        })).data
    } else {
        data = require("./src/data/api.json")
    }

    const included = {}
    data.included.map((e) => {
        included[e.id] = e
    })

    const { createPage } = actions
    data.data.relationships.subpages.data.map(e => {
        e.data = included[e.id]
        e.included = included
        console.log(included[e.id].attributes.anchor);
        
        createPage({
            path: '/' + included[e.id].attributes.anchor.replace("#", "").replace("internal:/", ""),
            component: path.resolve("./src/components/subpage.js"),
            context: {
                ...e,
                footerLinks: data.data.attributes.footerLinks,
                logo: included[data.data.relationships.logo.data.id].attributes.uri,
                menu: data.data.attributes.menuItems
            }
        })
    })
}*/