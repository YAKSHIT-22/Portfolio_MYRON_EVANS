import { Link } from 'react-router-dom'
import userIcon from '../assets/icons/userIcon.svg'

function NavBar() {
  const links = [
    {
      id: 'l-1',
      title: 'Home',
      to: '/',
    },
    {
      id: 'l-2',
      title: 'My Work',
      to: '/my-work',
    },
    {
      id: 'l-3',
      title: 'Bento Blog',
      to: '/blogs',
    },
    {
      id: 'l-4',
      title: 'Affiliate Referral',
      to: '/aff-ref',
    },
    {
      id: 'l-5',
      title: 'My Store',
      to: '/store',
    },
  ]
  return (
    <nav className="z-99 sticky top-0 flex w-full flex-wrap items-center justify-evenly overflow-hidden border-b-2 border-b-golden bg-primary px-12 py-4 text-primary">
      {/* Icon Div */}
      <div className="w-1/6 px-8">
        <Link to="/">
          <img src={userIcon} alt="Myron Evans" />
        </Link>
      </div>

      {/* Links Div */}
      <div className="flex w-3/6 flex-wrap items-center justify-evenly">
        {links.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className="transition-all hover:text-secondary"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Button Div */}
      <div className="flex w-1/6 items-center justify-center">
        <button className="hover:shadow-golden hover:shadow-custom h-fit rounded-md bg-gradient px-7 py-2 text-secondary transition-all hover:text-primary">
          Get in Touch
        </button>
      </div>
    </nav>
  )
}

export default NavBar
