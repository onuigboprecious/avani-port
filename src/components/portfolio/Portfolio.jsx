import React from 'react';
import './portfolio.css';
import { AiFillGithub } from 'react-icons/ai';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.png';
import img3 from '../../assets/portfolio3.png';
import img4 from '../../assets/portfolio4.png';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Hostel Booking App',
    // github: 'github.com',
    // demo: 'https://',
  },
  {
    id: 2,
    image: img2,
    title: 'Parcel Delivery App',
    // github: 'https://github.com/',
    // demo: 'https://',
  },
  {
    id: 3,
    image: img3,
    title: 'Yelp Camp',
    // github: 'https://github.com',
    // demo: 'https://',
  },
  {
    id: 4,
    image: img4,
    title: 'Chat App',
    // github: '',
    // demo: 'https://',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  <AiFillGithub />
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
