import { Collapse } from 'antd';
import React from 'react';

const acridonData = [
  {
    key: '1',
    label: 'What payment methods do you accept?',
    children: (
      <p className="font-montserrat font-normal leading-[30px] ml-[60px]">
        Absolutely! Once your order has been shipped, we'll send you a tracking
        number and a link to our carrier's website where you can track your
        package in real-time. You can also check the status of your order by
        logging into your account and viewing your order history.
      </p>
    ),
  },
  {
    key: '2',
    label: 'How do I track my order?',
    children: (
      <p className="font-montserrat font-normal leading-[30px] ml-[60px]">
        Absolutely! Once your order has been shipped, we'll send you a tracking
        number and a link to our carrier's website where you can track your
        package in real-time. You can also check the status of your order by
        logging into your account and viewing your order history.
      </p>
    ),
  },
  {
    key: '3',
    label: 'Can I change my shipping address?',
    children: (
      <p className="font-montserrat font-normal leading-[30px] ml-[60px]">
        Absolutely! Once your order has been shipped, we'll send you a tracking
        number and a link to our carrier's website where you can track your
        package in real-time. You can also check the status of your order by
        logging into your account and viewing your order history.
      </p>
    ),
  },
  {
    key: '4',
    label: 'Do you offer refunds?',
    children: (
      <p className="font-montserrat font-normal leading-[30px] ml-[60px]">
        Absolutely! Once your order has been shipped, we'll send you a tracking
        number and a link to our carrier's website where you can track your
        package in real-time. You can also check the status of your order by
        logging into your account and viewing your order history.
      </p>
    ),
  },
];

const FqaLeft = () => {
  return (
    <div>
      <section>
        <div className="main_data self-end">
          {acridonData.map(item => (
            <div key={item.key} className="item_item">
              <Collapse
                size="large"
                rootClassName="coustom-collapse"
                items={[item]} // একটি একটি করে পাঠানো হচ্ছে
                className="text-colorFour font-poppins font-semibold leading-[30px] text-[30px]"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FqaLeft;
