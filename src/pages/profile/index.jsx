import React, { useState } from 'react';
import ProfileLeft from './components/ProfileLeft';
import ProfileRight from './components/ProfileRight';

const UserProFile = () => {
  const [selectedMenu, setSelectedMenu] = useState('orders'); // default menu

  return (
    <div className="container px-4 md:px-6">
      <div className="my-10 md:my-[64px] grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-6">
        <div>
          <ProfileLeft setSelectedMenu={setSelectedMenu} />
        </div>
        <div>
          <ProfileRight selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default UserProFile;
