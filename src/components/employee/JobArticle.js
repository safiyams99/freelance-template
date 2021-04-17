import React from "react";
import { Link } from "react-router-dom";

export default function JobArticle(props) {
  return (
    <>
      <article class="advance-search-job">
        <div class="row no-mrg">
          <div class="col-md-6 col-sm-6">
            <a href="new-job-detail.html" title="job Detail">
              <div class="advance-search-img-box">
                <img src={props.img} class="img-responsive" alt="" />
              </div>
            </a>
            <div class="advance-search-caption">
              <a href="new-job-detail.html" title="Job Dtail">
                <h4>{props.jobTitle}</h4>
              </a>
              <span>{props.jobCompany}</span>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="advance-search-job-locat">
              <p>
                <i class="fa fa-map-marker"></i>
                {props.loc}
              </p>
            </div>
          </div>
          <div class="col-md-2 col-sm-2">
            {props.apply ? (
              <a href="#" class="btn applied advance-search" title="applied">
                <i class="fa fa-check" aria-hidden="true"></i>Applied
              </a>
            ) : (
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#apply-job"
                class="btn advance-search"
                title="apply"
              >
                Apply
              </a>
            )}
          </div>
        </div>
        {props.premium && (
          <span class="tg-themetag tg-featuretag">Premium</span>
        )}
      </article>
    </>
  );
}
