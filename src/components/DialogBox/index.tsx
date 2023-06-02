import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MdClose } from 'react-icons/md'

const DialogBox = ({
  isOpen,
  closeModal,
  children,
  title,
}: {
  title?: string
  isOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[152]' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-70' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-black shadow-xl transition-all'>
                  <button onClick={closeModal} className='absolute right-6 top-6 z-50 text-xl text-gray-500'>
                    <MdClose />
                  </button>
                  <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-800'>
                    {title}{' '}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default DialogBox
