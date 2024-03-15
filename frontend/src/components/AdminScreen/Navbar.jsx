import { Link, useLocation } from 'react-router-dom'

import ecommerceIcon from '../../assets/icons/ecommerce.svg'
import dashboardIcon from '../../assets/icons/dashboard.svg'
import blogIcon from '../../assets/icons/blog.svg'
import refferIcon from '../../assets/icons/refer.svg'
import caseStudyIcon from '../../assets/icons/case_study.svg'
import userIcon from '../../assets/icons/userIcon.svg'

import downArrowIcon from '../../assets/svgs/downArrow.svg'
import logoutSvg from '../../assets/svgs/Logout.svg'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname.split('/')
  console.log(path)

  const links = [
    {
      id: 1,
      to: ' ',
      text: 'Dashboard',
      icon: dashboardIcon,
    },
    {
      id: 2,
      to: 'ecommerce',
      text: 'Ecommerce',
      icon: ecommerceIcon,
    },
    {
      id: 3,
      to: 'case',
      text: 'My Case Studies',
      icon: caseStudyIcon,
    },
    {
      id: 5,
      to: 'blog',
      text: 'My Blogs',
      icon: blogIcon,
    },
    {
      id: 4,
      to: 'refer',
      text: 'Refer Funds',
      icon: refferIcon,
    },
  ]

  function isActive(link) {
    return path.length === 3 && path[2] === link.to.trim()
  }

  return (
    <div className="bg-admin-navbar relative h-screen text-body">
      {/* <!-- logo --> */}
      <div className="flex h-1/6 max-h-[87px] items-center justify-center bg-secondary py-10">
        <img src={userIcon} />
      </div>
      <div className="flex flex-col items-center justify-center py-5">
        <div
          className="size-24 max-h-[90px] max-w-[90px] rounded-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/Section 9.png')",
          }}
        >
          {/* Logo */}
        </div>
        <p className="font-poppins text-admin-nav-lg">Myron Evans</p>
        <p className="font-poppins text-admin-nav-sm">Admin</p>
      </div>
      <nav className="flex h-[46%] w-64 flex-col divide-y-2 divide-secondary overflow-y-auto">
        {links.map((link, idx) => (
          <Link
            to={link.to}
            key={link.id}
            className={`text-admin-nav-md flex w-full items-center justify-between px-4 py-3 text-center hover:bg-sm-primary ${isActive(link) ? 'bg-sm-primary' : ''}`}
            style={{
              borderTop: idx === 0 ? '2px solid #201f1f' : '',
            }}
          >
            <div className="flex flex-row items-center">
              <img
                src={link.icon}
                className={` ${link.text === 'Refer Funds' ? 'mb-2' : 'mb-0'}`}
              />
              <span className={`font-poppins px-2 font-medium`}>
                {link.text}
              </span>
            </div>

            <img src={downArrowIcon} className={'rotate-270'} />
          </Link>
        ))}
      </nav>
      <button
        className={
          'absolute bottom-0 flex w-full items-center justify-center gap-1 border-t-2 border-secondary p-3 hover:bg-sm-primary'
        }
      >
        <img src={logoutSvg} />
        <span className={'font-poppins font-medium'}>Logout</span>
      </button>
    </div>
  )
}

export default Navbar
