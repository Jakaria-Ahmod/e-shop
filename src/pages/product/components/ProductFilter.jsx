import { Dropdown, Space } from 'antd';
import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

const ProductFilter = () => {
  const items = [
    {
      key: '1',
      label: (
        <div>
          <h2>Home</h2>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div>
          <h2>...</h2>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="cursor-pointer">
        <Dropdown menu={{ items }}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <div className=" w-[151px] flex items-center justify-between">
                <span className="font-montserrat text-base text-primary font-bold leading-[24px]">
                  Popularity
                </span>
                <DownOutlined />
              </div>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProductFilter;
