import React from "react";

export default function ProfileAddress(props) {
  return (
    <>
      <div id="address" class="tab-pane fade in active">
        <h3>Address Info</h3>
        <ul class="job-detail-des">
          <li>
            <span>Address:</span>
            {props.address}
          </li>
          <li>
            <span>City:</span>
            {props.city}
          </li>
          <li>
            <span>State:</span>
            {props.state}
          </li>
          <li>
            <span>Country:</span>
            {props.country}
          </li>
          <li>
            <span>Zip:</span>
            {props.zip}
          </li>
          <li>
            <span>Telephone:</span>
            {props.phone}
          </li>
          <li>
            <span>Fax:</span>
            {props.fax}
          </li>
          <li>
            <span>Email:</span>
            {props.email}
          </li>
        </ul>
      </div>
    </>
  );
}
