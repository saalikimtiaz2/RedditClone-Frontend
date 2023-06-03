import { BsArrowUpRightCircleFill, BsCurrencyBitcoin, BsGraphUpArrow, BsQuestionCircle } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuInfo, LuStars } from 'react-icons/lu'
import { MdOutlineSportsBaseball } from 'react-icons/md'
import { RiFileListLine } from 'react-icons/ri'
import { SlScreenDesktop } from 'react-icons/sl'
import { TfiAnnouncement } from 'react-icons/tfi'
import { VscHome } from 'react-icons/vsc'
import { feedsInterface, topicsInterface } from '../../../interfaces/menuInterfaces'

export const Feeds: feedsInterface[] = [
  {
    label: 'Home',
    link: '/',
    icon: <VscHome />,
  },
  {
    label: 'Popular',
    link: '/',
    icon: <BsArrowUpRightCircleFill />,
  },
]

export const Topics: topicsInterface[] = [
  {
    label: 'Gaming',
    link: '/',
    icon: <IoGameControllerOutline />,
  },
  {
    label: 'Sports',
    link: '/',
    icon: <MdOutlineSportsBaseball />,
  },
  {
    label: 'Business',
    link: '/',
    icon: <BsGraphUpArrow />,
  },
  {
    label: 'Crypto',
    link: '/',
    icon: <BsCurrencyBitcoin />,
  },
  {
    label: 'Television',
    link: '/',
    icon: <SlScreenDesktop />,
  },
  {
    label: 'Celebrity',
    link: '/',
    icon: <LuStars />,
  },
  {
    label: 'More Topics',
    link: '/',
    icon: <FiMoreHorizontal />,
  },
]

export const navList: feedsInterface[] = [
  {
    label: 'Help Center',
    link: '/',
    icon: <BsQuestionCircle />,
  },
  {
    label: 'Info',
    link: '/',
    icon: <LuInfo />,
  },
  {
    label: 'Terms & Policies',
    link: '/',
    icon: <RiFileListLine />,
  },
  {
    label: 'Advertise on Reddit',
    link: '/',
    icon: <TfiAnnouncement />,
  },
]
