import React from 'react';
import './about.css';
import me from '../../assets/about-me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icons" />
              <h5>Clients</h5>
              <small>7+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>4+ Completed </small>
            </article>
          </div>
          <p>
            A Hard-working web developer with a flair for creating elegant
            solutions in the least amount of time. <br/> I Have colaborated in
            developing E-commerce website, Podcast streeming platform, Blogs, and
            Brand websites. <br/> I'm Passionate about Software Architecture and smart
            designs. Regular attendee of web developer's meetups.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
