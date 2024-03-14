import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/actions/ecommerce_store/productActions.js'
import { useLocation } from 'react-router-dom'

import ImageGallery from '../components/StoreScreen/ImageGallery.jsx'
import AddToCart from '../components/StoreScreen/AddToCart.jsx'
import Header from '../components/StoreScreen/Header.jsx'
import Loading from '../components/ui/Loading.jsx'
import Message from '../components/ui/Message.jsx'

const ProductDetailScreen = () => {
  const location = useLocation()
  const { id } = location.state

  const dispatch = useDispatch()
  const { loading, data, error } = useSelector((state) => state.product_detail)

  const [sizeIdx, setSizeIdx] = useState(0)
  const [colorIdx, setColorIdx] = useState(0)
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const descRef = useRef(null)

  useEffect(() => {
    if (descRef.current) {
      console.log(descRef.current.scrollHeight, descRef.current.clientHeight)
      setShowReadMoreButton(
        descRef.current.scrollHeight !== descRef.current.clientHeight,
      )
    }
  }, [])

  useEffect(() => {
    dispatch(getProduct(id))
  }, [dispatch, id])

  useEffect(() => {
    setColorIdx(0)
  }, [sizeIdx])

  return (
    <div className={'min-h-screen pb-10 md:mx-20'}>
      {loading ? (
        <Loading className={'size-12'} />
      ) : error ? (
        <Message message={error} severity={'error'} />
      ) : (
        data && (
          <div className={'relative w-full md:static'}>
            <Header
              totalQty={
                data.variants[sizeIdx].color[colorIdx]?.count_of_product
              }
            />
            <div
              className={
                'flex flex-col items-start justify-start md:mt-10 md:flex-row '
              }
            >
              <ImageGallery
                images={data.variants[sizeIdx].color[colorIdx]?.images}
              />
              <div className={'mt-5 px-3 md:ml-10 md:mt-0 md:px-0'}>
                <div
                  className={
                    'flex items-center justify-between md:flex-col md:items-start'
                  }
                >
                  <h1
                    className={'text-content-heading md:text-section-heading'}
                  >
                    {data.name}
                  </h1>
                  <h3
                    className={
                      'bg-gradient bg-clip-text text-button text-transparent md:mt-3'
                    }
                  >
                    ${data.price}
                  </h3>
                </div>
                <div className={`mt-3`}>
                  <p
                    className={`${showFullDescription ? 'line-clamp-none' : 'line-clamp-3 md:line-clamp-6'} text-xs md:text-body`}
                    ref={descRef}
                  >
                    {data.description}
                  </p>
                  {showReadMoreButton && (
                    <button
                      className={
                        'inline bg-transparent text-sm font-bold  text-primary'
                      }
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                    >
                      Read {showFullDescription ? 'less' : 'more'}
                    </button>
                  )}
                </div>

                <p className={'mt-3'}>
                  by <span className={'font-bold'}>{data.provider.name}</span>
                </p>

                <div className={'mt-3'}>
                  <p className={'mb-2 font-bold'}>Size</p>
                  <div className={'flex items-center justify-start'}>
                    {data.variants.map((variant, index) => (
                      <button
                        key={index}
                        className={`mr-2 bg-sm-primary px-5 py-3 text-center text-body shadow-lg transition-all hover:scale-105 hover:font-bold hover:shadow-2xl ${index === sizeIdx && 'scale-105 font-bold shadow-2xl'}`}
                        onClick={() => setSizeIdx(index)}
                      >
                        {variant.size}
                      </button>
                    ))}
                  </div>
                </div>

                {data.variants[sizeIdx].color && (
                  <div className={'my-3'}>
                    <p className={'mb-2 text-secondary'}>Color</p>
                    <div className={'flex items-center justify-start'}>
                      {data.variants[sizeIdx].color.map((color, index) => (
                        <div
                          key={index}
                          className={`mr-2 h-16 w-16 cursor-pointer rounded-2xl text-center text-body shadow-lg ${index === colorIdx && 'border-2 border-white'}`}
                          style={{ backgroundColor: `#${color.color_code}` }}
                          onClick={() => setColorIdx(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}

                <AddToCart
                  price={data.price}
                  qty={data.variants[sizeIdx].color[colorIdx]?.count_of_product}
                  sizeIdx={sizeIdx}
                  colorIdx={colorIdx}
                  product={data}
                  showQtyElement={false}
                />

                <div
                  className={
                    'mt-3 flex items-center text-[14px] text-secondary'
                  }
                >
                  <p className={'mr-3'}>Free Standard Shipping</p>
                  <p className={'underline'}>Free Returns</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ProductDetailScreen
