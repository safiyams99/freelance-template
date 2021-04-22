import React from "react";
import A from "../../img/banner-9.jpg";
const BannerHeader = () => {
  return (
    <div>
      <section
        className="inner-header-title"
        style={{ backgroundImage: `url(${A})` }}
      >
        <div className="container">
          <h1>Manage Employee</h1>
        </div>
      </section>
      <div className="clearfix"> </div>
    </div>
  );
};

export default BannerHeader;
