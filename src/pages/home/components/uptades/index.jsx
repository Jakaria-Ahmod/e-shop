import React from 'react';
import UpdateLeft from './uptadesLayout/LeftSide';
// import UpdateRight from './uptadesLayout/RightSide';

const UptadesIndex = () => {
  return (
    <div className="gird grid-cols-[571px_1fr] mb-[80px] p-5">
      <UpdateLeft></UpdateLeft>
      {/* <UpdateRight></UpdateRight> */}
    </div>
  );
};

export default UptadesIndex;
