import React from 'react';
import bestSeller from '../../../../../assets/img/bestSeller.png';

const SellerRight = () => {
  return (
    <div>
      <section>
        <div className="lg:w-[544px]  lg:h-[1086px]">
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
