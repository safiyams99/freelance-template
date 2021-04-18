import React from "react";

const TitleBanner = (props) => {
  return (
    <>
      <section
        class="inner-header-title no-br advance-header-title"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div class="container">
          <h2>
            <span>{props.title1}</span> {props.title2}
          </h2>
          <p>
            <span>{props.jobs}</span> new job in the last{" "}
            <span>{props.days}</span> days.
          </p>
        </div>
      </section>
      <div class="clearfix"></div>
    </>
  );
};
export default TitleBanner;
