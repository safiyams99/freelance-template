import React from "react";

export default function ProfilePostArticle(props) {
  return (
    <>
      <article>
        <div class="mng-company">
          <div class="col-md-2 col-sm-2">
            <div class="mng-company-pic">
              <img src={props.img} class="img-responsive" alt="" />
            </div>
          </div>

          <div class="col-md-5 col-sm-5">
            <div class="mng-company-name">
              <h4>
                {props.companyName}{" "}
                <span class="cmp-tagline">{props.companyType}</span>
              </h4>
              <span class="cmp-time">10 Hour Ago</span>
            </div>
          </div>

          <div class="col-md-4 col-sm-4">
            <div class="mng-company-location">
              <p>
                <i class="fa fa-map-marker"></i> {props.address}
              </p>
            </div>
          </div>

          <div class="col-md-1 col-sm-1">
            <div class="mng-company-action">
              <a href="#">
                <i class="fa fa-edit"></i>
              </a>
              <a href="#">
                <i class="fa fa-trash-o"></i>
              </a>
            </div>
          </div>
        </div>
        {props.premium && (
          <span class="tg-themetag tg-featuretag">Premium</span>
        )}
      </article>
    </>
  );
}
