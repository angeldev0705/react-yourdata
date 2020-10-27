import React, { Component } from "react"
import { Link } from "gatsby"
import classnames from "classnames"

import "../scss/header.scss"

import HomePageLogo from "../assets/img/youData/logo.svg"
import MenuIcon from "../assets/img/menu-icon.svg"
import TwitterLogo from "../assets/img/logo-twitter.svg"
import FacebookLogo from "../assets/img/logo-facebook.svg"
import InstagramLogo from "../assets/img/logo-instagram.svg"
import LinkedInLogo from "../assets/img/logo-linkedin.svg"
import ChevronDown from "../assets/img/youpalGroup/chevron-down.svg"


class Header extends Component {
  constructor(props) {
    super(props)

    this.myRef = React.createRef()

    this.state = {
      isSticky: false,
      showNavMenu: false,
      selectedNav: "",
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        this.setState({
          isSticky: true,
        })
      } else if (window.scrollY < 100) {
        this.setState({
          isSticky: false,
        })
      }
    })
  }

  render() {
    const { isSticky, selectedNav, showNavMenu } = this.state

    const showNav = (nav) =>
      selectedNav?.toLowerCase().includes(nav) ? "show" : ""

    const hClass = classnames(
      "navbarDiv",
      "sticky-top",
      isSticky ? "compactNav" : this.props.headerTheme
    )

    const togglerClass = classnames(
      "navbar-toggler",
      "z-index-top",
      showNavMenu ? "" : "collapsed"
    )

    const collapseClass = classnames(
      "navbar-collapse",
      "collapse",
      showNavMenu ? "show" : ""
    )

    const checkScroll = () => {
      if (document.body.classList.contains("no-scroll")) {
        document.documentElement.classList.remove("no-scroll")
        return document.body.classList.remove("no-scroll")
      }
      document.documentElement.classList.add("no-scroll")
      return document.body.classList.add("no-scroll")
    }

    const handleNavClick = () => {
      this.setState({ showNavMenu: true })
      checkScroll()
    }

    const handleLinkClick = () => {
      this.setState({ showNavMenu: false })
      checkScroll()
    }

    return (
      <div className={hClass}>
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand z-index-top" to="/">
            <img src={HomePageLogo} />
          </Link>
          <div className="row justify-content-end">
            <a
              className={togglerClass}
              type="button"
              data-toggle="collapse"
              data-target="#navbarTop"
              aria-controls="navbarTop"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleNavClick}
            >
              <img src={MenuIcon} />
            </a>

            <div className={collapseClass} id="navbarTop">
              <ul className="ml-5 mr-auto navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    activeClassName="nav-link-active"
                    onClick={handleLinkClick}
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/products"
                    activeClassName="nav-link-active"
                    onClick={handleLinkClick}
                  >
                    <span>Products</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact-us"
                    activeClassName="nav-link-active"
                    onClick={handleLinkClick}
                  >
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about-us"
                    activeClassName="nav-link-active"
                    onClick={handleLinkClick}
                  >
                    <span>About us</span>
                  </Link>
                </li>
                <li className="socials position-absolute d-lg-none">
                  <div className="footerSocials">
                    <a
                      href="https://twitter.com/YoupalGroup"
                      className="mr-4"
                      target="_blank"
                    >
                      <img className="footer-twitter" src={TwitterLogo} />
                    </a>
                    <a
                      href="https://www.facebook.com/youpalgroup"
                      className="mr-4"
                      target="_blank"
                    >
                      {" "}
                      <img className="footer-fb" src={FacebookLogo} />
                    </a>
                    <a
                      href="https://www.instagram.com/youpalgroup"
                      className="mr-4"
                      target="_blank"
                    >
                      <img className="footer-instagram" src={InstagramLogo} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/youpalgroup"
                      target="_blank"
                    >
                      <img className="footer-linkedin" src={LinkedInLogo} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
