import Navbar from '../components/StoreScreen/Navbar.jsx'
import ProductCard from '../components/StoreScreen/ProductCard.jsx'
import { useSelector } from 'react-redux'
import Loading from '../components/ui/Loading.jsx'
import Message from '../components/ui/Message.jsx'

function StoreScreen() {
  const { loading, error, data } = useSelector((state) => state.products)
  const innerWidth = window.innerWidth

  return (
    <div className={'min-h-screen pt-16 md:pt-16'}>
      <h1 className={'text-center text-section-heading md:text-main-heading'}>
        My Store
      </h1>

      <p
        className={
          'mb-3 mt-4 px-6 text-center text-sm text-secondary md:mx-[16.5rem] md:mb-20 md:px-0 md:text-body'
        }
      >
        Welcome to my store and thank you for checking this page out. Feel free
        to browse and find something you like, some of the proceeds will go
        towards helping my freelance career grow and the rest will go to
        Bridging Tech and Tech Kids Unlimited.
      </p>

      <Navbar />

      <div
        className={
          'mx-auto flex max-w-6xl flex-wrap items-center justify-start gap-20 py-16 pl-7'
        }
      >
        {loading ? (
          <Loading className={'size-12'} />
        ) : error ? (
          <Message message={error} severity={'error'} />
        ) : data && data.length === 0 ? (
          <Message message={'No Products Found'} severity={'warning'} />
        ) : (
          data &&
          data.map((product) =>
            innerWidth >= 768 ? (
              <>
                <ProductCard key={product.id} data={product} />
              </>
            ) : (
              <></>
            ),
          )
        )}
      </div>
    </div>
  )
}

export default StoreScreen
