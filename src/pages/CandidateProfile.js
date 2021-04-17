import React from "react";
import { Link } from "react-router-dom";

import Profile from "../sections/employee/Profile";
import ProfileDetail from "../sections/employee/CandProfileDetail";
import ClientData from "../data/client/Data";

import Img from "../img/can-1.png";
import bannerImg from "../img/banner-10.jpg";

export default function CandProfile(props) {
  return (
    <>
      <Profile
        bgImg={bannerImg}
        title="Candidate Profilee"
        img={Img}
        name={ClientData[0].name}
        designation={ClientData[0].designation}
        post={ClientData[0].jobPost}
        like={ClientData[0].Liked}
        share={ClientData[0].jobShared}
      />
      <ProfileDetail />
    </>
  );
}
