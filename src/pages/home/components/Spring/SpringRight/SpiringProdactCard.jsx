import { Tooltip } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
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
  totalStock, // ✅ যোগ করো
  soldQuantity, // ✅ যোগ করো
}) => {
  const sold = soldQuantity;
  const total = totalStock;
  const remaining = total - sold;
  const soldPercentage = (sold / total) * 100;

  let barColor = 'bg-black';
  if (soldPercentage >= 80) {
    barColor = 'bg-red-500';
  } else if (soldPercentage >= 50) {
    barColor = 'bg-orange';
  }

  return (
    <div className="mt-[80px] group transition ease-linear group cursor-pointer">
      <div className="p-[24px] sm:w-[300px] lg:w-[463px] sm:h-[600px] lg:h-[701px] bg-gray-200  cursor-pointer transition rounded-md ">
        <div className="overflow-hidden mb-[40px]">
          <img
            src={prodacutImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/* Discount badge */}
        {pDiscount && (
          <div className="relative">
            <div className=" bg-primary sm:w-[50px] sm:h-[50px] lg:w-[100px] lg:h-[100px] rounded-full flex items-center justify-center absolute lg:-top-[410px] sm:-top-[300px] sm:-right-6 lg:right-1">
              <span className="text-white font-montserrat text-base font-bold leading-[24px] py-[8px] px-[20px]">
                {pDiscount}%
              </span>
            </div>
          </div>
        )}

        {/* Name */}
        <span className="font-montserrat text-base font-normal leading-[20px] tracking-[5px] uppercase group-hover:text-primary">
          {prodactName}
        </span>

        {/* Product Name */}
        {prodactPName.length > 20 ? (
          <Tooltip title={prodactPName}>
            <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary cursor-pointer">
              {prodactPName.slice(0, 70)}...
            </h3>
          </Tooltip>
        ) : (
          <h3 className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary">
            {prodactPName}
          </h3>
        )}

        {/* Ratings */}
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={ratings} />
          <span className="text-base font-montserrat font-normal leading-[24px] text-colorFour">
            ({ratingsCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex gap-x-[10px] items-center">
          <h3 className="text-primary font-poppins text-[24px] font-semibold leading-[38px]">
            ${getDinscoutPirce(pPrice, pDiscount)}
          </h3>
          {pDiscount && (
            <span className="text-colorFour font-montserrat font-normal leading-[24px] text-base line-through opacity-[0.5]">
              ${pPrice}
            </span>
          )}
        </div>

        {/* ✅ Progress Bar */}
        <div className="flex gap-x-[10px] items-center mt-2">
          <div className="w-full">
            <div className="relative w-full bg-gray-400 h-[30px] rounded-full overflow-hidden">
              {/* ভিতরের বার */}
              <div
                className={`${barColor} h-full rounded-full transition-all duration-300`}
                style={{ width: `${soldPercentage}%` }}
              />

              {/* Center Text */}
              <div className="absolute inset-0 flex justify-center  items-center text-white text-base font-semibold">
                sold {Math.round(soldPercentage)}%, in stock{' '}
                {Math.round(100 - soldPercentage)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiringProdactCard;
