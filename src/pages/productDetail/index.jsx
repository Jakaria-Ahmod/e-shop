import { featuredProductApi } from '../home/components/Featured/featuredApi';
import { Link, useLocation } from 'react-router';
import ProductImg from './ProductImg';
import ProductDetailsCom from './ProductDetailsCom';
import BuyNowAndCout from './BuyNowAndCout';
import BuyAndCount from './BuyAndCount';
import Description from './Description';
import RelatetProduct from './RelatetProduct';
import CTA from '../../assets/img/CTA.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCounterValue,
  setCoutReset,
} from '../../service/redux/features/countSlice';
import { useEffect } from 'react';

const ProductDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split('/').slice(1)[1];
  const data = featuredProductApi.find(item => item.id == id);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  // ✅ Check if data is not found
  if (!data) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Product Not Found ❌
      </div>
    );
  }

  const {
    pCategory,
    image,
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
    description,
  } = data;

  const relatetProduct = featuredProductApi.filter(
    item => item.pCategory === data.pCategory && item.id !== data.id
  );

  useEffect(() => {
    const cartItems = cart.find(item => item.id === data.id);
    if (cartItems) {
      dispatch(setCounterValue(cartItems.qty));
    } else {
      dispatch(setCoutReset());
    }
  }, [dispatch, data.id]);

  return (
    <div className="container">
      <div className="mb-[50px]">
        <div className="flex items-center gap-x-[16px] mt-[64px] mb-[48px]">
          <div className="flex items-center gap-x-[15px]">
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              <Link to="/">Home</Link>
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              {pCategory}
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              {brand}
            </span>
            <span className="font-montserrat text-colorFour text-base font-normal leading-[24px]">
              |
            </span>
          </div>
          <span className="font-montserrat text-colorFour text-base font-bold leading-[24px]">
            {pName}
          </span>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr]">
          <ProductImg image={image} />
          <div>
            <ProductDetailsCom
              ratings={ratings}
              totalRatings={totalRatings}
              pName={pName}
              price={price}
              discount={discount}
              brand={brand}
              size={size}
              weight={weight}
              delivery={delivery}
              variant={variant}
            />
          </div>
        </div>

        <div className="flex gap-x-[110px] items-center mt-[73px] justify-between">
          <div className="w-[780px]">
            <BuyNowAndCout />
          </div>
          <BuyAndCount data={data} />
        </div>

        <div>
          <Description description={description} />
        </div>
        <div>
          <RelatetProduct relatetProduct={relatetProduct} />
        </div>

        <div className="w-[1520px] h-[531px] bg-amber-300 mt-[64px] rounded-[25px] overflow-hidden">
          <Link to="/product">
            <img src={CTA} alt="" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
