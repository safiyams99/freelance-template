import React from "react";

const Pagination = () => {
  return (
    <div className="row">
      <ul className="pagination">
        <li>
          <a href="#">«</a>
        </li>
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-ellipsis-h" />
          </a>
        </li>
        <li>
          <a href="#">»</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
