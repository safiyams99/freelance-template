import React from "react";

import Banner from "../../components/employee/Banner";
import CandidateProfile from "../../components/employee/CandidateProfile";

export default function App(props) {
  return (
    <>
      {/* <Banner /> */}
      <Banner bgImg={props.bgImg} title={props.title} />

      <CandidateProfile
        img={props.img}
        name={props.name}
        designation={props.designation}
        post={props.post}
        like={props.like}
        share={props.share}
      />
    </>
  );
}
