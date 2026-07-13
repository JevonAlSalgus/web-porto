import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title"> Qualification </h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content qualification_content-active">

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Computer Engineering</h3>
                <span className="qualification_subtitle">
                  {" "}
                  Andalas University
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2021 - 2026
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Packet Systems Indonesia
                </h3>
                <span className="qualification_subtitle">
                  Network Engineer Intern (Post-Sales)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Jan 2024 - Feb 2024
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Equipment Division Coordinator
                </h3>
                <span className="qualification_subtitle">CORE3D Committee</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Jan 2024 - May 2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  PT Hartono Istana Teknologi (Polytron)
                </h3>
                <span className="qualification_subtitle">
                  IC Design Engineer Intern
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Sep 2024 - Dec 2024
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">ALTO Network</h3>
                <span className="qualification_subtitle">IT Operation Center</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 15 April 2026 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
