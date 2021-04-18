import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProfileAbout from "../../components/employee/ProfileAbout";
import ProfileAddress from "../../components/employee/ProfileAddress";
import ProfileFriends from "../../components/employee/ProfileFriends";
import ProfileMessage from "../../components/employee/ProfileMessage";
import ProfileMatchesJob from "../../components/employee/ProfileMatchesJob";
import ProfileSetting from "../../components/employee/ProfileSetting";

import Data from "../../data/employee/Data";

export default function App() {
  return (
    <>
      <Router>
        <section className="full-detail-description full-detail gray-bg">
          <div className="container">
            <div className="col-md-12 col-sm-12">
              <div className="full-card">
                <div className="deatil-tab-employ tool-tab">
                  <ul className="nav simple nav-tabs" id="simple-design-tab">
                    <li className="active">
                      <Link to="/candidateProfile">About</Link>
                    </li>
                    <li>
                      <Link to="/candidateProfile/address">Address</Link>
                    </li>
                    <li>
                      <Link to="/candidateProfile/matches-job">
                        Matches Job
                      </Link>
                    </li>
                    <li>
                      <Link to="/candidateProfile/friends">Friends</Link>
                    </li>
                    <li>
                      <Link to="/candidateProfile/messages">
                        Messages{" "}
                        <span className="info-bar">
                          {Data[0].messages.length}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/candidateProfile/settings">Settings</Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <Switch>
                      <Route exact path="/candidateProfile">
                        <ProfileAbout
                          name={Data[0].name}
                          desc={Data[0].description}
                        />
                      </Route>
                      <Route exact path="/candidateProfile/address">
                        <ProfileAddress
                          address={Data[0].location.Address}
                          city={Data[0].location.city}
                          state={Data[0].location.state}
                          country={Data[0].location.country}
                          zip={Data[0].location.zip}
                          phone={Data[0].phone}
                          fax={Data[0].fax}
                          email={Data[0].email}
                        />
                      </Route>
                      <Route exact path="/candidateProfile/matches-job">
                        <ProfileMatchesJob jobs={Data[0].jobPost} />
                      </Route>
                      <Route exact path="/candidateProfile/friends">
                        <ProfileFriends />
                      </Route>
                      <Route exact path="/candidateProfile/messages">
                        <ProfileMessage />
                      </Route>
                      <Route exact path="/candidateProfile/settings">
                        <ProfileSetting
                          fname={Data[0].fname}
                          mname={Data[0].mname}
                          lname={Data[0].lname}
                          address={Data[0].location.Address}
                          phone={Data[0].phone}
                          desig={Data[0].designation}
                          desc={Data[0].description}
                          email={Data[0].email}
                          zip={Data[0].location.zip}
                          state={Data[0].location.state}
                          country={Data[0].location.country}
                          city={Data[0].location.city}
                          company={Data[0].organization}
                        />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
}
