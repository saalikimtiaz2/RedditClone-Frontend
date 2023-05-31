import Layout from 'src/Components/Layout'

function Home() {
  return (
    <Layout>
      <div className='relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-primary to-secondary'>
        <h1 className='mb-4 text-5xl font-bold text-white'>Reddit Clone</h1>
        <p className='text-3xl text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed?
        </p>
        <button className='mt-8 rounded bg-white px-4 py-2 text-gray-800 hover:bg-gray-200'>Get Started ❤️</button>
      </div>
    </Layout>
  )
}

export default Home
