function Media() {
  return (
    <form>
      <input type='text' placeholder='Title' className='input-item block w-full' />
      <div className='flex items-center justify-center gap-2 border border-gray-200 py-24 dark:border-gray-700'>
        Drop File or
        <button className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600'>
          Upload
        </button>
      </div>
      <div className='mt-6 flex items-center justify-end gap-x-2 border-t border-gray-200 pt-6 dark:border-gray-700'>
        <button
          type='button'
          className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600'
        >
          Save Draft
        </button>
        <button
          type='submit'
          className='btn btn-sm rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 hover:dark:bg-gray-600'
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default Media
