import { BsArrowUpRightCircleFill, BsCurrencyBitcoin, BsGraphUpArrow } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { LuStars } from 'react-icons/lu'
import { MdOutlineSportsBaseball } from 'react-icons/md'
import { SlScreenDesktop } from 'react-icons/sl'
import { VscHome } from 'react-icons/vsc'

type feedsTypes = {
  label: string
  link: string
  icon: React.ReactNode
}
type topicsTypes = {
  label: string
  link: string
  icon: React.ReactNode
}

export const Feeds: feedsTypes[] = [
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

export const Topics: topicsTypes[] = [
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
