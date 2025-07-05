import RatingStars from '../../utility/Rating';
import { getDinscoutPirce } from '../../utility/getDiscountAndPrice';
import { Tooltip } from 'antd';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { Link, Links } from 'react-router';

const ProductCard = ({
  prodacutImg,
  prodactName,
  prodactPName,
  ratings,
  ratingsCount,
  pPrice,
  pDiscount,
  id,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="mt-7 lg:mt-[80px] group transition ease-linear group w-[284px] overflow-hidden rounded-md">
        <div className="p-[24px]  cursor-pointer border border-white transition hover:border-[#b9b2b2] rounded-md lg:w-[284px]">
          <div className="w-full h-[214px] overflow-hidden rounded-md">
            <img
              src={prodacutImg}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>

          <div className="relative hidden group-hover:block">
            <div className="flex items-center gap-x-[18px] justify-center absolute -top-[58px]  w-full">
              <Link to="/cart">
                <AiOutlineShoppingCart
                  size={10}
                  className="rounded-full p-2 w-[40px] h-[40px] border flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary border-primary text-primary  transition-all ease-linear bg-white"
                />
              </Link>
              <FaRegHeart
                size={10}
                className="rounded-full p-2 w-[40px] h-[40px] border flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary border-primary text-primary transition-all ease-linear bg-white"
              />
              <CiShare2
                size={10}
                className="rounded-full p-2 w-[40px] h-[40px] border flex items-center justify-center cursor-pointer hover:text-white hover:bg-primary border-primary text-primary  transition-all ease-linear bg-white"
              />
            </div>
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
                <Link className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary cursor-pointer">
                  {prodactPName.slice(0, 38)}...
                </Link>
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
    </Link>
  );
};

export default ProductCard;
