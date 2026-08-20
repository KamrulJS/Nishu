import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function Experience() {
  const { experience } = portfolioData;

  return (
    <section className="resume section-padding" id="experience">
      <div className="container">
        <div className="sec-head mb-80">
          <span className="sub-title main-color mb-5">Career Flight Path</span>
          <h3 className="fw-600 fz-50 text-u">
            Work <span className="fw-200">Experience.</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {experience.map((xp, index) => (
              <div key={index} className="item bord-thin-bottom pb-40 mb-40">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="mb-20">
                      <span className="sub-title main-color fz-16 fw-600">{xp.period}</span>
                      <p className="fz-14 p-color">{xp.duration}</p>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="cont">
                      <h4 className="fw-600 mb-5">{xp.company}</h4>
                      <h6 className="main-color fw-500 mb-15">{xp.role}</h6>
                      <p className="mb-20 fz-16 p-color">{xp.desc}</p>
                      <div>
                        {xp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="tag mr-10 mb-5 border radius-30 px-3 py-1 fz-13">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
