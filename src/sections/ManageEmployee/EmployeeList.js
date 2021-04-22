import React from "react";
import { Link } from "react-router-dom";
import SearchFilter from "../../components/ManageEmployee/SearchFilter";
import ManageEmployeeCard from "../../components/ManageEmployee/ManageEmployeeCard";

import { EData } from "../../data/employee/Data";

const EmployeeList = () => {
  return (
    <section className="manage-employee gray">
      <div className="container">
        <SearchFilter />
        <div className="row">
          {EData.map((employeeData, key) => {
            const { profile_image, name, position, links } = employeeData;
            return (
              <ManageEmployeeCard
                key={key}
                name={name}
                profile_image={profile_image}
                position={position}
                links={links}
              />
            );
          })}
        </div>
        <div className="row">
          <ul className="pagination">
            <li>
              {" "}
              <Link href="#">&laquo;</Link>
            </li>
            <li className="active">
              <Link href="#">1</Link>
            </li>
            <li>
              {" "}
              <Link href="#">2</Link>
            </li>
            <li>
              {" "}
              <Link href="#">3</Link>
            </li>
            <li>
              {" "}
              <Link href="#">4</Link>
            </li>
            <li>
              {" "}
              <Link href="#">
                <i className="fa fa-ellipsis-h"> </i>{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">&raquo;</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default EmployeeList;
