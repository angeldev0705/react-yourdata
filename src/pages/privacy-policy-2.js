import React from "react"
import SEO from "../components/seo"

import {Link} from "gatsby";

import PrivacyPagination from '../components/privacyPagination';

import "../scss/contactus.scss"
import "../scss/privacy.scss"

const PrivacyPolicy2Page = () => {
  return (
    <div className="contactUs privacyPage my-5 pt-4 pt-md-0">
      <SEO
        title="Privacy Policy"
        keywords={[`youpal`, `youpal group`, "youData", "youData contact"]}
      />
      <section className="container contactUsFormContainer my-5 pt-3">
        <div className="row">
          <div className="contactUsFormTitle">
            <h2 className="text-center text-white privacyPageTitle">
              Privacy Policy
            </h2>
          </div>
        </div>
        <form
            action=""
            method="post"
            className="p-0 p-md-5 col-xl-10 offset-xl-1 bg-white text-left contactUsCard"
          >
            <div className="row mx-0 formWrapper">
          
                <h2>Where do we store and process personal data?</h2>

                <p>
                    We adopted all statutory requirements with regards to our obligations as a data controller and/or processor under GDPR to provide you with adequate level of data protection. You should be aware that YouData is a company registered and acting under the law of Sweden and directly falls under the regulation of the EU on the protection of personal data, including General Data Protection Regulation (GDPR) - Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016.
                </p>

                <p>
                    We provide adequate protection of personal data under GDPR, and YouData has implemented all appropriate safeguards to guarantee our Users the compliance with the highest personal data protection standards and principles under the GDPR and other appropriate international regulation. 
                </p>

                <div className="w-100">
                    <p className="strong">
                        PLEASE READ THIS PRIVACY POLICY CAREFULLY AND CONTACT US WITH ANY QUESTIONS OR CONCERNS ABOUT OUR PRIVACY PRACTICES
                    </p>
                </div>

                <h2>
                    Use of cookies and other technologies
                </h2>

                <p>
                    We use cookie identifiers and other similar tracking technologies to allow you to take advantage of some of YouData's essential features. Cookies can be small data file sent from a server to your web browser that is stored in your browser cache. Cookies on our website are used to:
                    <ul>
                        <li>Recognizing your browser or device for security purposes and preventing fraudulent activity.</li>
                        <li>Recognizing you when you sign-in to use our website for cross-device tracking. This allows us to recognize your activity on YouData across multiple devices and browsers and track of items stored in your shopping basket.</li>
                        <li>Tracking of your activity in YouData allows us to discover what adverts you click on our website in order to show you related content or to limit the number of times of displaying such ads.</li>
                        <li>Attribution tracking allows us to estimate what advertising or marketing source you followed to come to YouData, and/or to determine what marketing source should get credit for actions like a visit or a purchase.</li>
                        <li>Researching how Users interact with our services (for example, statistical reports) allows us to improve the quality of YouData website.</li>
                    </ul>
                </p>

                <p>
                    YouData retains the right to cooperate with any third party (including search engines, providers of measurement and analytics services, social media networks, and advertising companies) which may use its own tracking technologies to provide certain services or features, including targeted online marketing techniques such as attribution tracking, remarketing, and cross-device tracking. Such third parties may provide us with some statistical information about you (for example, your interests, information on your devices etc.), which help us to improve the adverts shown each time you visit YouData.
                </p>
                
                <p>
                    YouData may include widgets from third-party websites and social networks, and third parties may choose to include YouData widgets on their websites. YouData, as well as the third party, may receive analytics from those widgets that may be used to enhance our data, to improve our services, or for marketing purposes. You can manage your privacy preferences for these widgets via your account with the third party.
                </p>

                <p>
                    Almost all browsers (Internet Explorer, Firefox, Chrome etc.) can suggest how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether. If you do not wish such information to be collected about you, please refer to the instructions of your browser.
                </p>

                <p>
                    Also you can disable or delete similar data used by browser add-ons, such as Flash cookies, by changing the add-on's settings or visiting the Web site of its manufacturer.
                </p>

                <div className="w-100">
                    <p className="strong">
                        PLEASE NOTE THAT IF YOU REJECT OR BLOCK ALL COOKIES IN YOUR BROWSER SETTINGS, YOU WILL NOT BE ABLE TO TAKE FULL ADVANTAGE OF YOUDATA’S SERVICES AS SOME COOKIES ARE NECESSARY FOR THE SITE TO FUNCTION PROPERLY.
                    </p>
                </div>

                <h2>
                    When do we share personal data?
                </h2>

                <p>
                    We always treat personal data confidentiality and do not disclose your personal data to other clients, organizations or individuals, if such disclosure is not necessary for provision of YouData services or conducting our business operations with you, as it is outlined in the purposes for processing of such data.
                </p>

                <p>
                    In addition to the disclosures outlined within this Privacy Policy, we may disclose information about you:
                    <ul>
                        <li>
                            to the extent that we are required to do so by law;
                        </li>
                        <li>
                            in connection with any legal proceedings or prospective legal proceedings;
                        </li>
                        <li>
                            in order to establish, exercise or defend our legal rights - including providing information to others for the purposes of fraud prevention and reducing credit risk;
                        </li>
                        <li>
                            to Youpal AB as a parent company; and
                        </li>
                        <li>
                            to third-parties in case of traffic measurement and/or advertising provider.
                        </li>
                    </ul>
                </p>

                <div className="w-100">
                    <p className="strong">
                        WE WILL NEVER SELL YOUR PERSONAL INFORMATION TO ANY THIRD PARTY.
                    </p>
                </div>
                
                <p>
                    In addition, we may share data with trusted partners to contact you based on your request to receive such communications, help us perform statistical analysis, or provide User support. Such third parties are prohibited from using your personal data except for these purposes, and they are required to maintain the confidentiality of your information. If you do not want us to share your personal data with these companies, contact us.
                </p>

                <p>
                    We employ other companies and people to provide services to visitors of our website, our Users, and users of the YouData services and may need to share your information with them to provide information, products or services to you. Examples may include analysing data, processing credit card payments, and providing User service. In all cases where we share your information with such agents, we explicitly require the agent to acknowledge and adhere to our privacy and User data handling policies.
                </p>

                <div className="mx-auto">
                    <PrivacyPagination />
                </div>
            </div>
        </form>
      </section>
    </div>
  )
}

export default PrivacyPolicy2Page
