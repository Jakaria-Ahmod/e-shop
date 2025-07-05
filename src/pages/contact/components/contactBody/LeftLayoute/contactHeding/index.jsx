import React from 'react';
import { Link, useLocation } from 'react-router';

const ContactHeding = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split('/').slice(1)[0];

  return (
    <section className="mb-[80px] p-5">
      <div>
        <div className="flex gap-3.5">
          <span className="text-colorFour font-montserrat text-base font-normal leading-[24px]">
            <Link to="/">Home</Link>
          </span>{' '}
          |{' '}
          <span className="text-colorFour font-montserrat text-base font-bold leading-[24px]">
            {pageName}
          </span>
        </div>
        <h1 className="font-poppins text-xl lg:text-[36px] font-semibold leading-[46px] text-colorFour mt-[48px]">
          Contact Us
        </h1>
        <p className="text-colorFour font-montserrat text-sm lg:text-[20px] font-normal leading-[24px] lg:mt-[12px]">
          Have any questions for us? Don’t hesitate to contact us.
        </p>
      </div>
    </section>
  );
};

export default ContactHeding;
