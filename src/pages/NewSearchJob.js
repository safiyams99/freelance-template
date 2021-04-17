import React from "react";
import { Link } from "react-router-dom";
import TitleBanner from "../components/client/TitleBanner";
import BottomSearch from "../components/client/BottomSearch";
import BrowseJobCategory from "../sections/client/BrowseJobCat";

import bannerImg from "../img/banner-10.jpg";

export default function NewSearchJob() {
  return (
    <>
      <TitleBanner
        img={bannerImg}
        title1="Work There."
        title2=" Find the dream job"
        jobs={704}
        days={7}
      />
      <BottomSearch />
      <BrowseJobCategory />
    </>
  );
}
