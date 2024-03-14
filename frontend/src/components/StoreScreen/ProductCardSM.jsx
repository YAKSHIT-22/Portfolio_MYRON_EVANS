import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'
import { Link } from 'react-router-dom'
import rightArrowSvg from '../../assets/svgs/arrow.svg'

const ProductCardSm = ({ data }) => {
  return (
    <div
      className={
        'flex w-full items-start justify-start rounded-xl bg-primary px-4 py-6 md:hidden'
      }
    >
      <div
        className={
          'h-40 w-1/2 max-w-[157px] rounded-xl bg-golden bg-contain px-4 py-4'
        }
      >
        <img
          src={`${DEV_BACKEND_URL}${data.images && data.images[0]?.image}`}
          className={'h-full w-full rounded-xl'}
        />
      </div>

      <div
        className={
          'mx-4 flex w-1/2 flex-col items-start justify-start pb-1 pt-4 font-inter'
        }
      >
        <div className={'flex w-full items-center justify-between'}>
          <p className={'line-clamp-1 w-full font-inter text-xs font-medium'}>
            {data.name}
          </p>
          <p className={'text-xs font-bold text-golden'}>${data.price}</p>
        </div>

        <div className={'mt-4 line-clamp-3 text-xs text-secondary'}>
          {data.description}
        </div>

        <Link
          state={{ id: data.id }}
          to={'product/'}
          className={
            'mt-4 flex w-full items-center justify-center rounded-lg border border-gray-500 bg-transparent py-4 text-center text-xs text-secondary transition-all hover:bg-gradient hover:text-primary'
          }
        >
          <span className={'mr-2 inline-block font-inter font-[400]'}>
            See more
          </span>
          <img src={rightArrowSvg} className={'ml-4'} />
        </Link>
      </div>
    </div>
  )
}

export default ProductCardSm
