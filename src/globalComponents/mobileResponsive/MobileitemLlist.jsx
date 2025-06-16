import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const MobileitemLlist = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="flex flex-col gap-y-[20px]">
          <Link
            to="/product"
            className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary"
          >
            {t('Products')}
          </Link>
          <Link
            to="/blog"
            className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary"
          >
            {t('Blog')}
          </Link>
          <Link
            to="/contact"
            className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary"
          >
            {t('Contact')}
          </Link>
          <Link className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary">
            {t('LIMITED SALE')} 👋🏻
          </Link>
          <Link className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary">
            {t('Best Seller')}
          </Link>
          <Link className="font-montserrat text-base font-bold leading-[24px] !text-black hover:!text-primary">
            {t('New Arrival')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileitemLlist;
