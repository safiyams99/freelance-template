import React from "react";
import PostArticle from "./ProfileJobPostArticle";
import JobsPosted from "../../data/client/JobsPosted";

import image from "../../img/com-1.jpg";

export default function ProfilePostJob(props) {
  return (
    <>
      <div id="post-job" class="tab-pane fade in active">
        <h3>You have {props.jobs} job post</h3>
        <div class="row">
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          <PostArticle
            img={image}
            // img={JobsPosted[0].image}
            companyName={JobsPosted[0].companyDetail.name}
            companyType={JobsPosted[0].companyDetail.tagline}
            address={JobsPosted[0].companyDetail.loc}
            premium={JobsPosted[0].premium}
          />
          {/* })
                    } */}
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
