import React from "react"
import SEO from "../components/seo"

import PeopleImg from "../assets/img/youData/aboutus/peoples.svg"
import PeopleMobileImg from "../assets/img/youData/aboutus/peoplesMobile.svg"
import OurVisionImg from "../assets/img/youData/aboutus/our-vision.svg"

import Chaimae from "../assets/img/youData/aboutus/chaimae.svg"
import Apostolis from "../assets/img/youData/aboutus/apostolis.svg"
import Luis from "../assets/img/youData/aboutus/luis.svg"

import "../scss/aboutus.scss"

const AboutUsPage = () => {
  return (
    <div>
      <SEO
        title="Youdata AboutUs"
        keywords={["youpal", "youpal group", "youData", "youData About Us"]}
      />
      <div className="aboutUsMain">
        <section className="container-fluid aboutUsHeader mb-5">
          <div className="row">
            <div className="col-xl-6 order-2 order-xl-1">
              <h2 className="aboutUsTitle text-left aboutUsTitleMain">
              About your data and 
                <span className="aboutUsTitleVariation"> Youdata</span>
              </h2>
              <p className="text-left aboutUsHeaderText">
              We create data with every step we take during our journey. Once we receive initial information, it instantly becomes an important element of our story. It is important that we make data-driven decisions on the way. In many instances, it involved personal information. We use data to better improve our everyday life.


              </p>
              <p className="text-left aboutUsHeaderText">
              Data sciences have evolved and enhanced to make sense of the big data, we produce on a daily basis. Data is collected by smart devices, it is saved in the clouds and it is used in a simple workflow. The reason for the proper analysis of data is to make the right data-driven decisions. Via training our mechanisms and practicing data research, we structure the new data sets. In Youpal we understand the importance of sensitive information, and always use data ethically.  

 
              </p>
              <p className="text-left aboutUsHeaderText">
              With the right usage of sources and potential of data, you can easily track your workflow, you can check potential partners, and monitor their performance. While certain uses of data are still being developed, our approach, API, and machine learning technologies can structure your data and assist in creating a new business culture. 

              </p>
            </div>
            <div className="col-xl-5 offset-xl-1 order-1 order-xl-2">
            <img src={PeopleImg} alt="people" className="aboutUsHeaderImg d-none d-md-block" />
            <img src={PeopleMobileImg} alt="people" className="aboutUsHeaderImg d-block d-md-none" />
            </div>
          </div>
        </section>

        <section className="container my-5 pt-0 pt-md-5">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 text-center">
              <h2 className="aboutUsTitle my-2 my-md-5 mx-auto">Our Vision</h2>
              <img
                src={OurVisionImg}
                alt="Our Vision"
                className="my-md-5 my-4 text-center aboutUsSectionImg"
              />
              <div className="col-md-6 offset-md-3 text-center">
                <h2 className="aboutUsSectionText my-3 my-md-5">
                  Together we grow and share everything we have. We become
                  curious and make discoveries, then we gain experiences and
                  learn to progress.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="container text-left my-5">
          <h3 className="aboutUsTitle text-center col-xl-12 my-5 mx-auto">
            Meet Our Team
          </h3>
          <div className="row my-5">
            <div className="col-xl-3 offset-xl-1">
              <img src={Chaimae} alt="Chaimae" className="aboutUsTeamImg" />
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-5 col-md-12 mt-4 mt-md-5">
                  <h2 className="aboutUsTeamTitle mb-2">Chaimae</h2>
                </div>
                <div className="col-7 col-md-12 mt-4 mt-md-0 px-0 px-md-3 text-right text-md-left">
                  <small className="aboutUsTeamProffession px-3">
                    Data Engineer
                  </small>
                </div>
                <div className="col-12">
                  <p className="my-1 my-md-3 aboutUsTeamTestimony">
                    {`<<I started my journey as a Data Engineer with the youdata team.
                  Working alognside my teammates not only inspires me but helps me challenge myself everyday!>>`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-xl-7 offset-xl-1 order-2 order-md-1">
              <div className="row">
                <div className="col-5 col-md-12 mt-4 mt-md-5">
                  <h2 className="aboutUsTeamTitle mb-2">Apostolis</h2>
                </div>

                <div className="col-7 col-md-12 mt-4 mt-md-0 px-0 px-md-3 text-right text-md-left">
                  <small className="aboutUsTeamProffession px-3">
                  Team Lead, Data team
                  </small>
                </div>
                <div className="col-12">
                  <p className="my-1 my-md-3 aboutUsTeamTestimony">
                  {`<<The things we can do with a large enough dataset is truly amazing and
                  really inspires my imagination of how the world will look in just 5 years. This
                  is what YouData allows me to do, work with a lot of data and inspire my
                  imagination>>.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 order-1 order-md-2">
              <img src={Apostolis} alt="Apostolis" className="aboutUsTeamImg" />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-xl-3 offset-xl-1">
              <img src={Luis} alt="Luis" className="aboutUsTeamImg" />
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-5 col-md-12 mt-4 mt-md-5">
                  <h2 className="aboutUsTeamTitle mb-2">Luis</h2>
                </div>
                <div className="col-7 col-md-12 mt-4 mt-md-0 px-0 px-md-3 text-right text-md-left">
                  <small className="aboutUsTeamProffession px-3">
                    Senior Data Engineer
                  </small>
                </div>
                <div className="col-12">
                  <p className="my-1 my-md-3 aboutUsTeamTestimony">
                    {`<<YouData is the first company that has offered me the opportunity of
                    unleashing my technical skills without location or schedule restrictions>>.`}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default AboutUsPage
