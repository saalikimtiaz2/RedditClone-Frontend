import Collapseable from 'components/Collapseable'
import CreatePost from 'components/CreatePost'
import Layout from 'components/Layout'
import PostCard from 'components/PostCard'
import TrendingPosts from 'containers/TrendingPosts'
import AllPosts from 'data/PostCardData'
import { postInterface } from 'interfaces/postInterfaces'
import { BsChevronDown, BsFire } from 'react-icons/bs'
import { CgAlignTop } from 'react-icons/cg'
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdOutlineNewReleases } from 'react-icons/md'
import { TbSection } from 'react-icons/tb'
import { useAppSelector } from 'redux/store'

function Home() {
  const { isAuth } = useAppSelector(state => state.authSlice)

  return (
    <Layout closedSidebar={isAuth}>
      <div className='mx-auto min-h-screen md:container'>
        <div className='xs:px-10 lg:px-32'>{!isAuth && <TrendingPosts />}</div>
        <section className='md:px-10 lg:px-32'>
          {!isAuth && (
            <h3 className='z-50 mt-4 pb-2 text-sm font-semibold text-gray-800 dark:text-gray-200 xs:pl-2 md:pl-0'>
              Popular today
            </h3>
          )}
          <div className='grid grid-cols-12 gap-4 pt-4'>
            <div className='xs:col-span-12 md:col-span-8'>
              {isAuth && <CreatePost />}
              <div className='mb-4 flex items-center justify-between rounded border border-gray-200 bg-white px-4 py-2 dark:border-gray-600 dark:bg-gray-700 xs:mx-2 md:mx-0'>
                <div className='flex items-center gap-x-2'>
                  <button className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 hover:dark:bg-gray-500'>
                    <span className='text-xl'>
                      <BsFire />
                    </span>
                    Hot
                  </button>
                  <button className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 hover:dark:bg-gray-500'>
                    Everywhere
                    <span className='text-base'>
                      <BsChevronDown />
                    </span>
                  </button>

                  <div className='items-center gap-x-2 xs:hidden md:flex'>
                    <button className='btn btn-sm rounded-full text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
                      <MdOutlineNewReleases className='rotate-180 text-xl' />
                      New
                    </button>
                    <button className='btn btn-sm rounded-full text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
                      <CgAlignTop className='rotate-180 text-xl' /> Top
                    </button>
                    <button className='rounded-full p-2 text-xl text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
                      <FiMoreHorizontal />
                    </button>
                  </div>
                </div>
                <button className='rounded-full p-2 text-xl text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-600'>
                  <TbSection />
                </button>
              </div>
              {AllPosts.map((post: postInterface) => (
                <PostCard key={post._id} {...post} />
              ))}
            </div>
            <div className='xs:col-span-12 xs:px-2 md:col-span-4 md:px-0'>
              <Collapseable />
              <div className='sticky top-16 px-4 pt-10 text-center text-[10px] text-gray-500'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolorem?
                <div className='my-2 h-1 border-t border-gray-500' />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem voluptatibus quam alias
                consequatur consectetur amet aliquam maxime quas culpa, sunt, numquam magni? Neque tempora dicta eaque
                iure, hic illo!
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Home
