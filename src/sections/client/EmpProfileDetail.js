import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProfileAbout from "../../components/client/ProfileAbout";
import ProfileAddress from "../../components/client/ProfileAddress";
import ProfileFriends from "../../components/client/ProfileFriends";
import ProfileMessage from "../../components/client/ProfileMessage";
import ProfilePostJob from "../../components/client/ProfilePostJob";
import ProfileSetting from "../../components/client/ProfileSetting";

import ClientData from "../../data/client/Data";

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
                      <Link to="/employerProfile">About</Link>
                    </li>
                    <li>
                      <Link to="/employerProfile/address">Address</Link>
                    </li>
                    <li>
                      <Link to="/employerProfile/post-job">Job Posted</Link>
                    </li>
                    <li>
                      <Link to="/employerProfile/friends">Friends</Link>
                    </li>
                    <li>
                      <Link to="/employerProfile/messages">
                        Messages{" "}
                        <span className="info-bar">
                          {ClientData[0].messages.length}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/employerProfile/settings">Settings</Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <Switch>
                      <Route exact path="/employerProfile">
                        <ProfileAbout
                          name={ClientData[0].name}
                          desc={ClientData[0].description}
                        />
                      </Route>
                      <Route exact path="/employerProfile/address">
                        <ProfileAddress
                          address={ClientData[0].location.Address}
                          city={ClientData[0].location.city}
                          state={ClientData[0].location.state}
                          country={ClientData[0].location.country}
                          zip={ClientData[0].location.zip}
                          phone={ClientData[0].phone}
                          fax={ClientData[0].fax}
                          email={ClientData[0].email}
                        />
                      </Route>
                      <Route exact path="/employerProfile/post-job">
                        <ProfilePostJob jobs={ClientData[0].jobPost} />
                      </Route>
                      <Route exact path="/employerProfile/friends">
                        <ProfileFriends />
                      </Route>
                      <Route exact path="/employerProfile/messages">
                        <ProfileMessage />
                      </Route>
                      <Route exact path="/employerProfile/settings">
                        <ProfileSetting
                          fname={ClientData[0].fname}
                          mname={ClientData[0].mname}
                          lname={ClientData[0].lname}
                          address={ClientData[0].location.Address}
                          phone={ClientData[0].phone}
                          desig={ClientData[0].designation}
                          desc={ClientData[0].description}
                          email={ClientData[0].email}
                          zip={ClientData[0].location.zip}
                          state={ClientData[0].location.state}
                          country={ClientData[0].location.country}
                          city={ClientData[0].location.city}
                          company={ClientData[0].organization}
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
