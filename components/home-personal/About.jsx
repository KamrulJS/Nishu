import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function About() {
  const { hero, stats } = portfolioData;

  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt={`${hero.name} ${hero.surname}`} />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Me</h6>
              <div className="text">
                <h4 className="mb-30">
                  I&apos;m{' '}
                  <span className="fw-200">
                    Digital Marketing Team Manager
                  </span>{' '}
                  based in Dhaka, Bangladesh.
                </h4>
                <p>{hero.sub}</p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="col-md-6 col-6">
                        <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                          <div>
                            <h3 className="fw-300 mb-10 main-color">{stat.value}</h3>
                            <h6 className="p-color sub-title">{stat.label}</h6>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
