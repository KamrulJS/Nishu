import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function Services() {
  const { skills } = portfolioData;

  return (
    <section className="services-clas" id="skills">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">What I Do</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Skills & <span className="fw-200">Expertise.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-30">
              <div className="item sub-bg h-100 p-4 radius-10">
                <div className="fz-30 mb-15">{skill.icon}</div>
                <h5 className="fw-500 fz-20 mb-12" style={{ fontSize: '20px' }}>{skill.title}</h5>
                <div className="text mt-15">
                  <div className="mb-15">
                    {skill.tags.map((t, idx) => (
                      <span key={idx} className="tag mr-5 mb-5">{t}</span>
                    ))}
                  </div>
                  <p className="fz-14">{skill.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
