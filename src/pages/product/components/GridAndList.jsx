import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { IoGridOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGridView,
  setListView,
} from '../../../service/redux/features/viewSlice';

const GridAndList = () => {
  const dispatch = useDispatch();
  const viewType = useSelector(state => state.view.viewType);
  return (
    <div>
      <div className="flex gap-x-[12px] items-center ">
        <IoGridOutline
          className="cursor-pointer hover:bg-primary"
          size={24}
          onClick={() => dispatch(setGridView())}
        />
        <IoMdMenu
          className="cursor-pointer hover:text-primary"
          size={24}
          onClick={() => dispatch(setListView())}
        />
      </div>
    </div>
  );
};

export default GridAndList;
