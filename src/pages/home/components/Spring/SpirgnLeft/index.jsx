import React from 'react';
import Countdown from 'react-countdown';
import CountdownCompo from '../CoundownTimerCom';
import { useTranslation } from 'react-i18next';
import CommonButton from '../../../../../globalComponents/comonButton';
import { Link } from 'react-router';

const SpirngLeft = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h3 className="font-poppins text-[56px] font-bold leading-[68px]">
          {t('Spring Sale')}
        </h3>
        <Countdown
          date={Date.now() + 10000000000}
          renderer={CountdownCompo}
          // className="mb-[72px]"
        />
        <div className="mt-[72px]">
          <Link to="/product">
            <CommonButton>
              <span>{t('Shop_Now')}</span>
            </CommonButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpirngLeft;
