import ME from '/assets/ME.png'
import MY from '/assets/MY.png'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="my-auto flex h-full max-w-[150rem]  justify-center">
        <div className="text mx-20 my-auto w-1/2 justify-center">
          <div className="text-center">
            <h1 className="text-section-heading"> Welcome Back 👋</h1>
            <p>
              We’re thrilled to have you back with us. Let the journey continue!
            </p>
          </div>
          <div className="my-20 flex flex-col items-center justify-center text-center">
            <input
              className="my-10 h-16 w-[36rem] rounded-lg bg-sm-primary px-4 placeholder-opacity-30 outline-none"
              placeholder="✉️Email"
            />
            <input
              className="h-16 w-[36rem] rounded-lg bg-sm-primary px-4 placeholder-opacity-30 outline-none"
              placeholder="🛡️Password"
            />
            <Link
              className="self-end text-base decoration-0"
              style={{ textDecoration: 'none !important' }}
            >
              <p className="mr-36 self-end text-red-600 decoration-0">
                Forgot Password?
              </p>
            </Link>
          </div>
          <div className={'flex items-center justify-evenly '}>
            <Link
              to="/my-work"
              className="hover:font-small my-4 rounded-lg bg-gradient px-36 py-3 font-rubik text-base font-light transition-all hover:shadow-custom hover:shadow-golden"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="flex w-1/2">
          <div
            className="absolute w-auto bg-contain bg-no-repeat "
            style={{
              backgroundImage: 'url(/assets/hero_img.png)',
              width: '-webkit-fill-available',
              height: '-webkit-fill-available',
            }}
          ></div>
          <div className="mx-12 my-20 flex flex-col items-center align-middle">
            <img className="z-20" src={ME} />
            <img className="z-20 my-10" src={MY} />
            <div className="z-20 mx-28 mt-36 flex flex-col text-center">
              <h1 className="text-section-heading">Hello, Welcome!</h1>
              <div className="mt-2 h-[0.30rem] w-32 self-center  rounded-full bg-white"></div>
              <div className="mx-8 mt-10 flex max-w-80 flex-wrap">
                <p className="text-base ">
                  Connecting Lives Through Design and Software{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
