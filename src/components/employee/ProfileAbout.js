import React from "react";

export default function ProfileAbout(props) {
  return (
    <>
      <div class="tab-pane fade in active">
        <h3>About {props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </>
  );
}
