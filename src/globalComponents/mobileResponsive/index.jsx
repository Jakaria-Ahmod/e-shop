import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/svg/Logo';
import { useTranslation } from 'react-i18next';
import { CiSearch, CiUser } from 'react-icons/ci';
import { RxHamburgerMenu } from 'react-icons/rx';
import CoustomDrawer from '../coustomDrawer';
import MobileitemLlist from './mobileitemLlist';
import SosalCourncy from '../HeaderComponents/topBar/SosalCourncy';
import ShcarceWithCart from '../HeaderComponents/middleBar/ShcarceWithCart';
import { IoCartOutline } from 'react-icons/io5';

const MoblieResponsive = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="p-2 mt-2">
        <div className="flex gap-x-[15px] justify-between items-center">
          <div>
            <Link to="/">
              <Logo width={80}></Logo>
            </Link>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between w-[200px] border py-[5px] px-[15px] rounded">
                <input
                  type="text"
                  placeholder={t('Search Products ...')}
                  className="border-none outline-none"
                />
                <Link className="relative">
                  <CiSearch className="absolute -top-[7px] right-[10px]" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <RxHamburgerMenu
              className="mr-2.5 cursor-pointer"
              size={25}
              onClick={() => setOpen(true)}
            />
          </div>
          <CoustomDrawer
            open={open}
            setOpen={setOpen}
            placement="left"
            closable="true"
            rootClassName="coustom_drawer"
            title={
              <div>
                <SosalCourncy></SosalCourncy>
              </div>
            }
          >
            <MobileitemLlist></MobileitemLlist>
            <div className="flex items-center justify-between gap-x-[48px] mt-[30px]">
              <div className="flex items-center gap-x-3">
                <IoCartOutline size={28} />
                <div>
                  <h2 className="font-montserrat text-base font-normal leading-[24px]">
                    {t('Cart')}
                  </h2>
                  <span>$150,00</span>
                </div>
              </div>
              <div className="border border-l-colorFour opacity-25 h-[32px] "></div>
              <div className="flex items-center gap-x-3">
                <CiUser size={28} />
                <div>
                  <h2 className="font-montserrat text-base font-normal leading-[24px]">
                    {t('User')}
                  </h2>
                  <span className="font-montserrat font-bold leading-[24px] text-base text-colorFour">
                    {t('Account')}
                  </span>
                </div>
              </div>
            </div>
          </CoustomDrawer>
        </div>
      </div>
    </>
  );
};

export default MoblieResponsive;
