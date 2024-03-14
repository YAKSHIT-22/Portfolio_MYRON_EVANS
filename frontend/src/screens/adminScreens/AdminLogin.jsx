import React from 'react'
// import heroImage from '../../assets/images/Home P    age'
import ME from '/assets/ME.png'
import MY from '/assets/MY.png'
import { Link } from 'react-router-dom'
const AdminLogin = () => {
    return (
        <div className='h-screen items-center w-full flex justify-center'>
            <div className='flex my-auto h-full justify-center  max-w-[150rem]'>
                <div className='w-1/2 mx-20 justify-center text my-auto'>
                    <div className='text-center'>
                        <h1 className='text-section-heading'> Welcome Back 👋</h1>
                        <p>We’re thrilled to have you back with us. Let the journey continue!</p>
                    </div>
                    <div className='flex flex-col justify-center text-center items-center my-20'>
                        <input className='bg-sm-primary outline-none placeholder-opacity-30 h-16 w-[36rem] px-4 rounded-lg my-10' placeholder='✉️Email' />
                        <input className='bg-sm-primary outline-none placeholder-opacity-30 h-16 w-[36rem] px-4 rounded-lg' placeholder='🛡️Password' />
                        <Link className='decoration-0 self-end text-base' style={{ textDecoration: "none !important" }}><p className='text-red-600 self-end mr-36 decoration-0'>Forgot Password?</p></Link>
                    </div>
                    <div className={'flex items-center justify-evenly '}>

                        <div
                            to="/my-work"
                            className="rounded-lg bg-gradient px-36 py-3 my-4 font-rubik font-light transition-all hover:font-small hover:shadow-custom hover:shadow-golden text-base"
                        >

                            Sign In

                        </div>
                    </div>

                </div>
                <div className='flex w-1/2'>
                    <div className='bg-no-repeat bg-contain absolute w-auto ' style={{ backgroundImage: "url(/assets/hero_img.png)", width: '-webkit-fill-available', height: '-webkit-fill-available' }}></div>
                    <div className='items-center align-middle flex flex-col my-20 mx-12'>
                        <img className='z-20' src={ME} />
                        <img className='z-20 my-10' src={MY} />
                        <div className='z-20 mx-28 flex flex-col text-center mt-36'>
                            <h1 className='text-section-heading'>Hello, Welcome!</h1>
                            <div className='h-[0.30rem] w-32 bg-white rounded-full  self-center mt-2'></div>
                            <div className='flex flex-wrap max-w-80 mx-8 mt-10'>
                                <p className='text-base '>Connecting Lives Through Design and Software </p>
                            </div>


                        </div>




                    </div>

                </div>


            </div>
        </div>
    )
}

export default AdminLogin