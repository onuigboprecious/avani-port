import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';

const Service = () => {
  return (
    <section id="service">
      <h5>what I Offer</h5>
      <h2>services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>scalable website designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icons" />
              <p>ui/ux designs with figma, adobe photoshop, illustrator.</p>
            </li>
          </ui>
        </article>
        {/* end of social medai Manager */}

        <article className="service">
          <div className="service__head">
            <h3>SEO</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>
                search engine optimizations and integrations for better search
                optimizations
              </p>
            </li>
          </ui>
        </article>
        {/* end of web developer */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icons" />
              <p>website developments and integrations with subsystems and architectures</p>
            </li>
          </ui>
        </article>
      </div>
    </section>
  );
};

export default Service;
