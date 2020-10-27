import React from "react"
import { Link } from "gatsby"

import '../scss/pagination.scss';

const TermsPagination = () => {

  return (
    <div className="paginationComponent">
        <ul className="">
            <li>
                <Link to="/terms-and-conditions">
                    1
                </Link>
            </li>

            <li>
                <Link to="/terms-and-conditions-2">
                    2
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default TermsPagination;
