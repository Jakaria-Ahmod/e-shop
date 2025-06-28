import RatingStars from '../../utility/Rating';
import { getDinscoutPirce } from '../../utility/getDiscountAndPrice';
import { Tooltip } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';

const ProductListCard = ({
  prodacutImg,
  prodactName,
  prodactPName,
  ratings,
  ratingsCount,
  pPrice,
  pDiscount,
}) => {
  return (
    <div className="group transition-all ease-linear">
      <div
        className="p-4 border border-white hover:border-[#b9b2b2] mt-[46px] rounded-md cursor-pointer 
         lg:w-full w-[400px] h-[250px] lg:h-[200px] flex flex-col justify-between"
      >
        {/* Image */}
        <div className="flex gap-2.5">
          <div className="w-[300px] h-[140px] overflow-hidden rounded-md relative">
            <img
              src={prodacutImg}
              alt="product"
              className="object-cover w-full h-full"
            />

            {/* Discount badge */}
            {pDiscount && (
              <div className="absolute top-2 right-2 bg-primary rounded-[4px] px-2 py-1">
                <span className="text-white text-xs font-semibold">
                  {pDiscount}%
                </span>
              </div>
            )}

            {/* Hover icons */}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between flex-1 mt-2">
            <span className="text-sm tracking-widest uppercase text-gray-500">
              {prodactName}
            </span>

            {/* Product Title */}
            {prodactPName.length > 20 ? (
              <Tooltip title={prodactPName}>
                <h3 className="text-colorFour font-semibold text-[16px] leading-tight mt-1 hover:text-primary transition-all duration-200 cursor-pointer">
                  {prodactPName.slice(0, 40)}...
                </h3>
              </Tooltip>
            ) : (
              <h3 className="text-colorFour font-semibold text-[16px] leading-tight mt-1 hover:text-primary transition-all duration-200">
                {prodactPName}
              </h3>
            )}

            {/* Ratings */}
            <div className="flex items-center gap-2 mt-1">
              <RatingStars rating={ratings} />
              <span className="text-xs text-gray-500">({ratingsCount})</span>
            </div>
            <div className="flex mt-1.5 -bottom-5 left-1/2 -translate-x-1/ group-hover:flex gap-2">
              <AiOutlineShoppingCart className="w-[36px] h-[36px] p-2 border rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 border-primary" />
              <FaRegHeart className="w-[36px] h-[36px] p-2 border rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 border-primary" />
              <CiShare2 className="w-[36px] h-[36px] p-2 border rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200 border-primary" />
            </div>
            {/* Price */}
            <div className="flex items-center gap-3 mt-1">
              <h3 className="text-primary text-[18px] font-bold">
                ${getDinscoutPirce(pPrice, pDiscount)}
              </h3>
              {pDiscount && (
                <span className="line-through text-sm text-gray-400">
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

export default ProductListCard;
