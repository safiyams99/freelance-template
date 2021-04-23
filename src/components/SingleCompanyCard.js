import React from "react";
import { Link } from "react-router-dom";

const SingleCompanyCard = ({name,tagline,logo,location,companyPosition}) => {
    return(
        <>
            <div className="item-click">
                <article>
                    <div className="brows-company">
                        <div className="col-md-2 col-sm-2">
                            <div className="brows-company-pic">
                                <img src={logo} className="img-responsive" alt=""/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="brows-company-name">
                                <Link href="company-detail.html"><h4>{name}</h4></Link>
                                <span className="brows-company-tagline">{tagline}</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="brows-company-location">
                                <p><i className="fa fa-map-marker"></i> {location}</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2">
                            <div className="brows-company-position">
                                <p>{companyPosition} Opening</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
export default SingleCompanyCard;