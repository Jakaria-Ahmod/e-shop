import { Link } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';

const NoOrderFound = () => {
  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-gray-50 rounded-xl shadow-sm p-6">
      <FaShoppingCart className="text-[60px] text-gray-400 mb-4" />
      <h2 className="text-[24px] font-semibold text-gray-700">
        You haven’t placed any orders yet
      </h2>
      <p className="text-[16px] text-gray-500 mt-2 mb-4 text-center">
        Looks like you haven’t ordered anything yet. Let’s fix that!
      </p>
      <Link
        to="/product"
        className="mt-2 px-6 py-3 bg-primary text-white text-[16px] font-medium rounded-lg hover:bg-opacity-90 transition-all"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default NoOrderFound;
