import { useState } from 'react'
import { DEV_BACKEND_URL } from '../../redux/constants/backend_url.js'

import '../../assets/css/Store Screen/ImageGallery.css'

const ImageGallery = ({ images }) => {
  const [active, setActive] = useState(null)

  return images && images.length ? (
    <div className="flex w-full flex-col gap-2 md:w-fit md:gap-4">
      <div className="flex h-72 w-full items-center justify-center bg-golden pb-2 pt-20 md:h-[27rem] md:w-96 md:pt-0">
        <img
          className="h-full w-full object-contain"
          src={active || `${DEV_BACKEND_URL}${images[0].image}`}
          alt=""
        />
      </div>
      <div
        id={'image_gallery'}
        className="flex w-full gap-4 overflow-x-auto md:w-96"
      >
        {images.map((image_obj, index) => (
          <>
            <div
              key={index}
              className="h-20 w-1/5 min-w-[90px] rounded-lg bg-golden"
              onClick={() => setActive(`${DEV_BACKEND_URL}${image_obj?.image}`)}
            >
              <img
                src={`${DEV_BACKEND_URL}${image_obj?.image}`}
                className="h-full w-full max-w-full cursor-pointer rounded-lg bg-golden bg-cover object-contain"
                alt="gallery-image"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex h-72 w-full items-center justify-center bg-golden pt-16 md:h-[27rem] md:w-96 md:pt-0">
      <h1>No Images Provided</h1>
    </div>
  )
}

export default ImageGallery
