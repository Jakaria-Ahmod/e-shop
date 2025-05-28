import React from 'react';

const CountdownCompo = ({ hours, minutes, seconds, days }) => {
  return (
    <div>
      <div className="mt-[40px]">
        <div className="flex items-center gap-x-[26px]">
          <div>
            <div className="flex items-center gap-x-[24px]">
              <h3 className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                {days}
              </h3>{' '}
              <span className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                :
              </span>
            </div>
            <p className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              days
            </p>
          </div>
          <div>
            <div className="flex items-center gap-x-[24px]">
              <h3 className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                {hours}
              </h3>{' '}
              <span className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                :
              </span>
            </div>
            <p className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              hours
            </p>
          </div>
          <div>
            <div className="flex items-center gap-x-[24px]">
              <h3 className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                {minutes}
              </h3>{' '}
              <span className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                :
              </span>
            </div>
            <p className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              minutes
            </p>
          </div>
          <div>
            <div className="flex items-center gap-x-[24px]">
              <h3 className="text-primary font-poppins  font-semibold leading-[46px] text-[36px]">
                {seconds}
              </h3>{' '}
            </div>
            <p className="font-montserrat text-base font-normal leading-[24px] text-colorFour">
              seconds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownCompo;
