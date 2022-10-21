import React from 'react';
import './portfolio.css';
import { AiFillGithub } from 'react-icons/ai';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.jpeg';
import img3 from '../../assets/portfolio3.png';
import img4 from '../../assets/portfolio4.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: img1,
    title: 'Blogging And News Plateform',
    // github: 'github.com',
    demo: 'https://visblog.ng/',
  },
  {
    id: 2,
    image: img2,
    title: 'Business Portfolio Website',
    github: 'https://github.com/onuigboprecious/ginger-tarot',
    demo: 'https://renegadereadings.com',
  },
  {
    id: 3,
    image: img3,
    title: 'News And Lifestyle Blog',
    // github: 'https://github.com',
    demo: 'https://factual.com',
  },
  {
    id: 4,
    image: img4,
    title: 'SPA For An Accounting Firm',
    github: 'https://github.com/onuigboprecious/financial-',
    demo: 'https://financial9.netlify.com/',
  },
  {
    id: 5,
    image: img5,
    title: 'Multi Page Logistics Website',
    // github: 'https://github.com',
    demo: '#',
  },
  {
    id: 6,
    image: img6,
    title: ' Podcast Streaming plateform',
    github: 'https://github.com/onuigboprecious/app.podcast',
    demo: '#',
  },
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
