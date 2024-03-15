import { useState, useEffect } from 'react'
import upload from '../../assets/icons/upload.svg'
import { Link } from 'react-router-dom'

const AddNewProduct = () => {
  const [ProductDetials, setProductDetials] = useState({
    name: '',
    price: '',
    vendor: '',
    size: 'S',
    colour: '',
    description: '',
    images: '',
  })
  useEffect(() => {}, [ProductDetials.size, ProductDetials.colour])

  return (
    <div className="flex flex-col rounded-xl bg-sm-primary py-3">
      <div className="mx-8 my-4">
        <h1 className="text-content-heading">
          Fill out the details of Product
        </h1>
        <p className="font-poppins text-admin-nav-md">
          {' '}
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
      </div>
      <div className="mx-8">
        <p className="text-base">Name of the Product</p>
        <input
          className="my-1 h-12 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
          name="Name"
          placeholder="Title"
        />
      </div>

      <div className="mx-8 mt-4">
        <p className="text-base">Price</p>
        <input
          className="my-1 h-12 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
          name="Price"
          placeholder="Price"
        />
      </div>
      <div className="mx-8 mt-4">
        <p className="text-base">Vendor Name</p>
        <input
          className="my-1 h-12 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
          name="VendorName"
          placeholder="Vendor Name"
        />
      </div>
      <div className="mx-8 mt-4">
        <p className="mb-3 text-base">Size</p>
        <div className="flex items-center gap-5">
          {/* can be mapped with different availabale colours */}
          <div
            className="flex size-16 items-center justify-center rounded-2xl border-2"
            aria-label="S"
            id="sizeS"
          >
            S
          </div>
          <div
            className="flex size-16 items-center justify-center rounded-2xl border-2"
            aria-label="M"
            id="sizeM"
          >
            M
          </div>
          <div
            className="flex size-16 items-center justify-center rounded-2xl border-2"
            aria-label="L"
            id="sizeL"
          >
            L
          </div>
        </div>
      </div>
      <div className="mx-8 mt-4">
        <p className="mb-3 text-base">Select Colour</p>
        <div className="flex gap-5">
          {/* can be mapped with different availabale colours */}
          <div className="flex size-16 items-center justify-center rounded-2xl bg-[#FF5858]"></div>
          <div className="flex size-16 items-center justify-center rounded-2xl bg-[#2A8CFF]"></div>
          <div className="flex size-16 items-center justify-center rounded-2xl bg-[#A4FF9C]"></div>
        </div>
      </div>
      <div className="mx-8 mt-4">
        <p className="text-base">Description</p>
        <textarea
          className="my-1 h-44 w-full rounded-md border-[1px]  border-[#D4D4D4]  bg-sm-primary px-2  outline-none focus:outline-none"
          name="Description"
          placeholder="Description goes here"
        />
      </div>

      <div className="mx-8 mt-4 flex flex-col px-2">
        <div className="text-base"> Upload image of Product</div>
        <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">
          <img src={upload} />
        </div>
      </div>
      <div className={'flex items-center justify-evenly '}>
        <Link
          to="/my-work"
          className="hover:font-small my-8 rounded-lg bg-gradient px-24 py-3 font-rubik text-base font-light transition-all hover:shadow-custom hover:shadow-golden"
        >
          upload
        </Link>
      </div>
    </div>
  )
}

export default AddNewProduct
