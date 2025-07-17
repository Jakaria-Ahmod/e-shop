import React from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../../../../globalComponents/ProductsCard';
import { BestSellerApi } from '../bestSellerApi';

const Sellerleft = () => {
  const { t } = useTranslation();

  // ✅ শুধু topSeller === true গুলো ফিল্টার করলাম
  const topSellingProducts = BestSellerApi.filter(
    product => product.topSeller === true
  );

  return (
    <div>
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-colorFour font-poppins text-lg lg:text-[36px] font-semibold leading-[46px]">
              {t('Best Seller')}
            </h3>
          </div>
          <div>
            <Link className="flex items-center gap-x-[16px]" to="/product">
              <p className="font-montserrat text-base font-bold leading-[24px] text-primary hover:pr-2">
                View All
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="8"
                  viewBox="0 0 29 8"
                  fill="none"
                >
                  <path
                    d="M28.3536 4.35355C28.5488 4.15829 28.5488 3.84171 28.3536 3.64645L25.1716 0.464466C24.9763 0.269204 24.6597 0.269204 24.4645 0.464466C24.2692 0.659728 24.2692 0.976311 24.4645 1.17157L27.2929 4L24.4645 6.82843C24.2692 7.02369 24.2692 7.34027 24.4645 7.53553C24.6597 7.7308 24.9763 7.7308 25.1716 7.53553L28.3536 4.35355ZM0 4V4.5H28V4V3.5H0V4Z"
                    fill="#FF624C"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-3 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1">
          {topSellingProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              prodacutImg={product.img}
              prodactName={product.name}
              prodactPName={product.pName}
              ratings={product.ratings}
              ratingsCount={product.ratingsCount}
              pPrice={product.pPrice}
              pDiscount={product.pDiscount}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sellerleft;
