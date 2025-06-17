import React from 'react';
import bannerImg from '../../../assets/img/bannerImg.png';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="mt-8 w-[97%] mx-auto p-1">
      <Link to="/">
        {' '}
        <img
          src={bannerImg}
          alt="img"
          className="cursor-pointer w-full h-full"
        />
      </Link>
    </div>
  );
};

export default Banner;
