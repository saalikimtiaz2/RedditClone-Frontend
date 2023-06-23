import { Tab } from '@headlessui/react'

import Collapseable from 'components/Collapseable'
import Media from 'components/CreatePost/Media'
import Post from 'components/CreatePost/Post'
import URL from 'components/CreatePost/URL'
import Layout from 'components/Layout'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { BsCardText, BsLink45Deg } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'

type postTypes = {
  label: string
  icon?: React.ReactNode
  body: React.ReactNode
  disabled?: boolean
}

const tabList: postTypes[] = [
  {
    label: 'Post',
    icon: <BsCardText />,
    body: <Post />,
  },
  {
    label: 'Image & Video',
    icon: <CiImageOn />,
    body: <Media />,
  },
  {
    label: 'URL',
    icon: <BsLink45Deg />,
    body: <URL />,
  },
]

function SubmitPost() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = searchParams.get('type')

  const [selectedIndex, setSelectedIndex] = useState(0)

  const removeQueryParams = () => {
    if (params) {
      searchParams.delete('type')
      setSearchParams(searchParams)
    }
  }

  useEffect(() => {
    if (params === 'media') {
      setSelectedIndex(1)
    } else if (params === 'url') {
      setSelectedIndex(2)
    } else {
      setSelectedIndex(0)
    }
  }, [params])

  return (
    <Layout closedSidebar>
      <div className='mx-auto min-h-screen py-10 md:container xs:px-2'>
        <div className='grid grid-cols-12 gap-4 lg:px-28 '>
          <div className='xs:col-span-12 md:col-span-8'>
            <div className='mb-6 flex items-center justify-between border-b border-gray-500 pb-2 text-xl'>
              <h1>Create Post</h1>
              <button className='btn btn-xs rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600'>
                Darfts
                <span className='inline-block rounded-md bg-gray-600 p-1 text-xs text-white'>0</span>
              </button>
            </div>
            <div className='overflow-hidden rounded-t-md bg-white dark:bg-gray-800'>
              <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List className='flex'>
                  {tabList.map(post => (
                    <Tab
                      key={post.label}
                      className={({ selected }) =>
                        `relative flex w-1/3 items-center justify-center gap-x-2 overflow-hidden border-b border-r border-gray-200 py-3 font-semibold last-of-type:border-r-0 hover:bg-secondary/5 disabled:cursor-not-allowed disabled:opacity-20 dark:border-gray-700  dark:hover:bg-gray-700 ${
                          selected && 'selectedTab text-secondary dark:text-white'
                        }`
                      }
                      onClick={removeQueryParams}
                      disabled={post.disabled}
                    >
                      <span className='text-2xl'>{post.icon}</span>
                      {post.label}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className='p-4'>
                  {tabList.map((post, idx) => (
                    <Tab.Panel key={idx}>{post.body}</Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
            <div className='rounded-b-md bg-gray-100 p-4 text-sm dark:bg-gray-700'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus iusto accusantium officia eum
                nam.
              </p>
            </div>
          </div>
          <div className='bg- xs:col-span-12 md:col-span-4'>
            <Collapseable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SubmitPost
