import { Link } from 'react-router-dom'
import userIcon from '../assets/icons/userIcon.svg'
import { useState } from 'react'

function NavBar() {
  const [showNav, setShowNav] = useState(false)

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
    <nav className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between border-b-2 border-b-golden bg-primary px-4 py-2 text-primary sm:px-12 sm:py-4">
      {/* Icon Div */}
      <div className="w-1/3 px-2 sm:w-1/6 sm:px-8">
        <Link to="/">
          <img src={userIcon} alt="Myron Evans" />
        </Link>
      </div>

      {/* Links Div */}
      <div className="hidden w-full md:flex md:w-3/6 md:flex-wrap md:items-center md:justify-evenly">
        {links.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className="px-2 py-1 font-inter font-medium tracking-normal transition-all hover:text-secondary md:px-0"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Button Div */}
      <div className="hidden w-1/6 items-center justify-center font-medium md:flex">
        <a
          href={'#get-in-touch'}
          className="h-fit rounded-md bg-gradient px-4 py-2 text-secondary transition-all hover:text-primary hover:shadow-custom hover:shadow-golden"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex w-1/3 items-center justify-end md:hidden">
        <button
          className="flex items-center justify-center focus:outline-none"
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (hidden initially) */}
      <div
        className={`${showNav ? 'block' : 'hidden'} h-screen w-full md:hidden`}
      >
        {links.map((link) => (
          <Link
            to={link.to}
            key={link.id}
            className="block px-4 py-2 font-inter font-medium tracking-normal transition-all hover:text-secondary"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
