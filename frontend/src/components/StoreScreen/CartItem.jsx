import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'
import QuantityField from './QuantityField.jsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/ecommerce_store/productActions.js'

const CartItem = ({ product, totalQty, className }) => {
  const [quantity, setQuantity] = useState(product.quantity)

  const dispatch = useDispatch()

  function handleRemoveItem(product) {
    dispatch(removeFromCart(product))
  }

  return (
    <div
      className={`flex h-48 max-h-[143px] items-center justify-between bg-sm-primary px-3 py-3 ${className}`}
    >
      <div className={'flex h-full items-start'}>
        <div
          className={
            'mr-3 h-full max-h-[133px] bg-golden md:w-full md:max-w-[120px]'
          }
        >
          <img
            src={`${DEV_BACKEND_URL}${product.image}`}
            className={'h-full w-full'}
          />
        </div>
        <div>
          <h1 className={'font-publicsans text-cart-item-heading font-medium'}>
            {product.name}
          </h1>
          <div className={'my-2'}>
            <p className={'font-publicsans text-cart-item-text'}>
              Size:{' '}
              {product.size && product.size.size ? product.size.size : 'Error'}
            </p>
            <div
              className={
                'flex items-center font-publicsans text-cart-item-text'
              }
            >
              Quantity:{' '}
              <QuantityField
                quantity={quantity}
                setQuantity={setQuantity}
                qty={parseInt(totalQty)}
                setCartWhenUsingButtons
                product={product}
                hidden={false}
                className={'ml-2 w-2/4 border-none md:w-1/3'}
              />
            </div>
          </div>
          <h1 className={'font-publicsans text-cart-item-heading font-medium'}>
            ${product.total}
          </h1>
        </div>
      </div>
      <div className={'flex h-full items-end justify-center'}>
        <button
          className={'underline hover:font-medium'}
          onClick={() => handleRemoveItem(product)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
