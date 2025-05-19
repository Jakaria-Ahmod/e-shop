import React from 'react';
import Allgatagorey from './munuBarLayouts/allgatagori';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import MenuBarRight from './menuBarRight';

const MenuBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-primary py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[80px]">
              <Allgatagorey></Allgatagorey>
              <Link
                to="product"
                className="font-montserrat text-base font-bold leading-[24px] text-white"
              >
                {t('Products')}
              </Link>
              <Link
                to="/blog"
                className="font-montserrat text-base font-bold leading-[24px] text-white"
              >
                {t('Blog')}
              </Link>
              <Link
                to="/contact"
                className="font-montserrat text-base font-bold leading-[24px] text-white"
              >
                {t('Contact')}
              </Link>
            </div>
            <MenuBarRight></MenuBarRight>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
