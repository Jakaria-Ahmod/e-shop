import RatingStars from '../../utility/Rating';
import { Link } from 'react-router';
import { getDinscoutPirce } from '../../utility/getDiscountAndPrice';

const ProductDetailsCom = ({
  ratings,
  totalRatings,
  pName,
  price,
  discount,
  brand,
  size,
  weight,
  delivery,
  variant,
}) => {
  return (
    <div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <RatingStars rating={ratings} />
          <span className="text-base font-montserrat font-normal leading-[24px] text-colorFour">
            ({totalRatings})
          </span>
        </div>
        <div>
          <Link className="text-colorFour font-poppins text-xl font-semibold leading-[30px] mt-[16px] mb-[8px] group-hover:text-primary cursor-pointer">
            {pName}
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-[24px]"></div>
        <div>
          <div>
            <div className="flex gap-x-[18px] items-center mt-[24px]">
              <h3 className="text-primary font-poppins text-[56px] font-semibold leading-[38px]">
                ${getDinscoutPirce(price, discount)}
              </h3>
              <div>
                {discount && (
                  <span className="text-colorFour font-montserrat font-normal leading-[24px] text-base line-through opacity-[0.5]">
                    ${price}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[48px] space-y-4">
          <div className="flex gap-x-6">
            <span className="w-[100px] font-poppins text-xl font-semibold leading-[30px]">
              Brand
            </span>
            <span className="font-montserrat text-xl font-normal text-colorFour leading-[30px]">
              {brand}
            </span>
          </div>
          <div className="flex gap-x-6">
            <span className="w-[100px] font-poppins text-xl font-semibold leading-[30px]">
              Size
            </span>
            <span className="font-montserrat text-xl font-normal text-colorFour leading-[30px]">
              {size}
            </span>
          </div>
          <div className="flex gap-x-6">
            <span className="w-[100px] font-poppins text-xl font-semibold leading-[30px]">
              Weight
            </span>
            <span className="font-montserrat text-xl font-normal text-colorFour leading-[30px]">
              {weight}
            </span>
          </div>
          <div className="flex gap-x-6">
            <span className="w-[100px] font-poppins text-xl font-semibold leading-[30px]">
              Delivery
            </span>
            <span className="font-montserrat text-xl font-normal text-colorFour leading-[30px]">
              {delivery}
            </span>
          </div>
          <div className="flex gap-x-6 items-start">
            <span className="w-[100px] font-poppins text-xl font-semibold leading-[30px]">
              Variant
            </span>
            <div className="flex gap-x-2 flex-wrap">
              {variant.map((item, index) => (
                <div
                  key={index}
                  className="py-[8px] px-[16px] border border-gray-400 rounded-md group cursor-pointer"
                >
                  <span className="font-montserrat font-bold leading-[24px] text-base group-hover:text-primary">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCom;
