import TopbarLink from './TopbarLink.jsx'

import PlusIcon from '../../assets/svgs/Plus.jsx'
import { useLocation } from 'react-router-dom'

const Topbar = () => {
  const location = useLocation()
  const path = location.pathname.split('/')

  const links = [
    {
      id: 1,
      to: 'ecommerce/add',
      text: 'Add New Item',
    },
    {
      id: 2,
      to: 'blog/add',
      text: 'Add New Blog',
    },
    {
      id: 3,
      to: 'case/add',
      text: 'New Case Studies',
    },
    {
      id: 4,
      to: 'review/add',
      text: 'Add Review',
    },
  ]

  function isActive(link) {
    return path.length === 4 && `${path[2]}/${path[3]}` === link.to
  }

  return (
    <div
      className={
        'flex h-1/6 max-h-[87px] items-center justify-evenly bg-sm-primary py-10'
      }
    >
      {links.map((link) => (
        <TopbarLink
          key={link.id}
          title={link.text}
          active={isActive(link)}
          icon={
            <PlusIcon
              className={`group-hover:text-dark-golden transition-all duration-500 ${isActive(link) ? 'text-dark-golden' : ''}`}
            />
          }
          to={link.to}
        />
      ))}
    </div>
  )
}

export default Topbar
