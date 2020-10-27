import React from "react"
import SEO from "../components/seo"

import {Link} from "gatsby";

import TermsPagination from '../components/termsPagination';

import "../scss/contactus.scss"
import "../scss/privacy.scss"

const TermsAndConditions2Page = () => {
  return (
    <div className="contactUs privacyPage my-5 pt-4 pt-md-0 ">
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
                7. Limitation of Liability
            </h2>

            <p>
                The information and software provided in the Website may include inaccuracies or typographical errors and changes are therefore periodically added by Youdata or its suppliers to the information herein.
            </p>

            <p>
                Youdata make every effort to ensure that its computer infrastructure is error- and virus-free but does not warrant that any material available for downloading from the service will be free from infection, viruses and/ or other code that has contaminating or destructive properties. The User is responsible for implementing sufficient procedures and virus checks (including anti-virus and other security checks) to satisfy its particular requirements for the accuracy of data input and output.
            </p>

            <p>
                To the maximum extent, permitted by applicable law, in no event, shall Youdata and/or its suppliers be liable for any direct, indirect, punitive, incidental, special or consequential damages, or any damages whatsoever arising out of or in any way connected to the use or performance of the Website, including but not limited to:
            
                <ul>
                    <li>
                        loss of revenue;
                    </li>
                    <li>
                        loss of business;
                    </li>
                    <li>
                        loss of opportunity;
                    </li>
                    <li>
                        loss of anticipated savings;
                    </li>
                    <li>
                        loss of goodwill;
                    </li>
                    <li>
                        loss of reputation;
                    </li>
                    <li>
                        loss or damage to or corruption of data;
                    </li>
                    <li>
                        loss of use of money or otherwise,
                    </li>
                </ul>
            </p>

            <p>
                We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <p>
                Our website may contain links to third party’s websites or services but we shall not be liable for any usage in connection with the content and links supplied by third parties. You may use these websites and services but you agree that we have no responsibility for any results of this using. Users must understand that it is their own risk and liability. Third parties may use their own terms and conditions Users need to accept for using the services. Any advice, offers, opinions, statements or any other content expressed or made available by third parties, including information providers or Users are those of the authors or distributors and not of us. We are not responsible or reliable for any content supplied by third parties on such service.
            </p>

            <p>
                Youdata’s liability shall be limited in accordance with the below terms and conditions. In specific circumstances and in respect of certain matters, or parts thereof, Youdata may apply additional limitations. If Youdata has informed the client about such additional limitations before the initiation of a matter, or a part of a matter for which that limitation applies, that limitation shall apply in addition to the below limitations.
            </p>

            <h2>
                8. Miscellaneous
            </h2>

            <p>
                The User agrees to indemnify and hold harmless Youdata for any losses, liabilities, expenses, costs and damages arising or resulting from the Users ability or inability to use the Website. Youdata is further held harmless for any liability arising from violations of any terms of these Terms, rights of third parties or any applicable laws, rules or regulations made by the User or any third party.
            </p>

            <p>
                These Terms may be amended by us from time to time. Amendments will become effective only in relation to engagements initiated after the amended version was published on our website.
            </p>

            <p>
                If any provision of these Terms is held invalid or unenforceable by court, the remaining provisions of these Terms will not be affected.
            </p>

            <p>
                These Terms will be governed by and interpreted under the laws of Sweden. In the event of any dispute arising between the parties regarding these Terms in respect of or in connection with these Terms (including, but not limited to, the validity, breach or termination of these Terms), the parties shall, firstly resolve such issues through the means of mutual negotiations and consultations expediently. If such negotiations are unsuccessful the dispute shall be solved by civil or criminal proceedings according to Swedish law. The forum for such dispute resolution shall be Stockholms Tingsrätt.
            </p>

            <p>
                The User of the Website acknowledges that it has entered into this agreement solely in reliance on its own judgement and legal capacity.
            </p>

            <h2>
                9. How to Contact Us
            </h2>

            <p>
                The best way to get in touch with us is to contact us at <a href="mailto:hello@youpalgroup.com">hello@youpalgroup.com</a>. We’d love to hear your questions, concerns and feedback about our Services. 
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

export default TermsAndConditions2Page
