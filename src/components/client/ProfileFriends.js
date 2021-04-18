import React from "react";
import ClientData from "../../data/client/Data";
import FriendsCard from "./FriendsCard";

import img1 from "../../img/can-1.png";
import img2 from "../../img/can-2.png";

export default function ProfileFriends() {
  return (
    <>
      <div id="friends" class="tab-pane fade in active">
        <div class="row">
          <FriendsCard
            name={ClientData[0].friends[0].name}
            // img={ClientData[0].friends[0].img}
            img={img1}
            designation={ClientData[0].friends[0].designation}
            desc={ClientData[0].friends[0].description}
            status={ClientData[0].friends[0].status}
          />
          <FriendsCard
            name={ClientData[0].friends[1].name}
            // img={ClientData[0].friends[1].img}
            img={img2}
            designation={ClientData[0].friends[1].designation}
            desc={ClientData[0].friends[1].description}
            status={ClientData[0].friends[1].status}
          />
          <FriendsCard
            name={ClientData[0].friends[0].name}
            // img={ClientData[0].friends[0].img}
            img={img1}
            designation={ClientData[0].friends[0].designation}
            desc={ClientData[0].friends[0].description}
            status={ClientData[0].friends[0].status}
          />
          <FriendsCard
            name={ClientData[0].friends[1].name}
            // img={ClientData[0].friends[1].img}
            img={img2}
            designation={ClientData[0].friends[1].designation}
            desc={ClientData[0].friends[1].description}
            status={ClientData[0].friends[1].status}
          />
          <FriendsCard
            name={ClientData[0].friends[0].name}
            // img={ClientData[0].friends[0].img}
            img={img1}
            designation={ClientData[0].friends[0].designation}
            desc={ClientData[0].friends[0].description}
            status={ClientData[0].friends[0].status}
          />
          <FriendsCard
            name={ClientData[0].friends[1].name}
            // img={ClientData[0].friends[1].img}
            img={img2}
            designation={ClientData[0].friends[1].designation}
            desc={ClientData[0].friends[1].description}
            status={ClientData[0].friends[1].status}
          />
          <FriendsCard
            name={ClientData[0].friends[0].name}
            // img={ClientData[0].friends[0].img}
            img={img1}
            designation={ClientData[0].friends[0].designation}
            desc={ClientData[0].friends[0].description}
            status={ClientData[0].friends[0].status}
          />
          <FriendsCard
            name={ClientData[0].friends[1].name}
            // img={ClientData[0].friends[1].img}
            img={img2}
            designation={ClientData[0].friends[1].designation}
            desc={ClientData[0].friends[1].description}
            status={ClientData[0].friends[1].status}
          />
          <FriendsCard
            name={ClientData[0].friends[0].name}
            // img={ClientData[0].friends[0].img}
            img={img1}
            designation={ClientData[0].friends[0].designation}
            desc={ClientData[0].friends[0].description}
            status={ClientData[0].friends[0].status}
          />

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
      </div>
    </>
  );
}
