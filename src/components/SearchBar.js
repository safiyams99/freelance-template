import React from 'react';

import BannerCard from "./BannerCard";

import A from "../img/microsoft-home.png"
import B from "../img/img-home.png"
import C from "../img/mothercare-home.png"
import D from "../img/paypal-home.png"
import E from "../img/serv-home.png"
import F from "../img/xerox-home.png"
import G from "../img/yahoo-home.png"
import H from "../img/mothercare-home.png"
import bannerbgImg from "../img/banner-9.jpg"

const SearchBar = () => {
    return (
      <>
        <div className="banner" style={{backgroundImage:`url(${bannerbgImg})`}}>
            <div className="container">
                <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>7,000+ Browse Jobs</h1>
                        <form className="form-horizontal">
                            <div className="col-md-4 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="joblist" placeholder="Skills, Designations, Companies"/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="location" placeholder="Search By Location.."/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <select id="choose-city" className="form-control">
                                        <option>Choose City</option>
                                        <option>Chandigarh</option>
                                        <option>London</option>
                                        <option>England</option>
                                        <option>Pratapcity</option>
                                        <option>Ukrain</option>
                                        <option>Wilangana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 no-padd">
                                <div className="input-group">
                                    <button type="submit" className="btn btn-primary">Search Job</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="company-brand">
                <div className="container">
                    <div id="company-brands" className="owl-carousel">

                        <BannerCard pic={A}/>
                        <BannerCard pic={B}/>
                        <BannerCard pic={C}/>
                        <BannerCard pic={D}/>
                        <BannerCard pic={E}/>
                        <BannerCard pic={F}/>
                        <BannerCard pic={G}/>
                        <BannerCard pic={H}/>

                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        </>
    )
}
export default SearchBar