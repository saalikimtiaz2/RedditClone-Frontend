import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false)

  return (
    <>
      <div
        className={`relative flex items-center ${
          showSearchBar ? 'rounded-t-2xl dark:bg-gray-800' : 'rounded-full'
        } border border-gray-500 dark:bg-gray-700 dark:hover:border-gray-200  dark:hover:bg-gray-800 xs:pl-2  md:w-2/5 lg:pl-4 `}
      >
        <BsSearch />
        <input
          onFocus={() => setShowSearchBar(true)}
          onBlur={() => setShowSearchBar(false)}
          placeholder='Search Reddit'
          type='text'
          className='grow bg-transparent py-2 outline-none  xs:px-2 xs:text-xs lg:px-4 lg:text-base'
        />
        {showSearchBar && (
          <div className='s absolute left-0 right-0 top-10 overflow-hidden rounded-b-md bg-white p-4 shadow shadow-white/30 dark:bg-gray-800'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam culpa aperiam nemo, deserunt
            asperiores! Assumenda natus quis quos magnam reprehenderit similique placeat, doloremque numquam ex
            obcaecati exercitationem molestiae! Sequi?
          </div>
        )}
      </div>
    </>
  )
}

export default SearchBar
