import React from "react";
import "./detail.css";
import "../../App.css";
import Works2 from "../work/Works2";
// import MyWork1 from "../../assets/mywork1.png";

const projectsData = [
  // {
  //   id: 1,
  //   image: MyWork1,
  //   title: "Project Title",
  //   category: "data science",
  //   detail_job: "Project description goes here...",
  //   date_job: "April 2024",
  //   image_detail: MyWork1,
  //   language: "Python",
  // },
];

const DataScience = () => {
  return (
    <section className="detail_body">
      <Works2 projectsData={projectsData} />
    </section>
  );
};
export default DataScience;
