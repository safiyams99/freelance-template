import React from "react";
import { Link } from "react-router-dom";

const SearchFilter = () => {
  return (
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="search-filter">
          <div className="col-md-4 col-sm-5">
            <div className="filter-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search…"
                />
                <span className="input-group-btn">
                  <button type="button" className="btn btn-default">
                    Go
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-7">
            <div className="short-by pull-right">
              Short By
              <div className="dropdown">
                <Link
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Dropdown
                  <i className="fa fa-angle-down" aria-hidden="true">
                    {" "}
                  </i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    {" "}
                    <Link href="#">Short By Date</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Short By Views</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#">Short By Popular</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
