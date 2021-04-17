import React from "react";
import { Link } from "react-router-dom";

export default function SideWidget(props) {
  return (
    <>
      <div class="side-widget">
        <h2 class="side-widget-title">
          <a href={"#" + props.idname} data-toggle="collapse">
            {props.title}
            <i
              class="pull-right fa fa-angle-double-down"
              aria-hidden="true"
            ></i>
          </a>
        </h2>
        <div class="widget-text padd-0 collapse" id={props.idname}>
          <ul>
            {props.data.map((val, i) => {
              return (
                <li key={i}>
                  <span class="custom-checkbox">
                    <input type="checkbox" id={i} />
                    <label for={i}></label>
                  </span>
                  {val.name}
                  <span class="pull-right">{val.count}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
