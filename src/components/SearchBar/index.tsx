import TrendingPostCard from 'components/TrendingPostCard'
import AllTrendingPosts from 'data/TrendingPosts'

import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)

  return (
    <>
      <div
        className={`relative flex items-center ${
          showSearchBar ? 'rounded-t-2xl border-secondary dark:bg-gray-800' : 'rounded-full'
        } w-2/5 border  dark:border-gray-300 dark:bg-gray-700  dark:hover:border-gray-200 dark:hover:bg-gray-800 xs:pl-2 lg:pl-4 `}
      >
        <BsSearch />
        <input
          onFocus={() => setShowSearchBar(true)}
          onBlur={() => setTimeout(() => setShowSearchBar(false), 200)}
          placeholder='Search Reddit'
          type='text'
          className='grow bg-transparent py-2 outline-none  xs:px-2 xs:text-xs lg:px-4 lg:text-base'
        />
        {showSearchBar && (
          <Transition appear show={showSearchBar} as={Fragment}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-80 -translate-y-52'
              enterTo='opacity-100 translate-y-0'
              leave='ease-in duration-300'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-52'
            >
              <div className='absolute left-0 right-0 top-10 max-h-[550px] overflow-x-hidden overflow-y-scroll rounded-b-md border-x border-b border-gray-200 bg-white shadow dark:border-gray-800 dark:bg-gray-800 dark:shadow-white/30'>
                <p className='p-4 text-sm uppercase text-gray-500'>Trending today</p>
                {AllTrendingPosts.map(trend => (
                  <TrendingPostCard {...trend} key={trend.title} listView />
                ))}
              </div>
            </Transition.Child>
          </Transition>
        )}
      </div>
    </>
  )
}

export default SearchBar
