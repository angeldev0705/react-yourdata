/*
    Use url (what is returned by backend) to find the image in graphql query
    Returnes object which is used by gatsby-image plugin <Img>
*/
exports.getImage = (queryImg, url) => {
    if (!url) {
        url = "placeholder"
    }
    url = decodeURI(url)    
    const img = queryImg.nodes.find(e => {
        if (e.childImageSharp !== null && e.absolutePath.includes(url)) {
            return true
        } else {
            return null
        }
    })
    
    if (img) {
        return img.childImageSharp.fluid
    }
    return queryImg.nodes.find(e => {
        if (e.childImageSharp !== null && e.absolutePath.includes("placeholder")) {
            return true
        } else {
            return null
        }
    })
}