import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const MenuBarRight = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-x-[80px]">
        <Link className="font-montserrat text-base font-bold leading-[24px] text-white">
          {t('LIMITED SALE')} 👋🏻
        </Link>
        <Link className="font-montserrat text-base font-bold leading-[24px] text-white">
          {t('Best Seller')}
        </Link>
        <Link className="font-montserrat text-base font-bold leading-[24px] text-white">
          {t('New Arrival')}
        </Link>
      </div>
    </>
  );
};

export default MenuBarRight;
