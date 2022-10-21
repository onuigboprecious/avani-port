import React from 'react';
import './footer.css';
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='bottom'>
      <ui className='permalinks'>
         <li><a href='#'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#experience'>Experience</a></li>
         <li><a href='#service'>Service</a></li>
         <li><a href='#portfolio'>Portfolio</a></li>
         <li><a href='#testimonials'>Testimonials</a></li>
         <li><a href='#contact'>Contact</a></li>
      </ui>

<div className='footer__socials'>

<a href='https://facebook.com/official.onuigboprecious/'><AiFillFacebook /></a>
<a href='https://twitter.com/preciousjame_z'><AiFillTwitterSquare /></a>
<a href='https://github.com/onuigboprecious'><AiFillGithub /></a>
  </div>
  <div className="footer__copyright">
    <small> &copy; Avani Technology, All Rights reserved.</small>
  </div>
      </footer>
  )

};

export default Footer;
