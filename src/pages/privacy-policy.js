import React from "react"
import SEO from "../components/seo"

import {Link} from 'gatsby';

import PrivacyPagination from '../components/privacyPagination';

import "../scss/contactus.scss"
import "../scss/privacy.scss"

const PrivacyPolicyPage = () => {
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
          
        <h2>Introduction</h2>
            <p>
              YouData Nordic AB as an owner of “YouData.com” is providing you with this policy to clearly state how and why we use your personal data. It will also give you the options that are at your disposal in controlling the personal data shared with us. 
            </p>
            <div className="w-100">
              <p className="strong">
                PLEASE READ THIS PRIVACY POLICY CAREFULLY AND CONTACT US WITH ANY QUESTIONS OR CONCERNS ABOUT OUR PRIVACY PRACTICES
              </p>
            </div>
            <h2>Definitions</h2>
            <p>“Personal Data” or “Personal Information” means any information that identifies or can be used to identify an individual, directly or indirectly, including, but not limited to, name, email address and other personal information. 
              </p>
              <p>
              “Processing” of Personal Information means any operation or set of operations which is performed upon Personal Information, whether or not by automated means, such as collection, recording, organization, storage, adaptation or alteration, retrieval, consultation, use, disclosure or dissemination, and erasure or destruction.
              </p>
              <p>
              “Controller” is a person or organization which, alone or jointly with others, determines the purposes and means of the processing of Personal Information.
            </p>
<p>
“Users” is a person or organization that is authorized to use YouData.
</p>
<p>
“Youdata” or “Website” or “Platform” or “us” or “we” means a YouData Nordic AB, company registered and acting under the law of Sweden, registry code 559141-6101,with registered address Alströmergatan 36, 11247 Stockholm, Sweden.
</p>
<h2>Who are we?</h2>
            <p>
            YouData is committed to safeguarding the privacy of our Users. Any and all data submitted to YouData will be held and handled in accordance with GDPR regulations and this Privacy Policy.
            </p><p>Our registered office address is Alströmergatan 36, 11247 Stockholm, Sweden and is the address to which all formal communication should be addressed. 
</p>
<p>All formal communication and relevant enquiries related to this Privacy Policy and Personal Data Protection matters should be addressed to our Data Protection Officer - Oleh Chuchman, on the following e-mail: oleh.ch@youpal.se. 
</p>
<p>Our website address is <Link to="/">YouData.com</Link>
            </p>

<h2>What information do we collect? </h2>
            <p>
              YouData avoids collecting unnecessary personal data and follows the “data minimization” principle for data processing and retention. 
            </p>
            <p>
              Our dealings with our Users are based on: <br />
              <ul>
                <li>Contractual dealings in form of public offer as per Terms & Conditions on the website</li>
                <li>User’s explicitly consent for personal data processing in the form of a declaration (signed electronically) as a mandatory part of contact us for.</li>
              </ul>
              </p>
              <p>
                You hereby explicitly state that you provide authorization for YouData to use the personal data to fulfil obligations in respect of the scope of terms of use. <br />
              </p>
            <p>
            There is limited list of personal information from you as a User of YouData that we may collect: <br />
              <ul>
                <li>
                  Internet protocol (IP) address used to connect your computer to the Internet; <br />
                </li>
                <li>
                  e-mail address;
                </li>
                <li>
                  country; and
                </li>
                <li>
                  first and last name.
                </li>
              </ul>
            </p>

            <h2>How do we use personal information?</h2>
            <p>
            We not only respect your privacy - we also want to secure it.
            </p>
            <p>
              We use your information strictly according to the Terms & Conditions and Privacy Policy on the website and for one of the following purposes:  <br />
              <ul>
                <li>personalization of content, business information or user experience;</li>
                <li>responding to your requests;</li>
                <li>delivering marketing and events communication;</li>
                <li>carrying out polls and surveys;</li>
                <li>internal research and development purposes;</li>
                <li>providing YouData services;</li>
                <li>legal obligations (eg prevention of fraud);</li>
                <li>meeting internal audit requirements.</li>
              </ul>
            </p>
            <p>
            Also we inform you about cases, when the third person can request from us information your personal information:
              <ul>
                <li>in response to lawful requests by public authorities, including to meet legitimate national security or law enforcement requirements; <br /></li>
                <li>to protect, establish, or exercise our legal rights or defend against legal claims, including to collect a debt; to comply with a subpoena, court order, legal process, or other legal requirement; or</li>
                <li>when we believe in good faith that such disclosure is necessary to comply with the law, prevent imminent physical harm or financial loss, or investigate, prevent, or take action regarding illegal activities, suspected fraud, threats to our property, or violations of YouData Terms & Conditions.  <br /></li>
              </ul>
            </p>
            <p className="note">Please note that above mentioned lists are not exhaustive. We will record all purposes for which we process your personal data.</p>
        
            <div className="mx-auto">
              <PrivacyPagination />
            </div>
        </div>
        </form>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
