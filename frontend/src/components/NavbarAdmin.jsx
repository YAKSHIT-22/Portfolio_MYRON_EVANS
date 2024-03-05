import { Link } from 'react-router-dom'
import cartDash from '../assets/svgs/cartDash.svg'
import EcomBoxes from '../assets/svgs/EcomBoxes.svg'
import blogboxes from '../assets/svgs/blogboxes.svg'
import RefferFunds from '../assets/svgs/RefferFundBoxes.svg'
import upload from '../assets/svgs/upload.svg'
import downArrow from '../assets/svgs/downArrow.svg'

const NavbarAdmin = () => {
  return (
    <div className="relative  flex min-h-screen">
      <div className="w- min-h-screen bg-[#262626] text-base">
        {/* <!-- logo --> */}
        <div className="flex flex-col justify-center text-center align-middle">
          <div
            className="aspect-square w-40 self-center rounded-full bg-contain bg-center bg-blend-normal"
            style={{
              backgroundImage: "url('../../public/assets/Section 9.png')",
            }}
          >
            {/* Logo */}
          </div>
          <p className="text-content-heading ">Myron Evans</p>
          <p className="text-base">Admin</p>
        </div>
        <nav className="flex w-64 flex-col">
          <div className="w-9/11 flex px-4  py-7 text-center">
            <Link to="/createNewCase" className="flex flex-row">
              <img src={cartDash} />
              <span className="px-2">Dashboard</span>
            </Link>
            <img src={downArrow} className="w-2/11 block" />
          </div>

          <div className="flex  border-t-black  px-4 py-7">
            <Link to="/createNewCase" className="flex flex-row">
              <img src={EcomBoxes} />
              <span className="px-2">E-comerce </span>
            </Link>
            <img src={downArrow} />
          </div>

          <div className="flex px-4  py-7">
            <Link to="/createNewCase" className="flex flex-row">
              <img src={blogboxes} />
              <span className="px-2">My Blogs </span>
            </Link>

            <img src={downArrow} />
          </div>
          <div className="flex px-4  py-7">
            <Link to="/createNewCase" className="flex flex-row">
              <img src={RefferFunds} />
              <span className="px-2">Reffer Funds </span>
            </Link>

            <img src={downArrow} />
          </div>
        </nav>
      </div>
      <div className="mx-5 w-11/12 bg-sm-primary px-9 py-5">
        <h1 className=" text-section-heading"> Create New case study</h1>
        <p className="text-base">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
        <div className="py-4">
          <p className="text-base">Title of Case study</p>
          <input
            className="my-2 w-[100%] rounded-md border-[0.35px] border-white bg-sm-primary px-2  py-1 focus:outline-none"
            type="text"
            placeholder="Write title Here"
          />
        </div>
        <div className="pt-4">
          <p className="text-base">Simple Description</p>
          <input
            className="my-2 w-[100%] rounded-md border-[0.35px] border-white bg-sm-primary px-2  py-1 focus:outline-none"
            type="text"
            placeholder="Write description here"
          />
        </div>
        <div className="flex flex-row ">
          <div className="mb-4 flex items-center pr-8">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-8 w-8 bg-gradient font-thin  text-[secondary] focus:accent-[#8d601d71]"
            />
            <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">
              Default checkbox
            </label>
          </div>

          <div className="mb-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="primary h-8 w-8 rounded border-gray-300 bg-gray-100 px-3 font-thin focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">
              {' '}
              checkbox
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-5/6">
            <p className="self-auto px-2 py-1">Design</p>
            <input
              className="h-14 w-[95%] rounded-xl border-none bg-primary px-4 text-secondary outline-none "
              placeholder="Put Design URL"
            />
          </div>

          <div className=" w-5/6 items-start">
            <p className="self-auto px-2 py-1">Development</p>
            <input
              className="h-14 w-[95%] rounded-xl border-none bg-primary px-4 outline-none "
              placeholder="Put Developement URL"
            />
          </div>
        </div>
        <div className="flex flex-col px-2 pt-10">
          <div className="text-base"> Upload mockup Image</div>
          <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">
            <img src={upload} />
          </div>
        </div>
        <div className="flex flex-col px-2 pt-10">
          <div className="text-base"> Upload Design Case Study</div>
          <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">
            <img src={upload} />
          </div>
        </div>
        <div className="flex flex-col px-2 pt-10">
          <div className="text-base"> Upload Development Case Study</div>
          <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">
            <img src={upload} />
          </div>
        </div>
        <div className="flex justify-center">
          <Link className="mt-10">
            <div className=" w-64 rounded-md bg-gradient px-3 py-3 text-center font-rubik font-medium">
              {' '}
              Preview
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarAdmin
