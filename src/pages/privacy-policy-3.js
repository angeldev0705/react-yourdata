import React from "react"
import SEO from "../components/seo"

import {Link} from "gatsby";

import PrivacyPagination from '../components/privacyPagination';

import "../scss/contactus.scss"
import "../scss/privacy.scss"

const PrivacyPolicy3Page = () => {
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
          
                <h2>How do we secure personal data?</h2>

                <p>
                    We will use all reasonable measures to protect your Personal Data from unauthorized access, alteration, disclosure or removal. We are equipped with the means of security and protection of your Personal Data.
                </p>

                <p>
                    Immediate access to your Personal Data is allowed only to us and persons authorized by us and involved in the maintenance of the Service. Such persons will strictly keep confidentiality of and prevent unauthorized third-party access to your Personal Data.
                </p>

                <h2>
                    How long do we keep your personal data for?
                </h2>

                <p>
                    We keep the information no longer than it is reasonably necessary. If you do not want to use our services, you can immediately delete your personal data by contacting us.
                </p>

                <p>
                    We reserve the right to keep information that is reasonably necessary when it is required to comply with applicable tax/revenue laws, resolve disputes, and enforce our agreements. We will delete this information as soon as such data become no needed but no later than 2 years.
                </p>

                <h2>
                    Your rights in relation to personal data
                </h2>

                <p>
                    We welcome that our Users have control over their own information. YouData gives you a choice of providing, editing or removing personal data, as well as choices about how we contact you. You may also remove certain optional information that you no longer wish to be publicly visible through the website, such as your full name.
                </p>

                <p>
                    You always have access to your personal information on YouData. If they are incorrect, we give a way to quickly change or delete them. This does not apply to cases where information is required for justified commercial or legal purposes.
                </p>

                <p>
                    We appreciate our clients, but we also appreciate their freedom of choice. You can withdraw your consent to our processing of your information and your use of the Website. You are able to do it at any time by sending an email on oleh.ch@youpal.se to request that your personal information be deleted.
                </p>

                <p>
                    You have the right to restrict the processing of your personal data for some purposes. When you have any objection to processing your personal data, you can do so by sending an email on oleh.ch@youpal.se.
                </p>

                <p>
                    We are able to provide you with a copy of all the personal data that we have regarding you, in electronic format. You always have the ability and capacity to export your personal data collected or stored digitally concerning you as our User by sending your request via email on <a href="mailto:hello@youpalgroup.com">hello@youpalgroup.com</a>.
                </p>

                <p>
                    If you reasonably believe that we are violating our responsibilities to protect your privacy, you have a right to lodge a complaint with a relevant supervisory authority.
                </p>

                <h2>
                    Information About minors
                </h2>

                <p>
                    The website is not intended for or targeted at minors under 18, and we do not knowingly or intentionally collect information about minors under 18. If you believe that we have collected information about a minor under 18, please contact us at hello@youpalgroup.com, so that we may delete the information.
                </p>

                <h2>
                    Linking to other websites / third party content
                </h2>

                <p>
                    Our website may provide links to other websites. We do not control, and are not responsible for, the content or practices of these other websites. Our provision of such links does not constitute our endorsement of these other websites, their content, their owners, or their practices. This Privacy Policy does not apply to these other websites, which are subject to any privacy and other policies they may have.
                </p>

                <h2>
                    Privacy Policy Changes
                </h2>

                <p>
                    We may update this Privacy Policy from time to time by posting a new version online. You should check this page occasionally to review any changes. If we make any material changes we will notify you by posting the revised Privacy Policy on our website and providing notice to your email. This helps you to always be aware of what information we collect, how we use it and under what circumstances, if any, it is disclosed. Your continued use of the website and YouData services, and/or continued provision of personal data to us you will be subject to the terms of the then-current Privacy Policy.
                </p>

                <h2>
                    Contact Us
                </h2>

                <p>
                    Please contact us if you have any questions regarding this Privacy Policy.
                    <br />
                </p>

                <p>
                    Post address: <br />
                    <span>
                        YouData Nordic AB <br />
                        Alströmergatan 36, <br />
                        11247 Stockholm,  <br />
                        Sweden
                    </span>
                </p>

                <p>
                    Email address: 
                    <a href="mailto:hello@youpalgroup.com">hello@youpalgroup.com</a>
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

export default PrivacyPolicy3Page
