import React from "react"
import { Link } from "gatsby"

import '../scss/pagination.scss';

const PrivacyPagination = () => {

  return (
    <div className="paginationComponent">
        <ul className="">
            <li>
                <Link to="/privacy-policy">
                    1
                </Link>
            </li>

            <li>
                <Link to="/privacy-policy-2">
                    2
                </Link>
            </li>

            <li>
                <Link to="/privacy-policy-3">
                    3
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default PrivacyPagination
