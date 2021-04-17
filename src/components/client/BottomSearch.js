import React from "react";
import { Link } from "react-router-dom";

export default function BottomSearch() {
  return (
    <>
      <section class="bottom-search-form">
        <div class="container">
          <form class="bt-form">
            <div class="col-md-3 col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Skills, Designations, Keyword"
              />
            </div>
            <div class="col-md-3 col-sm-6">
              <input
                type="text"
                class="form-control"
                placeholder="Searc By location"
              />
            </div>
            <div class="col-md-3 col-sm-6">
              <select class="form-control">
                <option>By Category</option>
                <option>Information Technology</option>
                <option>Mechanical</option>
                <option>Hardware</option>
              </select>
            </div>
            <div class="col-md-3 col-sm-6">
              <button type="submit" class="btn btn-primary">
                Search Job
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
