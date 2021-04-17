import React from "react";

export default function MessageCard(props) {
  return (
    <>
      <div class={"mail-card" + !props.read && "unread"}>
        <header
          class="card-header cursor-pointer collapsed"
          data-toggle="collapse"
          data-target={"#full-message" + props.id}
          aria-expanded="false"
        >
          <div class="card-title flexbox">
            <img
              class="img-responsive img-circle avatar"
              src={props.img}
              alt="..."
            />
            <div>
              <h6>{props.sender}</h6>
              <small>
                {props.day} at {props.time}
              </small>
              <small>
                <a
                  class="text-info collapsed"
                  href={"#detail-view" + props.id}
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  View Detail
                </a>
              </small>

              <div
                class="no-collapsing cursor-text collapse"
                id={"detail-view" + props.id}
                aria-expanded="false"
                style={{ height: 0 + "px" }}
              >
                <small class="d-inline-block">From:</small>
                <small>{props.senderemail}</small>
                <br />
                <small class="d-inline-block">To:</small>
                <small>{props.receiveremail}</small>
              </div>
            </div>
          </div>
        </header>
        <div
          class="collapse"
          id={"full-message" + props.id}
          aria-expanded="false"
          style={{ height: 0 + "px" }}
        >
          <div class="card-body">
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
