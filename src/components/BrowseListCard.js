import React from "react";

const BrowseListCard = ({ icon, heading, tag, price, jobtype, feature }) => {
  return (
    <>
      <div className="item-click">
        <article>
          <div className="brows-job-list">
            <div className="col-md-1 col-sm-2 small-padding">
              <div className="brows-job-company-img">
                <a href="job-detail.html">
                  <img src={icon} className="img-responsive" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-5">
              <div className="brows-job-position">
                <a href="job-apply-detail.html">
                  <h3>{heading}</h3>
                </a>
                <p>
                  <span>{tag}</span>
                  <span className="brows-job-sallery">
                    <i className="fa fa-money" />
                    {price}
                  </span>
                  <span className="job-type cl-success bg-trans-success">
                    {jobtype}
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker" />
                  QBL Park, C40
                </p>
              </div>
            </div>
            <div className="col-md-2 col-sm-2">
              <div className="brows-job-link">
                <a href="job-apply-detail.html" className="btn btn-default">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          {feature ? (
            <span className="tg-themetag tg-featuretag">Premium</span>
          ) : null}{" "}
        </article>
      </div>
    </>
  );
};

export default BrowseListCard;
