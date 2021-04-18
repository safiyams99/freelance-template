import React from "react";

export default function FriendsCard(props) {
  return (
    <>
      <div class="col-md-4 col-sm-4">
        <div class="manage-cndt">
          <div class="cndt-status pending">{props.status}</div>
          <div class="cndt-caption">
            <div class="cndt-pic">
              <img src={props.img} class="img-responsive" alt="" />
            </div>
            <h4>{props.name}</h4>
            <span>{props.designation}</span>
            <p>{props.desc}</p>
          </div>
          <a href="#" title="" class="cndt-profile-btn">
            View Profile
          </a>
        </div>
      </div>
    </>
  );
}
