import React from "react";
import { Link } from "react-router-dom";
import SearchFilter from "../components/Freelancers2/SearchFilter";
import CompanyData from "../data/Data";
import SingleCompanyCard from "../components/SingleCompanyCard";
import Banner  from "../components/Banner";
import bannerImg from "../img/banner-10.jpg"

const BrowseCompanySection = () => {
    return(
        <>
            <Banner bgImg={bannerImg} title="Browse Company"/>
            <section className="browse-company">
                <div className="container">
                    <SearchFilter />
                    <>
                        {CompanyData.map((companyData, key) => {
                            const {name, tagline, profileImg, location, companyPosition} = companyData
                            return(
                                <SingleCompanyCard key={key} name={name} tagline={tagline} profileImg={profileImg}
                                location={location} companyPosition={companyPosition}/>
                            );
                        })}
                    </>

                    <div className="row">
                        <ul className="pagination">
                            <li><Link href="#">&laquo;</Link></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><Link href="#">2</Link></li>
                            <li><Link href="#">3</Link></li>
                            <li><Link href="#">4</Link></li>
                            <li><Link href="#"><i className="fa fa-ellipsis-h"></i></Link></li>
                            <li><Link href="#">&raquo;</Link></li>
                        </ul>
                    </div>

                </div>
            </section>
        </>
    );
}
export default BrowseCompanySection