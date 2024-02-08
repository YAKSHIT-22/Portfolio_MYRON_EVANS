import React from 'react'
import AnimatedIcon from './AnimatedIcon'

const ServiceCard = ({ id, title, icon, desc }) => {
    return (
        <div className='mt-12 w-[28%] h-[32rem] md:w-[28%] bg-primary shadow-2xl rounded-xl flex flex-col  items-center text-center '>
            <div className=' flex flex-col items-center text-center mt-16'>
                <div className='flex justify-center items-center icon-container w-28 h-28 bg-sm-primary  rounded-xl py-5'>
                    <AnimatedIcon iconData={icon}
                        width={72}
                        height={75}
                    />
                </div>

                <h1 className='text-content-heading text-center py-7'>{title}</h1>
                <p className='text-body px-6'>{desc}</p>
            </div>

        </div>
    )
}

export default ServiceCard