import React from 'react';
import './AboutMe.css';
import ContactMe from '../ContactMe/ContactMe';
import { aboutMeText } from '../../../myInfo';

// created two subcomponents: AboutMeInfo and AboutMeContact
const AboutMeInfo = ({ infotext, power_slogan }) => (
  <div className="cta-content">
    <h2 className="wow fadeInUp" data-wow-delay=".2s">About me:</h2>
    <p className="wow fadeInUp" data-wow-delay=".4s">
      <hr /> {infotext} <hr />
      <h2>{power_slogan}</h2>
    </p>
  </div>
);

const AboutMeContact = () => (
  <div className="contact-sidebar">
    <ContactMe />
  </div>
);

// added AboutMe subcomponent
const AboutMe = () => {
  const { infotext, power_slogan } = aboutMeText;

  return (
    <section id="AboutMe" className="section About">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <AboutMeInfo infotext={infotext} power_slogan={power_slogan} />
          </div>
          <div className="col-lg-6 col-md-12">
            <AboutMeContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



