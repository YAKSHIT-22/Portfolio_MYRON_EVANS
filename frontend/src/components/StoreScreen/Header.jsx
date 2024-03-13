import { Link } from 'react-router-dom'
import shoppingCartIcon from '../../assets/icons/shopping_cart.svg'
import Notification from './Notification.jsx'
import { useSelector } from 'react-redux'
import Button from '../ui/Button.jsx'
import LeftArrowIcon from '../../assets/svgs/LeftArrowIcon.jsx'

const Header = ({ totalQty, backButtonSmClass, shoppingCartSmClass }) => {
  const { products } = useSelector((state) => state.cart)
  const innerWidth = window.innerWidth

  return (
    <div
      className={'absolute flex w-full items-center justify-between md:static'}
    >
      {innerWidth >= 768 ? (
        <Button
          title={'Go Back'}
          className={'bg-sm-primary hover:bg-sm-primary/80'}
          onClick={() => history.back()}
        >
          <LeftArrowIcon />
        </Button>
      ) : (
        <button
          className={`ml-3 mt-2 flex items-center justify-center rounded-full bg-white/30 p-4 md:ml-0 md:mt-0 ${backButtonSmClass} `}
          onClick={() => history.back()}
        >
          <LeftArrowIcon />
        </button>
      )}
      <Link
        to={'/store/cart/'}
        className={`group mr-3 mt-1 flex items-center rounded-lg bg-white/30 px-2 py-3 transition-all hover:shadow-2xl md:mr-0 md:mt-0 md:bg-sm-primary ${shoppingCartSmClass}`}
        state={{ totalQty: totalQty }}
      >
        <img src={`${shoppingCartIcon}`} className={'mx-1'} />
        <p
          className={
            'mx-2 font-inter text-body font-[400] transition-all group-hover:bg-gradient group-hover:bg-clip-text group-hover:text-transparent'
          }
        >
          Shopping Cart
        </p>
        {products.length > 0 && (
          <Notification
            num={products.length}
            className={'mx-1 bg-gradient px-2 py-1 text-[10px]'}
          />
        )}
      </Link>
    </div>
  )
}

export default Header
