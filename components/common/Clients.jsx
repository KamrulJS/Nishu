'use client';
import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function Clients() {
  const { clients } = portfolioData;

  return (
    <section className="clients-carso section-padding" id="clients">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="sec-head text-center mb-50">
              <span className="sub-title main-color mb-5">Remote Work</span>
              <h3 className="fw-600 fz-40 text-u">
                Brands I&apos;ve Worked With <span className="fw-200">Remotely</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {clients.map((client, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-20">
              <div className="item sub-bg p-4 radius-30 text-center border">
                <h5 className="fw-600 fz-18">{client}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
