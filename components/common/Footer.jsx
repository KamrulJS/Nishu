import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function Footer() {
  const { hero } = portfolioData;

  return (
    <footer className="clean-footer" id="contact">
      <div className="container pb-10 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="fz-14 text-u fw-600 main-color mb-30" style={{ transform: 'none', letterSpacing: '1px' }}>Contact & Location</h6>
              <h6 className="p-color fw-400">{hero.location}</h6>
              <h6 className="mt-30 mb-15">
                <a href={`mailto:${hero.email}`}>{hero.email}</a>
              </h6>
              <a href={`tel:${hero.phone}`} className="underline">
                <span className="fz-22 main-color">{hero.phone}</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="fz-14 text-u fw-600 main-color mb-30" style={{ transform: 'none', letterSpacing: '1px' }}>Navigation</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="#skills">Skills</a>
                </li>
                <li className="mb-15">
                  <a href="#experience">Experience</a>
                </li>
                <li className="mb-15">
                  <a href="#clients">Clients</a>
                </li>
                <li>
                  <a href="#education">Education & References</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column">
              <h6 className="fz-14 text-u fw-600 main-color mb-30" style={{ transform: 'none', letterSpacing: '1px' }}>Connect</h6>
              <p className="mb-20 fz-14 p-color">
                Ready to grow your traffic and conversions? Let&apos;s map out your SEO & Meta Ads strategy.
              </p>
              <ul className="rest social-icon d-flex align-items-center flex-wrap gap-3">
                <li className="hover-this cursor-pointer mr-15">
                  <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className="hover-anim fz-20" title="LinkedIn">
                    <i className="fab fa-linkedin-in main-color"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer mr-15">
                  <a href={hero.facebook || "https://facebook.com"} target="_blank" rel="noopener noreferrer" className="hover-anim fz-20" title="Facebook">
                    <i className="fab fa-facebook-f main-color"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer mr-15">
                  <a href={hero.instagram || "https://instagram.com"} target="_blank" rel="noopener noreferrer" className="hover-anim fz-20" title="Instagram">
                    <i className="fab fa-instagram main-color"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer">
                  <a href={hero.twitter || "https://twitter.com"} target="_blank" rel="noopener noreferrer" className="hover-anim fz-20" title="Twitter (X)">
                    <i className="fab fa-twitter main-color"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-15 mt-40 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2026 {hero.name} {hero.surname} · {hero.eyebrow}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
