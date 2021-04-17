import React from "react";
import JobArticle from "./JobArticle";
import JobsPosted from "../../data/client/JobsPosted";

import img from "../../img/com-2.jpg";

export default function ProfileMatchesJob(props) {
  return (
    <>
      <div id="post-job" class="tab-pane fade in active">
        <h3>Matches-job {props.jobs} new job </h3>
        <div class="row">
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
          <JobArticle
            img={img}
            jobTitle={JobsPosted[0].jobtitle}
            premium={JobsPosted[0].premium}
            jobCompany={JobsPosted[0].companyDetail.name}
            loc={JobsPosted[0].companyDetail.loc}
            apply={JobsPosted[0].applied}
          />
        </div>
        <div class="row">
          <ul class="pagination">
            <li>
              <a href="#">«</a>
            </li>
            <li class="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-ellipsis-h"></i>
              </a>
            </li>
            <li>
              <a href="#">»</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
