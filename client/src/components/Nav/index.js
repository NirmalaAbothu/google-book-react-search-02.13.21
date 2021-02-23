import React from "react";

import { Link, useLocation } from "react-router-dom";

//Nav function

function Nav() {
     const location = useLocation();
     return (
          <ul
               className="nav nav-tabs"
               style={{ backgroundColor: "lightblue", marginBottom: "50px" }}
          >
               <li className="nav-item">
                    <Link
                         to="/"
                         className={
                              location.pathname === "/"
                                   ? "nav-link active"
                                   : "nav-link"
                         }
                    >
                         Google Books
                    </Link>
               </li>
               <li className="nav-item">
                    <Link
                         to="/saved"
                         className={
                              location.pathname === "/saved"
                                   ? "nav-link active"
                                   : "nav-link"
                         }
                    >
                         Saved
                    </Link>
               </li>
               <li className="nav-item">
                    <Link
                         to="/search"
                         className={
                              location.pathname === "/search"
                                   ? "nav-link active"
                                   : "nav-link"
                         }
                    >
                         Search
                    </Link>
               </li>
          </ul>
     );
}

export default Nav;
