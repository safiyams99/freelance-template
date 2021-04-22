import React from "react";
import Footer from "../sections/Footer";
import BannerHeader from "../sections/ManageEmployee/BannerHeader";
import EmployeeList from "../sections/ManageEmployee/EmployeeList";

const ManageEmployee = () => {
  return (
    <div>
      <BannerHeader />
      <EmployeeList />
      <Footer />
    </div>
  );
};
export default ManageEmployee;
