require("bootstrap/dist/css/bootstrap.min.css")
require("jquery/dist/jquery.slim")
require("popper.js/dist/popper")
require("bootstrap/dist/js/bootstrap") 
// require("@fortawesome/fontawesome-free/scss/fontawesome.scss")
require("./src/scss/fonts.scss")
require("./src/scss/style.scss")

const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
