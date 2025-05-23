import { Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { items } from './gatagori.jsx';
const Allgatagorey = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <FaBars color="white" size={20} />
              <span className="font-montserrat text-base font-bold text-white leading-[24px] cursor-pointer">
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
