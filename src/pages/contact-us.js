import React from "react"
import SEO from "../components/seo"

import {Link} from "gatsby";

import "../scss/contactus.scss"

import AboutUsImg from "../assets/img/youData/contactus/about-us.svg"
import RobotFaceImg from "../assets/img/youData/contactus/robot-face.svg"

const ContactUsPage = () => {
  return (
    <div className="contactUs my-5 pt-4 pt-md-0">
      <SEO
        title="Contact Us"
        keywords={[`youpal`, `youpal group`, "youData", "youData contact"]}
      />
      <section className="container contactUsFormContainer my-5 pt-3">
        <div className="row">
          <div className="contactUsFormTitle">
            <h2 className="text-center text-white">
              Have a Question? Send us a message
            </h2>
          </div>
          <div>
            <img src={RobotFaceImg} alt="Contact Form" className="contactUsFormImg"/>
          </div>
        </div>
        <form
            action=""
            method="post"
            className="p-0 p-md-5 col-xl-10 offset-xl-1 bg-white text-left contactUsCard"
          >
        <div className="row mx-0">
          
              <div className="col-xl-6 my-3 my-md-5 form-group">
                <label htmlFor="name" className="contactUsFormLabel">
                  Your name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name here"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-xl-6 my-3 my-md-5">
                <label htmlFor="email" className="contactUsFormLabel">
                  Contact email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-xl-6 my-3 my-md-5">
                <label htmlFor="company" className="contactUsFormLabel">
                  Company name*
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company name"
                  className="form-control form-control-lg"
                />
              </div>

              <div className="col-xl-6 my-3 my-md-5">
                <label htmlFor="country" className="contactUsFormLabel">
                  Country*
                </label>
                <select
                  name="country"
                  id="country"
                  className="form-control form-control-lg"
                >
                  <option selected="true" disabled="disabled">
                    Select your country
                  </option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                  <option value="">Option 3</option>
                  <option value="">Option 4</option>
                  <option value="">Option 5</option>
                  <option value="">Option 6</option>
                </select>
              </div>

              <div className="col-xl-12 my-4">
                <label htmlFor="message" className="contactUsFormLabel">
                  Your message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Imma want to be your pal"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-12">
                <p>
                  By submitting this form you agree to our terms and conditions and
                  our Privacy Policy which explains how we may collect, use and
                  disclose your personal information including to third parties.
                </p>
              </div>
            <div className="col-12 text-center text-md-left">
              <button
                type="submit"
                className="contactUsButton btn text-white mt-4 mt-md-5 font-weight-bold mb-md-0 mb-4"
              >
                SUBMIT
              </button>
            </div>
          
        </div>
        </form>
      </section>

      <section className="container text-left my-2 my-md-5">
        <div className="row">
          <h2 className="contactUsFooterTitle mt-xl-5 mt-md-3 d-block d-md-none mx-auto mb-4">About Us</h2>
          <div className="col-xl-4 col-md-5 col-12 offset-md-1 offset-xl-1">
            <img src={AboutUsImg} alt="About us" className="contactUsFooterImg"/>
          </div>
          <div className="col-xl-4 col-md-5 col-12 offset-md-1 offset-xl-1">
            <h2 className="contactUsFooterTitle mt-xl-5 mt-md-3 d-none d-md-block">About Data</h2>
            <p className="mb-5 contactUsFooterText">
            Data is not only used in science and technology, but it also has a huge influence on our everyday life. It gives us the ability to collect and analyze everything we do and leaves behind a digital footprint. The capability to handle huge and ever-expanding data is fully transforming our understanding of the world around us. The integration of data in our everyday life is essential. Even now, data influences how we work, exercise and shop and, this is just the beginning.

            </p>
          </div>
          <Link to="/about-us" className="mx-auto">
            <button type="click" className="contactUsButton btn text-white mt-0 font-weight-bold d-block d-md-none">
                READ MORE
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ContactUsPage
