import React from "react"
import SEO from "../components/seo"

import "../scss/products.scss"

import RobotImg from "../assets/img/youData/products/robot.svg"
import TypeWriterImg from "../assets/img/youData/products/typewriter.svg"
import PuzzleImg from "../assets/img/youData/products/puzzle.svg"
import HandImg from "../assets/img/youData/products/hand.svg"
import RobotFaceImg from "../assets/img/youData/contactus/robot-face.svg"

const ProductsPage = () => {
  return (
    <div>
      <SEO
        title="Youdata Products"
        keywords={["youpal", "youpal group", "youData", "youData Products"]}
      />
      <div className="productsMain">
        <section className="container productsHeader mb-5">
          <div className="row productsHeaderContainer">
            <div className="col-xl-7 pl-5 pt-5 productsHeaderContent">
              <h2 className="productsTitle text-left">
                A new opportunity is just another
                <span className="productsTitleVariation">
                  {" "}
                  chance to create
                </span>
              </h2>
              <p className="text-left productsHeaderText">
                You and Data should never be apart. You and Data can come
                together and be synched with YouData. It is not a coincidence
                that we called our company YouData, this is because Data can be
                you, it can be us and it can be all around us.
              </p>
            </div>
            <div className="col-xl-5 productsHeaderImgContainer">
              <img src={RobotImg} alt="people" className="productsHeaderImg" />
            </div>
          </div>
        </section>

        <section className="container text-left my-5 p-5 productsSolutions">
          <h3 className="text-center col-xl-12 my-5 productsTitle">
            Our Solutions
          </h3>
          <div className="row my-5 py-3 px-5 productsSolutionsContainer">
            <h2 className="productsSolutionsTitle productsSolutionsTitleMobile">
              Data Lakes
            </h2>
            <div className="col-xl-5">
              <img
                src={TypeWriterImg}
                alt="Data Lakes"
                className="productsSolutionsImg"
              />
            </div>
            <div className="col-xl-7">
              <div>
                <h2 className="productsSolutionsTitle productsSolutionsTitleDesktop">
                  Data Lakes
                </h2>
                <p className="w-75 mb-5 productsSolutionsText">
                  The most important parts of data management are processing and
                  security. In Data Lakes, we create data secure eco-system.
                  Data warehouse is where we keep data streams. This is
                  transitional infrastructure between warehouse and machine
                  learning.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5 py-3 px-5 productsSolutionsContainer productsSolutionsContainerAlternate">
            <div className="col-xl-7">
              <div>
                <h2 className="productsSolutionsTitle productsSolutionsTitleDesktop">
                  API
                </h2>
                <p className="w-75 productsSolutionsText">
                  Information can be produced from everything. With the right
                  database structure and API thinking, your information can find
                  the right way to connect with every source. With the right
                  setup, possibilities are limitless.
                </p>
              </div>
            </div>
            <div className="col-xl-5">
              <img src={PuzzleImg} alt="API" className="productsSolutionsImg" />
            </div>
            <h2 className="productsSolutionsTitle productsSolutionsTitleMobile">
              API
            </h2>
          </div>

          <div className="row my-5 py-3 px-5 productsSolutionsContainer">
            <h2 className="productsSolutionsTitle productsSolutionsTitleMobile">
              Machine Learning and AI
            </h2>
            <div className="col-xl-5">
              <img
                src={HandImg}
                alt="Machine Learning and AI"
                className="productsSolutionsImg"
              />
            </div>
            <div className="col-xl-7">
              <div>
                <h2 className="productsSolutionsTitle productsSolutionsTitleDesktop">
                  Machine Learning and AI
                </h2>
                <p className="w-75 productsSolutionsText">
                  If you have managed your information the right way, set it up
                  correctly, and put it into a secure environment, the
                  intelligent touch can enhance your information endlessly. We
                  constantly generate information from our clients, then we
                  structure and clean it, in a way to train machines, create
                  algorithms applicable to the existing information and only
                  after, we generate predictions, using AI touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container contactUsFormContainer productsForm my-5">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <h2 className="text-center text-white p-5 mt-5">
                Leave us your email and we share with you more info about
                YouData
              </h2>
            </div>
            <img
              src={RobotFaceImg}
              alt="Contact Form"
              className="productsFormImg"
            />
          </div>
          <div className="row">
            <form
              action=""
              method="post"
              className="p-5 col-xl-10 offset-xl-1 bg-white text-left"
            >
              <div className="row my-5">
                <div className="col-xl-6 form-group">
                  <label htmlFor="name" className="contactUsFormLabel">
                    <small>Your name*</small>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name here"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="col-xl-6">
                  <label htmlFor="email" className="contactUsFormLabel">
                    <small>Contact email*</small>
                  </label>
                  <input
                    type="mail"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>

              <div className="row my-5">
                <div className="col-xl-6">
                  <label htmlFor="company" className="contactUsFormLabel">
                    <small>Company name*</small>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company name"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="col-xl-6">
                  <label htmlFor="country" className="contactUsFormLabel">
                    <small>Country*</small>
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
              </div>

              <div className="row my-5">
                <div className="col-xl-12">
                  <label htmlFor="message" className="contactUsFormLabel">
                    <small>Your message*</small>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Imma want to be your pal"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <small className="row px-3">
                By submitting this form you agree to our terms and conditions
                and our Privacy Policy which explains how we may collect, use
                and disclose your personal information including to third
                parties.
              </small>
              <button
                type="submit"
                className="contactUsButton col-xl-3 btn text-white mt-5 font-weight-bold"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>

        <section className="container productsContact">
          <div className="row productsContactContainer">
            <div className="col px-5 productsContactContent">
              <h2 className="productsContactTitle">
                Without data, you are just another person with an opinion
              </h2>
              <button
                className="btn bg-white border-white col-xl-3 productsContactBtn"
                type="button"
                id="button-addon2"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductsPage
