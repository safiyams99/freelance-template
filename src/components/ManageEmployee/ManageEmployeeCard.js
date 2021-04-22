import React from "react";
import { Link } from "react-router-dom";

const ManageEmployeeCard = ({ profile_image, name, position, links }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="jn-employee">
        <Link href="#" className="mail-form">
          <i className="fa fa-envelope"> </i>
        </Link>
        <div className="pull-right">
          <div className="btn-group action-btn">
            <button
              type="button"
              className="btn btn-default btn-xs dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v"> </i>
            </button>
            <ul className="dropdown-menu pull-right" role="menu">
              <li>
                {" "}
                <Link href="#">Favourite</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#">Edit</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#">Delete</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="employee-caption">
          <div className="employee-caption-pic">
            <img src={profile_image} className="img-responsive" alt="" />
          </div>
          <h4>{name}</h4>
          <span className="designation">{position}</span>
          <ul className="employee-social">
            {links.map((val) => {
              return (
                <li key={val}>
                  <Link href="#" title="">
                    <i className={val}> </i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ManageEmployeeCard;
