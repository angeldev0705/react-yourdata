import React from "react"
import { Link } from "gatsby"
import "../scss/footer.scss"

import YouCloudLogo from "../assets/img/youData/footerLogo.svg"
import TwitterLogo from "../assets/img/youpalGroup/logo-twitter.png"
import FacebookLogo from "../assets/img/youpalGroup/logo-facebook.png"
import InstagramLogo from "../assets/img/youpalGroup/logo-instagram.png"
import LinkedInLogo from "../assets/img/youpalGroup/logo-linkedin.png"

const Footer = () => {
  return (
    <div className="container h-100">
      <div className="row h-100 align-items-center pt-2 pt-md-0">
        <div className="col-6 order-lg-1 order-1 col-lg-4">
          <div className="footerLogo">
            <img src={YouCloudLogo} />
          </div>
        </div>
        <div className="col-12 order-lg-2 order-3 col-lg-5">
          <div className="row footerMenu justify-content-center">
            <div className="col-4 col-lg-4 footerLinks">
              <Link to="/privacy-policy/">Privacy Policy</Link>
            </div>
            <div className="col-4 col-lg-5 footerLinks">
              <Link to="/terms-and-conditions/">Terms & Conditions</Link>
            </div>
            <div className="col-4 col-lg-3 footerLinks">
              <Link to="/contact-us/">Support</Link>
            </div>
          </div>
        </div>
        <div className="col-6 order-lg-3 order-2 col-lg-3">
          <div className="footerSocials d-flex justify-content-end">
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
        </div>
      </div>
    </div>
  )
}

export default Footer
