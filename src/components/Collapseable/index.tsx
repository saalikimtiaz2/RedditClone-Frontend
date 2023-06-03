import { Disclosure } from '@headlessui/react'
import { BsChevronUp } from 'react-icons/bs'

const list = [
  {
    title: 'What is your refund policy?',
    body: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    title: 'Do you offer technical support?',
    body: 'No.',
  },
]

export default function Example() {
  return (
    <>
      <div className='overflow-hidden rounded border-x border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700'>
        {[list].map((item: any, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full items-center justify-between border-t border-gray-200 px-4 py-2 dark:border-gray-600'>
                  <span className='text-[10px] font-semibold uppercase'>{item.title}</span>
                  <BsChevronUp className={`${!open ? 'rotate-180 transform' : ''} h-4 w-4 text-gray-500`} />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pb-2 pt-4 text-xs font-light text-gray-500'>
                  {item.body}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </>
  )
}
