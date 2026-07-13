import React, { useEffect } from "react";
import "./detail.css";
import "../../App.css";
import { projectsData } from "../../components/work/Data";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  console.log(useParams);
  let { id } = useParams();
  let dataFilter = projectsData.filter((item) => item.id === +id)[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(projectsData);
  console.log(dataFilter);

  if (!dataFilter) {
    return (
      <section className="detail_body">
        <div className="detail_container" style={{ padding: "50px", textAlign: "center" }}>
          <h2>Project tidak ditemukan!</h2>
          <Link to="/" className="button button--flex" style={{ marginTop: "20px" }}>
            <i className="uil uil-arrow-left button__icon"></i> Back to Portofolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="detail_body">
      <div class="detail_container">
        <div class="details">
          <div class="content">
            <Link to="/" className="button button--flex" style={{ marginBottom: "2rem", width: "max-content" }}>
              <i className="uil uil-arrow-left button__icon"></i> Back to Portofolio
            </Link>
            <h2 className="section__title">{dataFilter.title}</h2>
            <h5 className="section__subtitle">{dataFilter.date_job}</h5>
            <h4 className="detail_subtitle section__description">
              {dataFilter.detail_job}
            </h4>
            <br />
            <div class="img-container">
              <img src={dataFilter.image_detail} className="detail_image" />
              <h4>{dataFilter.detail_job_2}</h4>
              <img src={dataFilter.image_detail2} className="detail_image" />
              <img src={dataFilter.image_detail3} className="detail_image" />
            </div>
            <br></br>
            <h5 className="section__subtitle">
              <a href={dataFilter.link} target="_blank" rel="noreferrer" className="button button--flex">
                {dataFilter.link_placeholder} <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </h5>
            <h5 className="section__subtitle">Language: {dataFilter.language}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
