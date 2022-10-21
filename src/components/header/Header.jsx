import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import Scroll  from './Scroll';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey,</h5>
        <h1>I'm Eyo Elijah</h1>
        <h5 className="text-light">A Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <Scroll />
        <div className="me">
          <img src={me} alt="a photo of my self" />
        </div>
      </div>
    </header>
  );
};

export default Header;
