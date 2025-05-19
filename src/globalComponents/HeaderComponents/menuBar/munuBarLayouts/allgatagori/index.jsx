import { Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { items } from './gatagori';

const Allgatagorey = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <Dropdown menu={{ items }}>
          <a onClick={e => e.preventDefault()}>
            <Space className="gap-x-[16px]">
              <FaBars color="white" size={20} className="cursor-pointer" />{' '}
              <span className="font-montserrat text-base font-bold leading-[24px] text-white cursor-pointer">
                {t('All Categories')}
              </span>
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default Allgatagorey;
