import React from "react";
import "./detail.css";
import "../../App.css";
import Works2 from "../work/Works2";

const projectsData = [
  // {
  //   id: 5,
  //   image: MyWork1,
  //   title: "Project Title",
  //   category: "web design",
  //   detail_job: "Description goes here",
  //   date_job: "February 2024",
  //   image_detail: MyWork1,
  //   language: "Javascript",
  //   link: "https://yourlink.com",
  //   link_placeholder: "Game Link",
  // },
];

const Timedoor = () => {
  return (
    <section className="detail_body">
      <Works2 projectsData={projectsData} />
    </section>
  );
};
export default Timedoor;
