import { Select } from 'antd';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import i18n from '../../../service/react_translate_i18/i18';

const SosalCourncy = () => {
  const handleOptionData = [
    { value: 'us', label: 'us' },
    { value: 'bd', label: 'bd' },
  ];

  const handleFlag = [
    {
      value: 'us',
      language: 'en',
      label: (
        <div className="flex items-center gap-x-1.5">
          <img
            src="https://flagcdn.com/us.svg"
            alt="img"
            className="w-[20px] h-[20px]"
          />
          <span>Einglish</span>
        </div>
      ),
    },
    {
      value: 'bd',
      language: 'bd',
      label: (
        <div className="flex items-center gap-x-1.5">
          <img
            src="https://flagcdn.com/bd.svg"
            alt="img"
            className="w-[20px] h-[20px]"
          />
          <span>Bangladesh</span>
        </div>
      ),
    },
  ];

  const handleTranlate = value => {
    const findLagn = handleOptionData.find(lang => lang.value === value);
    if (findLagn) {
      i18n.changeLanguage(findLagn.label);
      // console.log(findLagn.label);
    }
  };

  return (
    <div>
      <div className="flex items-center lg:justify-end gap-x-2 lg:space-x-6">
        <div>
          <Select
            defaultValue={handleOptionData[0].value}
            style={{ width: 70 }}
            onChange={() => {}}
            options={handleOptionData}
            className="coustom-select"
          />
        </div>
        <div className="border border-l-colorFour opacity-25 h-[32px] "></div>

        <div>
          <Select
            defaultValue={handleFlag[0].value}
            style={{ width: 120 }}
            onChange={handleTranlate}
            options={handleFlag}
            className="coustom-select"
          />
        </div>
        <div className="border border-l-colorFour opacity-25 h-[32px] hidden lg:block"></div>

        <div className="hidden lg:block">
          <div className="flex items-center space-x-[24px]">
            <Link to="https://web.facebook.com/people/Md-Jakaria-Ahmod/pfbid02SQtretQtReHKq7h6EDA5h92vJ5xtJLDczrHZvuBKjz7u5QWyCxa4HXkMMBtTJCuPl/">
              <FaFacebookF size={16} />
            </Link>
            <Link to="https://web.facebook.com/people/Md-Jakaria-Ahmod/pfbid02SQtretQtReHKq7h6EDA5h92vJ5xtJLDczrHZvuBKjz7u5QWyCxa4HXkMMBtTJCuPl/">
              <FaTwitter size={16} />
            </Link>
            <Link to="https://web.facebook.com/people/Md-Jakaria-Ahmod/pfbid02SQtretQtReHKq7h6EDA5h92vJ5xtJLDczrHZvuBKjz7u5QWyCxa4HXkMMBtTJCuPl/">
              <IoLogoInstagram size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosalCourncy;
