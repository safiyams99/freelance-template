import React from "react";
import MessageCard from "./MessageCard";

import Msgs from "../../data/employee/Messages";

export default function ProfileMessage() {
  return (
    <>
      <div id="messages" class="tab-pane fade in active">
        <div class="inbox-body inbox-widget">
          {Msgs.map((val, key) => {
            return val.messages.map((m, k) => {
              return (
                <MessageCard
                  id={k}
                  img={m.img}
                  sender={m.sender}
                  senderemail={m.senderemail}
                  recieveremail={m.recieveremail}
                  day={m.day}
                  time={m.time}
                  read={m.read}
                  message={m.message}
                />
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
