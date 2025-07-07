import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import CommonButton from '../../globalComponents/comonButton';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import {
  DeCrement,
  InCrement,
  setCounterValue,
} from '../../service/redux/features/countSlice';
import { useNavigate } from 'react-router'; // ✅ Correct Hook
import { addCart } from '../../service/redux/features/cartSlice';

const BuyAndCount = ({ data }) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  const navigate = useNavigate(); // ✅ Correct Hook

  const handleAddToCardAndRedirect = () => {
    dispatch(addCart({ product: data, qty: count })); // ✅ fixed qty
    navigate('/cart'); // ✅ redirect to cart
  };

  return (
    <div>
      <div className="flex gap-x-5 lg:gap-x-[84px] mt-8">
        <div className="flex items-center gap-x-[10px] lg:gap-x-[65px]">
          <div
            className="w-[56px] h-[56px] rounded-full cursor-pointer hover:bg-[#F4F4F4] flex items-center justify-center"
            onClick={() => dispatch(DeCrement())}
          >
            <FiMinus size={24} />
          </div>
          <span className="font-poppins text-[36px] font-semibold leading-[46px] text-colorFour">
            {count}
          </span>
          <div
            className="w-[56px] h-[56px] rounded-full cursor-pointer hover:bg-[#F4F4F4] flex items-center justify-center"
            onClick={() => dispatch(InCrement())}
          >
            <GoPlus size={24} />
          </div>
        </div>
        <div className="flex gap-x-[16px]">
          <CommonButton>Buy Now</CommonButton>
          <button
            onClick={handleAddToCardAndRedirect}
            className="w-[62px] h-[58px] border border-primary rounded-md flex items-center justify-center cursor-pointer"
          >
            <GiShoppingCart size={28} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyAndCount;
