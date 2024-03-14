import Header from '../components/StoreScreen/Header.jsx'
import CartItem from '../components/StoreScreen/CartItem.jsx'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Message from '../components/ui/Message.jsx'

const CartScreen = () => {
  const { products } = useSelector((state) => state.cart)

  const location = useLocation()
  const { totalQty } = location.state

  return (
    <div
      className={'relative min-h-screen w-full px-0 pb-10 md:static md:px-20'}
    >
      <Header
        totalQty={totalQty}
        backButtonSmClass={'bg-primary/100'}
        shoppingCartSmClass={'bg-primary/100'}
      />
      <div className={'px-4 pt-24 md:mt-10 md:pt-0'}>
        <div className={'mb-4'}>
          <h1
            className={
              'text-content-heading font-medium md:text-section-heading'
            }
          >
            Shopping Cart
          </h1>
          <h3
            className={'mt-1 font-publicsans text-xs font-light md:text-body'}
          >
            Not ready to checkout?{' '}
            <Link
              to={'/store'}
              className={
                'trannsition-all font-publicsans font-medium hover:underline'
              }
            >
              {' '}
              Continue Shopping
            </Link>
          </h3>
        </div>

        {products.length > 0 ? (
          <>
            <div className={'mb-7'}>
              {products.map((product, idx) => (
                <CartItem
                  key={idx}
                  product={product}
                  totalQty={totalQty}
                  className={idx < products.length - 1 && 'mb-4'}
                />
              ))}
            </div>

            <div className={'flex items-center justify-center'}>
              <Link
                to={'/store/checkout/'}
                className={'bg-gradient px-7 py-3 font-publicsans font-medium'}
              >
                Proceed To Checkout
              </Link>
            </div>
          </>
        ) : (
          <Message
            message={'Your cart is empty'}
            className={'min-h-lvh'}
          ></Message>
        )}
      </div>
    </div>
  )
}

export default CartScreen
