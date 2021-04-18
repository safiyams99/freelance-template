import React from "react";
import { Link } from "react-router-dom";

import Profile from "../sections/client/Profile";
import ProfileDetail from "../sections/client/EmpProfileDetail";
import ClientData from "../data/client/Data";

import Img from "../img/can-2.png";
import bannerImg from "../img/banner-10.jpg";

export default function EmployerProfile() {
  return (
    <>
      <Profile
        bgImg={bannerImg}
        title="Employer Profilee"
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
