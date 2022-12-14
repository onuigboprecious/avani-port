import React from 'react';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://twitter.com/EyoElijah2" target="_blank">
        <AiFillTwitterSquare />{' '}
      </a>
      <a href="https://github.com/EyoElijah" target="_blank">
        {' '}
        <AiFillGithub />{' '}
      </a>
      <a href="https://web.facebook.com/elijah.eyo.71/" target="_blank">
        {' '}
        <AiFillFacebook />{' '}
      </a>
    </div>
  );
};

export default headerSocials;
