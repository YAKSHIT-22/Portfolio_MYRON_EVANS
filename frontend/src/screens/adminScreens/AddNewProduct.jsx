import { useState,useEffect } from 'react'
import upload from '../../assets/svgs/upload.svg'
const AddNewProduct = () => {


    const [ProductDetials, setProductDetials] = useState({
        name: "",
        price: "",
        vendor: "",
        size: "S",
        colour: "",
        description:"",
        images: "",

    })
    useEffect(()=>{
        

    },[ProductDetials.size,ProductDetials.colour])

    return (
        <div>
            <div className='flex flex-col'>
                <div className='' > --back Button-- </div>
                <div
                    className='mx-5 my-8 bg-sm-primary flex flex-col px-5 pb-12 rounded-xl'
                >
                    <div className='mx-8 my-4'>
                        <h1 className='text-section-heading'>Fill out the details of Product</h1>
                        <p className='text-base'> Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
                    </div>
                    <div className='mx-8'>
                        <p className='text-base'>Name of the Product</p>
                        <input className='bg-sm-primary outline-none focus:outline-none border-[1px] border-[#D4D4D4]  w-full  rounded-md h-12  px-2 my-1' name='Name' placeholder='Title' />
                    </div>

                    <div className='mx-8 mt-4'>
                        <p className='text-base'>Price</p>
                        <input className='bg-sm-primary outline-none focus:outline-none border-[1px] border-[#D4D4D4]  w-full  rounded-md h-12  px-2 my-1' name='Price' placeholder='Price' />
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='text-base'>Vendor Name</p>
                        <input className='bg-sm-primary outline-none focus:outline-none border-[1px] border-[#D4D4D4]  w-full  rounded-md h-12  px-2 my-1' name='VendorName' placeholder='Vendor Name' />
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='text-base mb-3'>Size</p>
                        <div className='flex'>
                            {/* can be mapped with different availabale colours */}
                            <div className='p-[1.4vw] aspect-square border-2  rounded-2xl' aria-label='S' id="sizeS">S</div>
                            <div className='p-[1.4vw] aspect-square  border-2  rounded-2xl ml-5' aria-label='M' id="sizeM">M</div>
                            <div className='p-[1.4vw] aspect-square  border-2  rounded-2xl ml-5' aria-label='L' id="sizeL">L</div>
                        </div>
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='text-base mb-3'>Select Colour</p>
                        <div className='flex'>
                            {/* can be mapped with different availabale colours */}
                            <div className='h-[3.5vw] aspect-square bg-[#FF5858] rounded-2xl' ></div>
                            <div className='h-[3.5vw] aspect-square bg-[#2A8CFF] rounded-2xl ml-5'></div>
                            <div className='h-[3.5vw] aspect-square bg-[#A4FF9C] rounded-2xl ml-5'></div>


                        </div>
                    </div>
                    <div className='mx-8 mt-4'>
                        <p className='text-base'>Description</p>
                        <textarea className='bg-sm-primary outline-none focus:outline-none border-[1px] border-[#D4D4D4]  w-full  rounded-md h-44  px-2 my-1' name='Description' placeholder='Description goes here' />
                    </div>

                    <div className="flex flex-col mx-8 px-2 mt-4">
                        <div className="text-base"> Upload image of Product</div>
                        <div className="mt-4 flex h-[17rem] cursor-pointer items-center justify-center rounded-xl border border-white bg-[#3F3F3F]">

                            <img src={upload} />

                        </div>
                    </div>
                    <div className={'flex items-center justify-evenly '}>

                        <div
                            to="/my-work"
                            className="rounded-lg bg-gradient px-24 py-3 my-8 font-rubik font-light transition-all hover:font-small hover:shadow-custom hover:shadow-golden text-base"
                        >

                            upload

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AddNewProduct