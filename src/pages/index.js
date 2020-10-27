import React from "react"
import SEO from "../components/seo"

import "../scss/youdata.scss"

import HeaderImg from "../assets/img/youData/header-img.svg"
import ManIcon from "../assets/img/youData/man-icon.svg"
import LocationPinIcon from "../assets/img/youData/location-pin-icon.svg"
import ServerIcon from "../assets/img/youData/server-icon.svg"
import BlackBoxImage from "../assets/img/youData/blackbox.svg"
import ApiImage from "../assets/img/youData/api.svg"
import AiImage from "../assets/img/youData/ai.svg"
import HoldingIcon from "../assets/img/youData/holding-icon.svg"
import LaptopIcon from "../assets/img/youData/laptop-icon.svg"
import PieChartIcon from "../assets/img/youData/pie-chart-icon.svg"
import SearchIcon from "../assets/img/youData/search-icon.svg"
import TransferIcon from "../assets/img/youData/transfer-icon.svg"
import VerifiedIcon from "../assets/img/youData/verified-icon.svg"
import DataStories from "../assets/img/youData/data-stories.svg"
import LightBulbStories from "../assets/img/youData/lightbulb-stories.svg"
import HeightStories from "../assets/img/youData/height-stories.svg"
import FrameStories from "../assets/img/youData/frame-stories.svg"
import BgBug from "../assets/img/youData/background.svg"

const YouDataPage = () => {
  return (
    <div>
      <SEO title="YouData" keywords={[`youpal`, `youpal group`, `youData`]} />
      <div className="youDataMain">
      <div className="bgBug"><img src={BgBug} /></div>
        <section className="container-fluid">
          <div className="row youDataHeaderContainer">
            <div className="col-xl-6 text-left">
              <h1 className="youDataHeaderTitle">Data is me, you and us.</h1>
              <h3 className="youDataHeaderSubtitle">
                Data that is loved, tend to survive
              </h3>
              <p className="youDataHeaderText">
                Every action or interaction produces information. We live to
                write our own story. Every person and every business has its own
                narrative, and while you are authors of your story, we will be
                the bookkeepers of your data.
              </p>
            </div>
            <div className="col-xl-6 text-center youDataHeaderImgContainer">
              <img src={HeaderImg} alt="" className="youDataHeaderImg" />
            </div>
          </div>
        </section>

        <section className="container border border-white rounded bg-white py-5 youDataAchievementSection d-none">
          <div className="row d-flex align-items-center youDataAchievement">
            <div className="col-xl-4 youDataAchievementContainer">
              <img
                src={ManIcon}
                alt="man-icon"
                className="d-inline youDataAchievementImg"
              />
              <div className="ml-2 youDataAchievementText">
                <h5 className="youDataAchievementTextAlternate">90+ </h5>
                <h5 className="youDataAchievementTextTitle"> Users</h5>
              </div>
            </div>
            <div className="col-xl-4 youDataAchievementContainer">
              <img
                src={LocationPinIcon}
                alt="location-pin-icon"
                className="d-inline youDataAchievementImg"
              />
              <div className="ml-2 youDataAchievementText">
                <h5 className=" youDataAchievementTextAlternate">30+</h5>
                <h5 className="youDataAchievementTextTitle">Locations</h5>
              </div>
            </div>
            <div className="col-xl-4 youDataAchievementContainer">
              <img
                src={ServerIcon}
                alt="server-icon"
                className="d-inline youDataAchievementImg"
              />
              <div className="ml-2 youDataAchievementText">
                <h5 className="youDataAchievementTextAlternate">50+</h5>
                <h5 className="youDataAchievementTextTitle">Servers</h5>
              </div>
            </div>
          </div>
        </section>

        <section className="container text-left my-5 youDataStories">
          <h3 className="text-center col-xl-12 my-5 youDataTitle">
            Our Stories
          </h3>
          <div className="row my-5 p-3 youDataStoriesContainer">
            <div className="col-xl-6">
              <img
                src={DataStories}
                alt="The story is the Data"
                className="youDataStoriesImg"
              />
            </div>
            <div className="col-xl-6 youDataStoriesContent">
              <h2 className="youDataStoriesTitle">The story is the Data</h2>
              <p className="pr-5 w-100 mb-5 youDataStoriesText">
              If there is no you, there would not be us. Without you, many things would lose their value. In YouData we can create the value of your information.
              </p>
              <p className="pr-5 w-100 mb-5 youDataStoriesText">
              Once we understand it, we can create and give meaning to everything around us, and we can grow together.
              </p>
            </div>
          </div>

          <div className="row mb-5 p-3 youDataStoriesContainer youDataStoriesContainerAlternate">
            <div className="col-xl-6 youDataStoriesContent">
              <h2 className="youDataStoriesTitle yellowOne">
                New chapter comes with new possibilities
              </h2>
              <p className="pr-5 w-100 youDataStoriesText">
                In the process of growth and evolution, data is the core
                value-driver. As we are experiencing life, we collect and give
                away data every single day. To create the right value, we need
                to learn and evolve. The story is the data, and we have to be
                creating our own chapters.
              </p>
            </div>
            <div className="col-xl-6">
              <img
                src={LightBulbStories}
                alt="New Chapter comes with new possibilities"
                className="youDataStoriesImg fixSideImg"
              />
            </div>
          </div>

          <div className="row my-5 p-3 youDataStoriesContainer">
            <div className="col-xl-6">
              <img
                src={HeightStories}
                alt="Core-value driver"
                className="youDataStoriesImg highimg"
              />
            </div>
            <div className="col-xl-6 youDataStoriesContent">
              <h2 className="youDataStoriesTitle">Core-value driver</h2>
              <p className="pr-5 w-100 youDataStoriesText">
              We make sure that your data is in a secure environment, yet give you the opportunity to enhance the possibilities of its’ usage. With the right tools and features, your data is the core-value driver, constantly advancing to the new level. In YouData we carry and care about your information. We create a special environment and contribute to creating new tangible values.


              </p>
            </div>
          </div>

          <div className="row my-5 p-3 youDataStoriesContainer youDataStoriesContainerAlternate">
            <div className="col-xl-6 youDataStoriesContent">
              <div>
                <h2 className="youDataStoriesTitle">
                  We grow and share together
                </h2>
                <p className="pr-5 w-100 youDataStoriesText">
                Data is produced on every step and interaction we make. Once it is produced, it is hard to keep it only for yourself, so we share it as one of the most valuable assets. Every journey is made up of steps, and each step has its own value. Every single data has value, which should be understood for the greater instance and journey.  
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <img
                src={FrameStories}
                alt="We grow and share together"
                className="youDataStoriesImg fixSideImg"
              />
            </div>
          </div>
        </section>

        <section className="container text-left my-5 youDataProducts">
          <h3 className="text-center col-xl-12 my-5 youDataTitle">
            Our Products
          </h3>
          <div className="row my-5 p-3 youDataProductsContainer">
            <div className="col-xl-6">
              <img
                src={BlackBoxImage}
                alt="blackBOX"
                className="youDataProductsImg"
              />
            </div>
            <div className="col-xl-6 youDataProductsContent">
              <div>
                <h2 className="youDataProductsTitle">BlackBOX</h2>
                <p className="pr-5 w-75 mb-5 youDataProductsText">
                  The most important parts of data management are processing and
                  security. In the Blackboxes we create the data secure
                  eco-system.
                </p>
              </div>
              <button className="youDataProductsBtn col-xl-4 btn text-white mt-5 font-weight-bold">
                LEARN MORE
              </button>
            </div>
          </div>

          <div className="row my-5 p-3 youDataProductsContainer youDataProductsContainerAlternate">
            <div className="col-xl-6 youDataProductsContent">
              <div>
                <h2 className="youDataProductsTitle">API</h2>
                <p className="pr-5 w-75 youDataProductsText">
                  Data can be produced from everything. With the right database
                  structure and API thinking, your data can find the right way
                  to connect with every source. With the right setup,
                  possibilities are limitless.
                </p>
              </div>
              <button className="youDataProductsBtn col-xl-4 btn text-white mt-5 font-weight-bold">
                LEARN MORE
              </button>
            </div>
            <div className="col-xl-6">
              <img src={ApiImage} alt="api" className="youDataProductsImg" />
            </div>
          </div>

          <div className="row my-5 p-3 youDataProductsContainer">
            <div className="col-xl-6">
              <img src={AiImage} alt="AI" className="youDataProductsImg" />
            </div>
            <div className="col-xl-6 youDataProductsContent">
              <div>
                <h2 className="youDataProductsTitle">AI</h2>
                <p className="pr-5 w-75 youDataProductsText">
                  If you have managed your data the right way, set it up
                  correctly, and put it into a secure environment, the
                  intelligent touch can enhance your data endlessly. Only after
                  the right set up and the great structure, makes AI valuable
                  and powerful to apply.
                </p>
              </div>
              <button className="youDataProductsBtn col-xl-4 btn text-white mt-5 font-weight-bold">
                LEARN MORE
              </button>
            </div>
          </div>
        </section>

        <section className="container text-left my-5 youDataReasons">
          <h3 className="text-center col-xl-12 my-5 youDataTitle">
            Why YouData?
          </h3>
          <div className="youDataReasonsContainer">
            <div className="youDataReasonsContent">
              <div>
                <img
                  src={LaptopIcon}
                  alt="Data Visualization"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">Data visualization</h4>
                <p className="youDataReasonsText">
                  YouData gives you the ability to make the data even more
                  comprehensible, via visualizing it.
                </p>
              </div>
            </div>

            <div className="youDataReasonsContent">
              <div>
                <img
                  src={VerifiedIcon}
                  alt="Automated processes"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">Automated processes</h4>
                <p className="youDataReasonsText">
                  With YouData, every process and transition is automated.
                </p>
              </div>
            </div>

            <div className="youDataReasonsContent">
              <div>
                <img
                  src={SearchIcon}
                  alt="Keep track of business KPI"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">
                  Keep track of business KPI
                </h4>
                <p className="youDataReasonsText">
                  YouData enables you to keep a track of the KPI set to your
                  business activities.
                </p>
              </div>
            </div>

            <div className="youDataReasonsContent">
              <div>
                <img
                  src={PieChartIcon}
                  alt="Data screening"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">Data screening</h4>
                <p className="youDataReasonsText">
                  Here we can ensure that your data is clean and safe in our
                  data-friendly environment.
                </p>
              </div>
            </div>

            <div className="youDataReasonsContent">
              <div>
                <img
                  src={HoldingIcon}
                  alt="Manage reports and planning"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">
                  Manage reports and planning
                </h4>
                <p className="youDataReasonsText">
                  Manage every step with your business and create new chapters
                  of your data story with YouData.
                </p>
              </div>
            </div>

            <div className="youDataReasonsContent">
              <div>
                <img
                  src={TransferIcon}
                  alt="Data conversion&normalization"
                  className="youDataReasonsImg"
                />
              </div>
              <div className="youDataReasonsInfo">
                <h4 className="youDataReasonsTitle">
                  Data conversion & normalization
                </h4>
                <p className="youDataReasonsText">
                  We can make one of the most fundamental steps in data
                  processing smooth and comprehensive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container youDataContact">
          <div className="row youDataContactContainer">
            <div className="col px-5">
              <h3 className="text-white youDataContactTitle">
                Even unstructured Data can have value<br /> with YouData
              </h3>
              <button
                className="btn bg-white border-white col-xl-3 youDataContactBtn"
                type="button"
                id="button-addon2"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default YouDataPage
