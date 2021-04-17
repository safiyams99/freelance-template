import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Banner from "../components/Banner";
import bgImg from "../img/banner-10.jpg";
import BrowseJobCategory from "../sections/BrowseJobCategory";
export default function BrowseJobs() {
  return (
    <>
      <Navbar />
      <Banner cname="inner-header-title" title="Browse Jobs" bgImg={bgImg} />
      <BrowseJobCategory />
      <Footer />
    </>
  );
}
