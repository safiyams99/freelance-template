import React from "react";
import HomeHeader from "../sections/Header"
import Footer from "../sections/Footer";
import Home from "./Home";
import BannerHeader from "../sections/ManageEmployeePage/BannerHeader";
import EmployeeList from "../sections/ManageEmployeePage/EmployeeList";


const ManageEmployee = () => {
    return (
        <div>
            <BannerHeader/>
            <EmployeeList/>
            <Footer />
        </div>
    );
};
export default ManageEmployee;
