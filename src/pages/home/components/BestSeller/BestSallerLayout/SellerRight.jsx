import React from 'react';
import bestSeller from '../../../../../assets/img/bestSeller.png';

const SellerRight = () => {
  return (
    <div>
      <section>
        <div className="w-[544px] h-[1086px]">
          <img
            src={bestSeller}
            alt="bestSeller"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default SellerRight;
