import React from 'react'
import heroImage from '../../assets/images/Home Page/hero_img.png'
const AdminLoginScreen = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'></div>
            <div className='w-1/2 flex'>
                <div className='bg-image-holder opacity-60 absolute z-10' style={{ backgroundImage: heroImage }}></div>
                <div className='z-20 flex flex-row ' style={{ backgroundImage: heroImage }}></div>

            </div>

        </div>
    )
}

export default AdminLoginScreen