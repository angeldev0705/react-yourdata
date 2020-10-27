import React from "react"
import SEO from "../components/seo"

import {Link} from "gatsby";

import TermsPagination from '../components/termsPagination';

import "../scss/contactus.scss"
import "../scss/privacy.scss"

const TermsAndConditionsPage = () => {
  return (
    <div className="contactUs privacyPage my-5 pt-4 pt-md-0">
      <SEO
        title="Terms and Conditions"
        keywords={[`youpal`, `youpal group`, "youData", "youData contact"]}
      />
      <section className="container contactUsFormContainer my-5 pt-3">
        <div className="row">
          <div className="contactUsFormTitle">
            <h2 className="text-center text-white">
            Terms of Use
            </h2>
          </div>
        </div>
        <form
            action=""
            method="post"
            className="p-0 p-md-5 col-xl-10 offset-xl-1 bg-white text-left contactUsCard"
          >
        <div className="row mx-0 formWrapper">
          
          <h2>
            1. Introduction
          </h2>

          <p>
            YouData Nordic AB as an owner of “YouData.com” is providing you with these Terms of Use (hereinafter - “Terms”) to clearly outline the rules and regulations for the use of Youdata’s Website.
          </p>

          <p className="strong">
            PLEASE READ THIS PRIVACY POLICY CAREFULLY AND CONTACT US WITH ANY QUESTIONS OR CONCERNS ABOUT OUR PRIVACY PRACTICES
          </p>

          <p>
            By accessing this Website, you accept these terms and conditions in full. Your use of this Website constitutes your agreement to all these rules. Do not continue to use Youdata’s website if you do not accept all of the terms and conditions stated on this page. 
          </p>

          <h2>
            2. Definitions
          </h2>

          <p>
            “User” and“You” - the person accessing this Website and accepting Youdata’s terms and conditions. Any and all visitors to our Website shall be deemed as “users”.
          </p>

          <p>
            “Company”, “Youdata”, “We”, “Our” and “Us” - YouData Nordic AB, company registered and acting under the law of Sweden, registry code 559141-6101,with registered address Alströmergatan 36, 11247 Stockholm, Sweden.
          </p>

          <p>
            “Website” - set of various web pages operated and provided by the Company.
          </p>

          <h2>
            3. Description of Website
          </h2>

          <p>
            The purpose of this Website is to get the User acquainted with the information about services that Youdata provides, especially about secure storage platform for the information and advanced AI to efficiently customize and analyze the data. For avoidance of any doubt, services will be provided under separate agreement on services provision between the User and the Company that stipulates terms and conditions of cooperation.
          </p>

          <p>
            The User understands, acknowledges and agrees that the Website offered shall be provided “AS IS” and the Company shall not assume any responsibility or obligation for the timeliness, missed delivery, deletion and/or any failure to store user content, communication, personalization settings, etc.
          </p>

          <p>
            Furthermore, the User acknowledges and agrees that the Website provided and made available is the sole property of the Company. At its discretion, the Company may offer additional services or update, modify or revise any current content and services, and these Terms shall apply to any and all additional services, all updated, modified or revised unless otherwise stipulated. The Company does hereby reserve the right to cancel and cease offering any of the aforementioned services.
          </p>

          <h2>
            4. Intellectual Property
          </h2>

          <p>
            All right, title, and interest in and to Youdata, including our website, our existing or future applications, our APIs, databases, and the content our employees or partners submit or provide through our Services are and will remain the exclusive property of Youdata. The User is granted a limited license for viewing the material contained on this Website. The User may not use the site in any manner which could damage, disable, overburden or impair the Website or interfere with any other User’s use and enjoyment of the Website. The User may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided through the Website.
          </p>

          <h2>
            5. Service Rules and Conduct
          </h2>

          <p>
            This Website is provided for your own personal, non-commercial use and will make no other use of the Website without the express written permission of Youdata. You shall not use the Website for any purpose that is prohibited by these Terms, including but not limited to: 
            <ul>
              <li>
                Republish material from our website;
              </li>
              <li>
                Sell, rent or sub-license material from our website;
              </li>
              <li>
                Reproduce, duplicate or copy material or make available to the public in other way all content or any part of the content provided in the Website or from the emails and other messages from Youdata, if its is not expressly permit; 
              </li>
              <li>
                Redistribute content from Youdata Website (unless content is specifically made for redistribution);
              </li>
              <li>
                Circulate document or other work product generated by Youdata for marketing purposes;
              </li>
              <li>
                Access, tamper with, or use non-public areas of the platform (including content storage), Youdata computer systems, or the technical delivery systems of Youdata service providers;
              </li>
              <li>
                Disable, interfere with, or try to circumvent any of the features of the platforms related to security or probe, scan, or test the vulnerability of any of our systems;
              </li>
              <li>
                Copy, modify, create a derivative work of, reverse engineer, reverse assemble, or otherwise attempt to discover any source code of or content on Youdata platform or Services;
              </li>
              <li>
                Access or search or attempt to access or search our platform by any means (automated or otherwise) other than through our currently available search functionalities that are provided via our website, mobile apps, or API (and only pursuant to those API terms and conditions). You may not scrape, spider, use a robot, or use other automated means of any kind to access the Website;.
              </li>
              <li>
                In any way use the Website to send altered, deceptive, or false source-identifying information (such as sending email communications falsely appearing as Youdata); or interfere with, or disrupt, (or attempt to do so), the access of any user, host, or network, including, without limitation, sending a virus, overloading, flooding, spamming, or mail-bombing the platforms or services, or in any other manner interfering with or creating an undue burden on the Website; or
              </li>
              <li>
                Gain or attempt to gain unauthorized access to any accounts, computer systems, or networks connected to any connections server through hacking, password mining, or any other means.
              </li>
              <li>
                If a User will find the information on the Website to violate the copyright of any third party, the User must immediately inform Youdata. The information will then immediately be deleted upon request from the User, if Youdata find it to violate the copyright of a third party. 
              </li>
            </ul>
          </p>

          <h2>
            4.	Intellectual Property
          </h2>

          <p>
            Your personal data and all other information you provide to us we deal in accordance with our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>

          <p>
            Youdata guarantees your privacy and that all information held by us is not forwarded to a third party without your consent, unless otherwise provided by law or other legal decisions.
          </p>


          <div className="mx-auto">
            <TermsPagination />
          </div>
        
        </div>
        </form>
      </section>
    </div>
  )
}

export default TermsAndConditionsPage
