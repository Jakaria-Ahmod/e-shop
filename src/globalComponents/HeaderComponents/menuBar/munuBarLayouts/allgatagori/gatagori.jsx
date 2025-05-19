import { IoCameraReverseSharp } from 'react-icons/io5';
import {
  MdComputer,
  MdLiveTv,
  MdOutlineComputer,
  MdOutlineHeadsetMic,
  MdOutlineLiveTv,
} from 'react-icons/md';
import { SiPcgamingwiki } from 'react-icons/si';
import { TbBrandGoogleHome } from 'react-icons/tb';
import { CiMobile1 } from 'react-icons/ci';

export const items = [
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <MdOutlineComputer size={20} className="text-primary" /> Computers &
        Tablets
      </div>
    ),
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <CiMobile1 size={20} className="text-primary" /> Mobile & Accessories
      </div>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <MdOutlineLiveTv size={20} className="text-primary" /> TV & Home Theater
      </div>
    ),
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <MdOutlineHeadsetMic size={20} className="text-primary" /> Audio &
        Headphones
      </div>
    ),
    key: '3',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <IoCameraReverseSharp size={20} className="text-primary" /> Cameras &
        Camcorders
      </div>
    ),
    key: '4',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <SiPcgamingwiki size={20} className="text-primary" /> Gaming Equipment
      </div>
    ),
    key: '5',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <div className="flex items-center gap-x-2">
        {' '}
        <TbBrandGoogleHome size={20} className="text-primary" /> Home Appliances
      </div>
    ),
    key: '6',
  },
  {
    type: 'divider',
  },
];
