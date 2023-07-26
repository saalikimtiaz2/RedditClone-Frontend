import Layout from 'components/Layout'
import useFetchPostById from 'hooks/Posts/useFetchPostById'
import { BsCardChecklist, BsLink45Deg } from 'react-icons/bs'
import { CiImageOn } from 'react-icons/ci'
import { useParams } from 'react-router-dom'

function PostDetails() {
  const { id } = useParams()
  const [loading, postData] = useFetchPostById(id!)

  const getIcons = (type: string) => {
    switch (type) {
      case 'text':
        return <BsCardChecklist className='text-2xl' />
      case 'image':
        return <CiImageOn className='text-2xl' />
      case 'url':
        return <BsLink45Deg className='text-2xl' />
      default:
        return <BsCardChecklist className='text-2xl' />
    }
  }

  if (loading) {
    return <span>Loading</span>
  }
  return (
    <Layout closedSidebar>
      <section className='mx-auto min-h-screen py-4 lg:container xs:px-6 lg:px-32'>
        <div className='flex items-center justify-between gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <p className='flex w-[150px] items-center gap-x-2 truncate text-sm font-bold text-gray-500'>
              {getIcons(postData.postType)} {postData.title}
            </p>
          </div>
          <button className='rounded-full bg-gray-500 px-2 py-1 text-xs '>Close</button>
        </div>
      </section>
    </Layout>
  )
}

export default PostDetails
