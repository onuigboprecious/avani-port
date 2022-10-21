import React from 'react';
import './service.css';
import {BiCheck} from 'react-icons/bi' 

const Service = () => {
  return (
<section id="service">
<h5>what I Offer</h5>
<h2>services</h2>

<div className='container service__container'>
  <article className='service'>
<div className='service__head'>
  <h3>Social Media Management</h3>
  </div>
  <ui className='service__list'>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Analyzing Company's Engagement Data </p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Identifying Trends In Customer Interactions</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Digital Campaigns To Build Community</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Overseeing A Company's Interactions With The Public</p>
    </li>
  </ui>
  </article>
  {/* end of social medai Manager */}

  <article className='service'>
<div className='service__head'>
  <h3>Software Development</h3>
  </div>
  <ui className='service__list'>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Writing Well Designed, Testable, Efficient Code By Using Best Software Development Practices</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Creating Website Layout And User Interfaces By Using Standard Practices </p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Gather And Refine Specifications And Requirements Based On Technical Needs</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Cooperate With Web Designers To Match Visual Design Intent</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Determining The Structure And Design Of Web Pages</p>
    </li>
  </ui>
  </article>
  {/* end of web developer */}

  <article className='service'>
<div className='service__head'>
  <h3>Content Creation </h3>
  </div>
  <ui className='service__list'>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Writing Blog Posts About Industry Related Topics </p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Producing Marketing Copy To Advertise Brands Products</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Prepare Well Structured Drafts Using Digital Publishing Platforms</p>
    </li>
    <li>
      <BiCheck className="service__list-icons"/>
      <p>Conduct Keyword Research And Use SEO Guidelines To Optimize Content</p>
    </li>
  </ui>
  </article>

</div>
</section>
  )
};

export default Service;
