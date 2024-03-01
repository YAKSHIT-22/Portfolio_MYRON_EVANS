import '../../assets/css/Store Screen/StoreNavbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [activeNavbarItem, setActiveNavbarItem] = useState('T-Shirts')

  const navbarItems = [
    'All',
    'T-Shirts',
    'Sweat Pants',
    'Sweaters',
    'Accessories',
  ]

  return (
    <nav className={'flex flex-wrap items-center bg-sm-primary py-3'}>
      <div
        className={
          'flex w-2/3 flex-wrap items-center border-b-2 border-b-golden border-opacity-25 bg-sm-primary md:ml-20'
        }
      >
        {navbarItems.map((item, idx) => (
          <div
            key={idx}
            id={'navbar-item'}
            className={`${item === activeNavbarItem && 'active'} hover:active cursor-pointer text-body`}
            onClick={() => setActiveNavbarItem(item)}
          >
            <p className={'px-8 py-2 font-medium'}>{item}</p>
          </div>
        ))}
      </div>
    </nav>
  )
}
export default Navbar
