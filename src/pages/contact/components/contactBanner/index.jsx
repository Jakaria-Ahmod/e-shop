import React from 'react';
import contactBanner from '../../../../assets/img/contactBanner.png';
import { Link } from 'react-router';

const ContactBanner = () => {
  return (
    <div>
      <section>
        <div className="mt-[80px] mb-[100px] p-5">
          <div className="max-w-[1520px] h-[531px] overflow-hidden rounded-[25px]">
            <Link to="prodact">
              <img
                src={contactBanner}
                alt="contact Banner"
                className="w-full h-full lg:object-cover"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBanner;
