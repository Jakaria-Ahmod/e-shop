import React from 'react';
import { Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { items } from '../../../../globalComponents/HeaderComponents/menuBar/munuBarLayouts/allgatagori/gatagori.jsx';
import { IoIosArrowDown } from 'react-icons/io';

const ProdactCategore = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={e => e.preventDefault()}>
          <Space>
            <FaBars color="white" size={20} />
            <div className="flex items-center  w-[283px] justify-between">
              <span className="font-montserrat text-base font-bold text-primary leading-[24px] cursor-pointer">
                {t('All Categories')}
              </span>
              <IoIosArrowDown className=" cursor-pointer text-primary" />
            </div>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default ProdactCategore;
