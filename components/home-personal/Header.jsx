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
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-8">
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
                <div className="col-lg-10">
                  <div className="text mt-30">
                    <p>{hero.sub}</p>
                  </div>
                  <div className="d-flex align-items-center mt-40">
                    <a
                      href={`mailto:${hero.email}`}
                      className="butn butn-md butn-bord radius-30 mr-15"
                    >
                      <span className="text">Work With Me</span>
                    </a>
                    <a
                      href={hero.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">{hero.email}</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">{hero.phone}</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Location :</h6>
            <span className="p-color">{hero.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
