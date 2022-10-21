import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';
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
              <small>2 Years</small>
            </article>

            <article className="about__card">
              <FiUser className="about__icons" />
              <h5>Projects Ongoing</h5>
              <small>2</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects Completed</h5>
              <small>5 </small>
            </article>
          </div>
          <p>
          Eyo Elijah is a passionate software engineer dedicated to solving problems 
          through technology by applying modern techniques to tackle real life problems
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
