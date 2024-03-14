import { Link } from 'react-router-dom'

import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'

import '../../assets/css/Store Screen/ProductCard.css'
import rightArrowSvg from '../../assets/svgs/arrow.svg'

const ProductCard = ({ data }) => {
  // noinspection JSValidateTypes
  return (
    <div
      className={'w-full max-w-[335px] rounded-t-xl bg-secondary md:w-[28%]'}
    >
      <img
        src={`${DEV_BACKEND_URL}${data.images && data.images[0]?.image}`}
        className={'h-80 w-full rounded-t-xl bg-golden bg-contain px-1'}
      />

      <div className={'mx-4 flex justify-between pb-1 pt-4'}>
        <p className={'line-clamp-1 w-3/4 text-content-heading font-bold'}>
          {data.name}
        </p>
        <p className={'text-content-heading font-bold text-golden'}>
          ${data.price}
        </p>
      </div>

      <div
        id={'desc-button'}
        className={'flex items-center justify-center px-3 py-4 pb-3'}
      >
        <Link
          state={{ id: data.id }}
          to={'product/'}
          className={
            'flex w-full items-center justify-center bg-sm-primary py-4 text-center text-xl text-secondary transition-all hover:bg-gradient hover:text-primary'
          }
        >
          <span className={'mr-2 inline-block font-inter font-[400]'}>
            See more
          </span>
          <img src={rightArrowSvg} />
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
