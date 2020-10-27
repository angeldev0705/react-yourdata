import React, {useEffect, useState} from "react"

import Header from "./header"
import Footer from "./footer"
import Background from "./background"
import "../scss/header.scss"
import "../scss/style.scss"

const Layout = ({ path, children }) => {
  const [bgClass, setBgClass] = useState('homeBg')
  const [headerTheme, setHeaderTheme] = useState('lightHeader')

  useEffect(() => {
    setBgClass('homeBg')
    setHeaderTheme('lightHeader')
    if (path) {
      const splits = path.split('/')
      const route = splits[1];

      route ? setBgClass(route.toLowerCase() + 'Bg') : setBgClass('homeBg')

      if (['blogBg'].includes(bgClass)) {
        setHeaderTheme("darkHeader")
      }
    }
  })

  return (
    <>
      <Background bgClass={bgClass} />
      <div></div>
      <Header headerTheme={headerTheme} />

      <main role="main">

          <div id="page">{children}</div>

          <footer id="footer">
            <Footer />
          </footer>
      </main>
    </>
  )
}

export default Layout
