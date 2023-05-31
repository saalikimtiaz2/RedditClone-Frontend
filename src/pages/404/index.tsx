const NotFoundPage = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
      <div className='max-w-sm rounded-lg border border-white bg-white bg-opacity-20 px-8 py-10 text-center shadow-xl backdrop-blur-sm'>
        <h1 className='mb-4 text-5xl font-bold text-white'>404</h1>
        <p className='mb-6 text-white'>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  )
}

export default NotFoundPage
