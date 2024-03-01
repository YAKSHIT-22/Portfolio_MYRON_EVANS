/* eslint-disable */
import { useEffect, useState } from 'react'

import '../../assets/css/Store Screen/AddToCart.css'

const AddToCart = ({ price, qty }) => {
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(quantity * price)

  function handleBlur(e) {
    let productQty = parseInt(e.target.value)
    if (!isNaN(productQty)) {
      if (productQty > parseInt(qty)) {
        productQty = qty
      }
      setQuantity(productQty)
    } else {
      setQuantity(1)
    }
  }

  function handleChange(e) {
    let productQty = parseInt(e.target.value)
    if (!isNaN(productQty)) {
      if (productQty > parseInt(qty)) {
        productQty = qty
      }
      setQuantity(productQty)
    } else {
      setQuantity('')
    }
  }

  function handleIncrement() {
    setQuantity(Math.min(quantity + 1, qty))
  }

  function handleDecrement() {
    setQuantity(Math.max(quantity - 1, 1))
  }

  useEffect(() => {
    setTotal(quantity * price)
  }, [quantity])

  return (
    <div className={'flex flex-col md:flex-row'}>
      <button
        className={
          'mr-5 w-4/5 bg-gradient py-4 font-arial text-button font-bold text-white'
        }
      >
        Add to Cart - ${total}
      </button>
      <div className="flex w-1/5 items-center justify-between border border-white">
        <button
          type="button"
          className="rounded-l-md px-2 py-1 text-xs font-medium focus:outline-none"
          onClick={handleDecrement}
          disabled={quantity === 1}
        >
          -
        </button>
        <input
          type="number"
          className="w-full bg-transparent text-center focus:outline-none"
          value={quantity}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <button
          type="button"
          className="rounded-r-md px-2 py-1 text-xs font-medium focus:outline-none"
          onClick={handleIncrement}
          disabled={quantity === qty}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default AddToCart
