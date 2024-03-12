import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getAllProducts } from '../../redux/actions/ecommerce_store/productActions.js'

import '../../assets/css/Store Screen/StoreNavbar.css'
import filterIcon from '../../assets/icons/filter.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const innerWidth = window.innerWidth

  const [activeNavbarItem, setActiveNavbarItem] = useState(
    parseInt(localStorage.getItem('active_navbar_item')) || 0,
  )

  useEffect(() => {
    dispatch(getAllProducts(activeNavbarItem))
  }, [dispatch, activeNavbarItem])

  const navbarItems = [
    'All',
    'T-Shirts',
    'Sweat Pants',
    'Sweaters',
    'Accessories',
  ]

  return (
    <>
      <nav
        className={
          'flex flex-col items-start overflow-x-scroll bg-sm-primary py-3 md:w-full md:flex-row md:flex-wrap md:items-center md:justify-between md:overflow-x-hidden'
        }
      >
        <div
          className={
            'ml-6 flex w-[150%] items-center justify-start gap-2 overflow-x-auto bg-sm-primary md:ml-20 md:w-2/3 md:flex-wrap md:gap-0 md:border-b-2 md:border-b-golden md:border-opacity-25'
          }
        >
          {navbarItems.map((item, idx) => (
            <div
              key={idx}
              id={'navbar-item'}
              className={`${idx === activeNavbarItem && innerWidth >= 768 ? 'active' : idx === activeNavbarItem ? 'border-[#B79766] text-[#B79766]' : ''} cursor-pointer rounded-full border text-sm md:w-fit md:rounded-none md:border-none md:text-body`}
              onClick={() => {
                setActiveNavbarItem(idx)
                localStorage.setItem('active_navbar_item', idx)
              }}
            >
              <p className={'px-4 py-2 font-medium md:px-8'}>{item}</p>
            </div>
          ))}
        </div>
        <div
          className={
            'mt-0 hidden w-full max-w-32 cursor-pointer items-center justify-center rounded-lg bg-secondary py-4 md:mr-20 md:flex'
          }
        >
          <span className={'mr-2 text-body'}>Filter</span>
          <img src={filterIcon} />
        </div>
      </nav>

      <div
        className={
          'realtive flex w-full items-center justify-end pr-4 md:hidden'
        }
      >
        <div
          className={
            'flex w-full max-w-32 cursor-pointer items-center justify-center rounded-lg bg-secondary py-4'
          }
        >
          <span className={'mr-2 text-body'}>Filter</span>
          <img src={filterIcon} />
        </div>
        <div className={'absolute bottom-0'}></div>
      </div>
    </>
  )
}
export default Navbar
