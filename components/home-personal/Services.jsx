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
              <div
                className="item sub-bg h-100 p-4 radius-10 position-relative"
                style={{
                  border: '1px solid rgba(255, 114, 58, 0.25)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ff723a';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 114, 58, 0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 114, 58, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="fz-30 mb-15">{skill.icon}</div>
                <h5 className="fw-500 fz-20 mb-12" style={{ fontSize: '20px' }}>{skill.title}</h5>
                <div className="text mt-15">
                  <p className="fz-14 p-color">{skill.desc}</p>
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
