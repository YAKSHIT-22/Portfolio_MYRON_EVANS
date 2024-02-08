import React from 'react'

const SkillsCard = ({ title, icon, percent }) => {
    return (
        <div className='flex flex-col rounded-[1rem]  bg-[#333333] m-[1rem] w-[50%] px-5 py-5'>
            <div className='wrapper h-12 gap-3 '>
                <div className=" block w-fit text-lg font-sans  dark:text-white">{title}</div>
                <div className="flex flex-row gap-px">

                    <div className="w-[95%] progress-wrapper ">
                        <div className=" bg-[#4F4F4F] h-2.5 rounded-full" style={{ width: "100%" }}></div>
                        <div className="relative r-100 -top-2.5 bg-gradient h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className=" pl-2 relative -top-[5px] text-base font-thin  dark:text-white">{percent}%</div>


                </div>
            </div>
            <div className='Name-wraper flex h-10 pt-2  gap-8'>
                <div className='block w-fit'>Icon</div>
                <div className='px-5'>Level: <span className='bg-gradient px-1.5'>Advance</span></div>
            </div>
        </div>
    )
}

export default SkillsCard