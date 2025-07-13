import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import Payments from './Payments';
import Information from './Information';
const steps = [
  {
    title: 'Information',
    content: <Information></Information>,
  },
  {
    title: 'Payment',
    content: <Payments></Payments>,
  },
];
const CheckoutStesCompo = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));

  return (
    <>
      <div>
        <div className="w-[383px] mx-auto">
          <Steps current={current} items={items} />
        </div>
        <div>{steps[current].content}</div>
        {/* <div>dd</div> */}
        <div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success('Processing complete!')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutStesCompo;
