import { Tooltip } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { FaRegHeart } from 'react-icons/fa';
// import { CiShare2 } from 'react-icons/ci';
import { getDinscoutPirce } from '../../../../../utility/getDiscountAndPrice';
import RatingStars from '../../../../../utility/Rating';

const SpiringProdactCard = ({
  prodacutImg,
  prodactName,
  prodactPName,
  ratings,
  ratingsCount,
  pPrice,
  pDiscount,
}) => {
  return (
    <div className="mt-[80px] group transition ease-linear group ">
      <div className="p-[24px] w-[463px] h-[701px]  bg-gray-200 group-hover:bg-white cursor-pointertransition rounded-md ">
        <div className="overflow-hidden w-[383px] h-[345px]">
          <img
            src={prodacutImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
          {pDiscount && (
            <div className=" bg-primary rounded-[5px] flex items-center justify-center absolute -top-[226px] -right-1">
              <span className="text-white font-montserrat text-base font-bold leading-[24px] py-[8px] px-[20px]">
                {pDiscount}%
              </span>
            </div>
          )}
        </div>

        <span className="font-montserrat text-base font-normal leading-[20px] tracking-[5px] uppercase group-hover:text-primary">
          {prodactName}
        </span>

        {prodactPName.length > 20 ? (
          <Tooltip title={prodactPName}>
            <div>
              <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary cursor-pointer">
                {prodactPName.slice(0, 50)}...
              </h3>
            </div>
          </Tooltip>
        ) : (
          <div>
            <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary">
              {prodactPName}
            </h3>
          </div>
        )}

        {/* Ratings added here */}
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={ratings} />
          <span className="text-base font-montserrat font-normal leading-[24px] text-colorFour">
            ({ratingsCount})
          </span>
        </div>
        <div>
          <div className="flex gap-x-[10px] items-center">
            <h3 className="text-primary font-poppins text-[24px] font-semibold leading-[38px]">
              ${getDinscoutPirce(pPrice, pDiscount)}
            </h3>
            <div>
              {pDiscount && (
                <span className="text-colorFour font-montserrat font-normal leading-[24px] text-base line-through opacity-[0.5]">
                  ${pPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiringProdactCard;
