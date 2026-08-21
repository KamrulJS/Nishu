'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import portfolioData from '@/data/portfolio-data.json';

function Header() {
  const { hero } = portfolioData;

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/nishu.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>
                {hero.eyebrow}
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m {hero.name} <span className="main-color">{hero.surname}</span>
              </h1>
              <h3>{hero.headline}</h3>
              <div className="row">
                <div className="col-lg-11">
                  <div className="text mt-30">
                    <p>{hero.sub}</p>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3 mt-40">
                    <a
                      href={`mailto:${hero.email}`}
                      className="butn butn-md butn-bg main-colorbg radius-30 mr-15 mb-10"
                    >
                      <span className="text">Work With Me</span>
                    </a>
                    <a
                      href={hero.worksDrive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="butn butn-md butn-bord radius-30 mb-10"
                    >
                      <span className="text">View Previous Works 📁</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
        <div className="info d-flex align-items-center justify-content-between mt-80 flex-wrap">
          <div className="item mb-15">
            <h6 className="sub-title mb-5">Email :</h6>
            <span className="p-color">{hero.email}</span>
          </div>
          <div className="item mb-15">
            <h6 className="sub-title mb-5">Phone :</h6>
            <span className="p-color">{hero.phone}</span>
          </div>
          <div className="item mb-15">
            <h6 className="sub-title mb-5">Location :</h6>
            <span className="p-color">{hero.location}</span>
          </div>
          <div className="item mb-15">
            <h6 className="sub-title mb-5">Social Connect :</h6>
            <div className="social-icon d-flex align-items-center gap-3 mt-5">
              <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover-anim p-color mr-15 fz-18">
                <i className="fab fa-linkedin-in main-color"></i>
              </a>
              <a href={hero.facebook || "https://facebook.com"} target="_blank" rel="noopener noreferrer" title="Facebook" className="hover-anim p-color mr-15 fz-18">
                <i className="fab fa-facebook-f main-color"></i>
              </a>
              <a href={hero.instagram || "https://instagram.com"} target="_blank" rel="noopener noreferrer" title="Instagram" className="hover-anim p-color mr-15 fz-18">
                <i className="fab fa-instagram main-color"></i>
              </a>
              <a href={hero.twitter || "https://twitter.com"} target="_blank" rel="noopener noreferrer" title="Twitter" className="hover-anim p-color fz-18">
                <i className="fab fa-twitter main-color"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
