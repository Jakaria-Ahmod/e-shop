import React from 'react';
import ChackoutHeding from './components/ChackoutHeding';
import CheckoutSteps from './components/CheckoutSteps';
import CheckoutStesCompo from './components/CheckoutStesCompo';

const Chackout = () => {
  return (
    <div className="container">
      <div className="my-[64px]">
        <ChackoutHeding></ChackoutHeding>
      </div>
      <div>
        <CheckoutSteps></CheckoutSteps>
      </div>
      <div>
        <CheckoutStesCompo></CheckoutStesCompo>
      </div>
    </div>
  );
};

export default Chackout;
