import { feedsInterface, topicsInterface } from '../../../interfaces/menuInterfaces'
import { Feeds, Topics } from '../../Navigation/Navlinks'

function MainMenu() {
  return (
    <>
      <h6 className='px-8 pb-2 pt-6 dark:text-gray-500'>Feeds</h6>
      {Feeds.map((feed: feedsInterface) => (
        <button key={feed.label} className='sidebar-btn'>
          <span>{feed.icon}</span> {feed.label}
        </button>
      ))}
      <h6 className='px-8 pb-2 pt-6 dark:text-gray-500'>Topics</h6>
      {Topics.map((topic: topicsInterface) => (
        <button key={topic.label} className='sidebar-btn'>
          <span>{topic.icon}</span> {topic.label}
        </button>
      ))}
    </>
  )
}

export default MainMenu
