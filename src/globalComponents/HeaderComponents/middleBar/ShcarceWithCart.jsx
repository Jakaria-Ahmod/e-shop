import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router';
import { IoCartOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';

const ShcarceWithCart = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex items-center justify-end gap-x-[48px]">
        <div>
          <div className="flex items-center justify-between w-[332px] border py-[16px] px-[24px] rounded">
            <input
              type="text"
              placeholder={t('Search Products ...')}
              className="border-none outline-none"
            />
            <Link>
              <CiSearch />
            </Link>
          </div>
        </div>
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
    </div>
  );
};

export default ShcarceWithCart;
