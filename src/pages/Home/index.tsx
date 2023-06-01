import Layout from '@/components/Layout'
import TrendingPosts from '@/containers/TrendingPosts'

function Home() {
  return (
    <Layout>
      <div className='h-screen'>
        <div className='xs:px-4 md:px-10 lg:px-32'>
          <TrendingPosts />
        </div>
      </div>
    </Layout>
  )
}

export default Home
