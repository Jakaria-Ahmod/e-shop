import React from 'react';
import bannerImg from '../../../assets/img/bannerImg.png';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="mt-8">
      <Link to="/">
        {' '}
        <img src={bannerImg} alt="img" className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Banner;
