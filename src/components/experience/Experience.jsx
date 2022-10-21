import React from 'react';
import './experience.css';
import { GoVerified } from 'react-icons/go';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Exerience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
             <div>
             <h4>JavaScript</h4>
              <small className='text-light'>intermidate</small>
             </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
          </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
             <div>
             <h4>UI kit</h4>
              <small className='text-light'>intermidate</small>
             </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
              <div><h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
       {/* Backend section */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
              <div><h4>SQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="experience___details">
            <GoVerified className='experience__details-icon'/>
             <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="experience___details">
              <GoVerified className='experience__details-icon'/>
              <div><h4>CMS</h4>
              <small className='text-light'>intermidate</small>
              </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  );
};

export default Experience;
