import React, { Children } from 'react';

const CommonButton = ({
  children,
  loading = false,
  onclick,
  disabled = false,
}) => {
  return (
    <div>
      <button
        className="bg-primary px-10 py-4 rounded-md cursor-pointer font-montserrat text-xl font-bold leading-[30px] text-white"
        loading={loading}
        onClick={onclick}
        // className={className}
        disabled={disabled || loading}
      >
        {children}
      </button>
    </div>
  );
};

export default CommonButton;
