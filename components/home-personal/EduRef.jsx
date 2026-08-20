import React from 'react';
import portfolioData from '@/data/portfolio-data.json';

function EduRef() {
  const { education, references } = portfolioData;

  return (
    <section className="eduref section-padding bg-img" id="education">
      <div className="container">
        <div className="row lg-marg">
          {/* Education Panel */}
          <div className="col-lg-6 mb-40">
            <div className="sub-bg p-5 radius-15 h-100 bord-thin-top">
              <div className="sec-head mb-30">
                <span className="sub-title main-color mb-5">Academic Background</span>
                <h4 className="fw-600">Education</h4>
              </div>
              <div className="item mb-20">
                <h5 className="fw-600 main-color mb-5">{education.degree}</h5>
                <h6 className="fz-16 p-color mb-10">{education.major}</h6>
                <p className="fz-14 p-color">{education.institution}</p>
              </div>
              <div className="border-top pt-20 mt-30">
                <h6 className="fw-600 mb-10">Languages Spoken</h6>
                <div className="d-flex gap-3">
                  {education.languages.map((lang, idx) => (
                    <span key={idx} className="tag border radius-30 px-3 py-1 mr-10">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* References Panel */}
          <div className="col-lg-6 mb-40">
            <div className="sub-bg p-5 radius-15 h-100 bord-thin-top">
              <div className="sec-head mb-30">
                <span className="sub-title main-color mb-5">Endorsements</span>
                <h4 className="fw-600">References</h4>
              </div>
              
              {references.map((ref, idx) => (
                <div key={idx} className={`item ${idx < references.length - 1 ? 'bord-thin-bottom pb-20 mb-20' : 'pt-10'}`}>
                  <h6 className="fw-600 main-color fz-18 mb-2">{ref.name}</h6>
                  <p className="fz-14 p-color mb-2">{ref.role}</p>
                  <p className="fz-14">
                    <a href={`mailto:${ref.email}`} className="main-color mr-15">✉ {ref.email}</a>
                    <a href={`tel:${ref.phone}`} className="p-color">📞 {ref.phone}</a>
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EduRef;
