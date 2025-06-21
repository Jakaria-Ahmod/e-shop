import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';

const ContactRightLayoute = () => {
  return (
    <section>
      <div className="p-5">
        <div className="xl:w-[594px] lg:h-[496px] bg-[#F4F4F4] rounded-md mt-[136px] p-[40px]">
          <h3 className="font-poppins text-colorFour text-[24px] font-semibold leading-[30px]">
            Let’s Keep in Touch!
          </h3>
          <p className="text-colorFour font-montserrat text-[15px] lg:text-[20px] font-normal leading-[24px] mt-[16px] pr-[20px]">
            We would love to hear from you. Contact us for any inquiries you
            might have for us.
          </p>
          <div>
            <div className="mt-[40px]">
              <div className="flex items-center gap-x-[12px] mb-[12px]">
                <FaPhone className="opacity-75" color="#303030" />
                <span className="font-montserrat text-sm lg:text-base leading-[24px] text-colorFour font-bold">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-x-[12px] mb-[12px]">
                <MdEmail className="opacity-75" color="#303030" />
                <span className="font-montserrat text-sm lg:text-base leading-[24px] text-colorFour font-bold">
                  jakariaahmodmd@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-x-[12px]">
                <IoLocationSharp className="opacity-75" color="#303030" />
                <span className="font-montserrat text-sm lg:text-base leading-[24px] text-colorFour font-bold">
                  123 Main Street, Suite 105, Anytown USA
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[56px]">
            <h5 className="text-colorFour font-montserrat text-[20px] font-bold leading-[30px]">
              Opening Hours
            </h5>
            <div className="w-[169px] h-[4px] bg-primary"></div>
            <div className="mt-[24px]">
              <div>
                <span className="font-montserrat text-sm lg:text-base font-bold leading-[24px] text-colorFour">
                  MON to FRI:
                </span>{' '}
                <span className="font-montserrat text-sm lg:text-base font-normal leading-[24px] text-colorFour">
                  08:00 AM - 04:00 PM
                </span>
              </div>
              <div className="mt-[8px]">
                <span className="font-montserrat text-sm lg:text-base font-bold leading-[24px] text-colorFour">
                  SAT to SUN:
                </span>{' '}
                <span className="font-montserrat text-sm lg:text-base font-normal leading-[24px] text-colorFour">
                  09:00 AM - 03:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactRightLayoute;
