import React from 'react';
import FooterLogo from '../../../assets/img/CompanyLogo.png';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { SlLocationPin } from 'react-icons/sl';
import { FooterListData } from './footerData';
import { Link } from 'react-router';
import pament1 from '../../../assets/payments/p1.png';
import pament2 from '../../../assets/payments/p2.png';
import pament3 from '../../../assets/payments/p3.png';
import pament4 from '../../../assets/payments/p4.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className="container mt-[100px] mb-[80px]">
        <div className="flex flex-col lg:flex-row min-h-[405px] gap-x-[167px]">
          <div className="lg:w-[550px] mb-[20px] lg:mb-0">
            <div>
              <img src={FooterLogo} alt="img" />
            </div>
            <div className="lg:mt-[158px]">
              <div className="flex items-center gap-x-[12px] mb-[12px]">
                <MdPhone color="#303030" className="opacity-50" />
                <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-x-[12px] mb-[12px]">
                <TfiEmail color="#303030" className="opacity-50" />
                <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
                  jakariaahmodmd@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-x-[12px]">
                <SlLocationPin color="#303030" className="opacity-50" />
                <span className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
                  123 Main Street, Suite 105, Anytown USA
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {FooterListData.map(Item => (
                <div key={Item}>
                  <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px]">
                    {Item.title}
                  </h3>
                  <div className="mt-[24px]">
                    {Item.footerList.map(Item => (
                      <div key={Item} className=" mb-[12px]">
                        <Link
                          to={Item.to}
                          className="text-colorFour font-montserrat text-base font-normal leading-[24px]"
                        >
                          {Item.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px]">
                  Payments
                </h3>
                <div className="flex items-center gap-x-[10px] lg:gap-x-[32px] mt-[25px] mb-[74px]">
                  <img src={pament1} alt="payments" />
                  <img src={pament2} alt="payments" />
                  <img src={pament3} alt="payments" />
                  <img src={pament4} alt="payments" />
                </div>
                <div>
                  <h3 className="text-colorFour font-poppins text-xl font-semibold block leading-[30px]">
                    Follow Us
                  </h3>
                  <div className="mt-[24px]">
                    <Link className="text-colorFour font-montserrat text-base block font-normal leading-[24px] mb-[12px]">
                      Twitter
                    </Link>
                    <Link className="text-colorFour font-montserrat text-base block font-normal leading-[24px] mb-[12px]">
                      Instagram
                    </Link>
                    <Link className="text-colorFour font-montserrat text-base block font-normal leading-[24px]">
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#303030] opacity-25"></div>
        <div className="flex flex-col lg:flex-row gap-y-[10px] lg:gap-y-0 items-center justify-between mt-[12px]">
          <span>Copyright © {year} E-Shop. All Rights Reserved.</span>
          <div className="flex items-center gap-x-[14px]">
            <span className="font-montserrat text-[14px] font-normal leading-[20px] opacity-75">
              Privacy{' '}
            </span>
            <span className="font-montserrat text-[14px] font-normal leading-[20px] opacity-75">
              |
            </span>
            <span className="font-montserrat text-[14px] font-normal leading-[20px] opacity-75">
              Terms & Condition
            </span>
            <span className="font-montserrat text-[14px] font-normal leading-[20px] opacity-75">
              |
            </span>
            <span className="font-montserrat text-[14px] font-normal leading-[20px] opacity-75">
              Policy Sitemap
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
