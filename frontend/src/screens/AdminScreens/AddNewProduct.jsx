import { useState, useEffect } from 'react'
import upload from '../../assets/svgs/upload.svg'
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
    <div>
      <div className="flex flex-col">
        <div className=""> --back Button--</div>
        <div className="mx-5 my-8 flex flex-col rounded-xl bg-sm-primary px-5 pb-12">
          <div className="mx-8 my-4">
            <h1 className="text-section-heading">
              Fill out the details of Product
            </h1>
            <p className="text-base">
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
            <div className="flex">
              {/* can be mapped with different availabale colours */}
              <div
                className="aspect-square rounded-2xl border-2  p-[1.4vw]"
                aria-label="S"
                id="sizeS"
              >
                S
              </div>
              <div
                className="ml-5 aspect-square  rounded-2xl  border-2 p-[1.4vw]"
                aria-label="M"
                id="sizeM"
              >
                M
              </div>
              <div
                className="ml-5 aspect-square  rounded-2xl  border-2 p-[1.4vw]"
                aria-label="L"
                id="sizeL"
              >
                L
              </div>
            </div>
          </div>
          <div className="mx-8 mt-4">
            <p className="mb-3 text-base">Select Colour</p>
            <div className="flex">
              {/* can be mapped with different availabale colours */}
              <div className="aspect-square h-[3.5vw] rounded-2xl bg-[#FF5858]"></div>
              <div className="ml-5 aspect-square h-[3.5vw] rounded-2xl bg-[#2A8CFF]"></div>
              <div className="ml-5 aspect-square h-[3.5vw] rounded-2xl bg-[#A4FF9C]"></div>
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
      </div>
    </div>
  )
}

export default AddNewProduct
