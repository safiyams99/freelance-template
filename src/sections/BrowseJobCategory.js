import React from "react";
import SearchFilter from "../components/SearchFilter";
import BrowseList from "../sections/BrowseList";
import Pagination from "../components/Pagination";
const BrowseJobCategory = () => {
  return (
    <section className="brows-job-category">
      <div className="container">
        <SearchFilter />
        <BrowseList />
        <Pagination />
      </div>
    </section>
  );
};
export default BrowseJobCategory;
