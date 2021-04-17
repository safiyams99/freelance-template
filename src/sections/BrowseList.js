import React from "react";
import BrowseListCard from "../components/BrowseListCard";
import BrowseJobData from "../data/BrowseJobData";
const BrowseList = () => {
  return (
    <>
      {BrowseJobData.map((data) => {
        const { icon, heading, tag, price, jobtype, feature } = data;
        return (
          <BrowseListCard
            key={heading}
            icon={icon}
            heading={heading}
            tag={tag}
            price={price}
            jobtype={jobtype}
            feature={feature}
          />
        );
      })}
    </>
  );
};
export default BrowseList;
