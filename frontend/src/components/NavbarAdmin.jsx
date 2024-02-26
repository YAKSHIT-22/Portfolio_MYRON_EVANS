import React from 'react'
import { Link } from 'react-router-dom'
import cartDash from '../assets/svgs/cartDash.svg'
import EcomBoxes from '../assets/svgs/EcomBoxes.svg'
import blogboxes from '../assets/svgs/blogboxes.svg'
import RefferFunds from '../assets/svgs/RefferFundBoxes.svg'
const NavbarAdmin = () => {
    return (
        <div className='relative  min-h-screen flex'>

            <div className='bg-[#262626] w-44 text-base'>
                {/* <!-- logo --> */}
                <div>
                    logo
                </div>
                <nav>
                    <Link to="/createNewCase">
                        <div className='flex flex-row text-center py-2 5 px-4'>
                            <img src={cartDash} /><span className='px-2'>Dashboard</span></div>
                    </Link>
                    <Link to="/createNewCase">

                        <div className='flex flex-row py-2 5 px-4 border-t-black'>
                            <img src={EcomBoxes} /><span className='px-2'>E-comerce</span>
                        </div>

                    </Link>
                    <Link to="/createNewCase">

                        <div className='flex flex-row py-2 5 px-4'>
                            <img src={blogboxes} /><span className='px-2'>My Blogs</span>
                        </div>
                    </Link>
                    <Link to="/createNewCase">
                        <div className='flex flex-row py-2 5 px-4'>
                            <img src={RefferFunds} /><span className='px-2'>Reffer Funds</span>
                        </div>

                    </Link>

                </nav>

            </div>
            <div className='bg-sm-primary w-11/12 px-9 py-5 mx-5'>
                <h1 className=' text-section-heading'> Create New case study</h1>
                <p className='text-base'>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                <div className='py-4'>
                    <p className='text-base'>Title of Case study</p>
                    <input className='px-2 py-1 my-2 bg-sm-primary w-[100%] border-white focus:outline-none  border-[0.35px] rounded-md' type='text' placeholder='Write title Here' />
                </div>
                <div className='pt-4'>
                    <p className='text-base'>Simple Description</p>
                    <input className='px-2 py-1 my-2 bg-sm-primary w-[100%] border-white focus:outline-none  border-[0.35px] rounded-md' type='text' placeholder='Write description here' />
                </div>
                <div className='flex flex-row '>

                    <div className="flex items-center mb-4 pr-8">
                        <input id="default-checkbox" type="checkbox" value="" className="font-thin w-8 h-8 text-[secondary]  focus:accent-[#8d601d71] bg-gradient" />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>

                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className=" w-8 h-8 font-thin primary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-2 text-base font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                    </div>

                </div>
                <div className='flex justify-between'>
                    <div className='w-5/6'>
                        <p>Design</p>
                        <input className='w-[95%] h-14 rounded-xl px-4 bg-primary border-none outline-none text-secondary ' placeholder='Put Design URL' />
                    </div>

                    <div className=' w-5/6 items-start'>
                        <p>Development</p>
                        <input className='w-[95%] h-14 rounded-xl px-4 bg-primary border-none outline-none ' placeholder='Put Developement URL' />
                        

                    </div>



                </div>



            </div>
        </div>
    )
}

export default NavbarAdmin