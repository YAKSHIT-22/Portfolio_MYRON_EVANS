import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'

import myPurposeIcon from '../assets/Animations/icons animation/My Purpose/LottieJSON.json'
import myAmbitionIcon from '../assets/Animations/icons animation/My Ambition/LottieJSON.json'
import faceAnimation from '../assets/Animations/Face Animation/Preview.gif'
import imageBg from '../assets/svgs/img-bg.svg'
import section2Img from '../assets/images/Home Page/Section 2 img.png'
import whatDrivesMe from '../assets/Animations/Title Animation/Home Page Desktop/What Drives me_/What Drives me.json'

function HomeScreen() {
  function defaultOptions(animationData) {
    return {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }
  }

  return (
    <div>
      {/* Section 1 ~ Face Animation */}
      <section className="flex flex-col items-center">
        <img
          src={faceAnimation}
          alt="Animated Face"
          className="-mt-16 w-[65%]"
        />
        <h1 className="text-main-heading -mt-16 text-center">
          <p>The Synthesis of</p>
          <p>Technology and Design</p>
        </h1>
        <Link
          to="/my-work"
          className="hover:shadow-custom hover:shadow-golden mt-7 rounded-full bg-gradient px-10 py-3 transition-all"
        >
          Explore My Work
        </Link>
      </section>

      {/* Section 2 ~ What Drives Me*/}
      <section className="mt-24 w-full md:flex md:flex-wrap md:items-center md:justify-evenly">
        {/* Left Side ~ Text Side */}
        <div className="w-1/2">
          <div>
            <h3 className="text-content-heading bg-gradient bg-clip-text text-transparent">
              What drives me
            </h3>
            <h2 className="text-section-heading">
              <p>Crafting stories through</p>
              <p>Development and Design</p>
            </h2>
          </div>

          <div className="w-full">
            <div className="mt-7">
              <Lottie
                title="My Ambition"
                options={defaultOptions(myAmbitionIcon)}
                height={52}
                width={80}
                renderer={''}
                isClickToPauseDisabled
                style={{ margin: 0, cursor: 'unset' }}
              />
              <h2 className="text-content-heading mt-4">My Ambition</h2>
              <p className="text-body mt-4 text-secondary">
                My ambition is to offer the pinnacle of perfect user centered
                software design and development to my clients. I aim to offer
                the best services and an outstanding experience to anyone who
                works with me. I have spent many years offering world class
                customer service in retail work environments, I strive to offer
                excellent service, I know how to satisfy my clients, and I’ll
                get to know what is best for yours.
              </p>
            </div>
            <div className="mt-7">
              <Lottie
                title="My Purpose"
                options={defaultOptions(myPurposeIcon)}
                height={80}
                width={80}
                renderer={''}
                isClickToPauseDisabled
                style={{ margin: 0, cursor: 'unset' }}
              />
              <h2 className="text-content-heading">My Purpose</h2>
              <p className="text-body mt-4 text-secondary">
                My purpose is to impact as many people as possible in a positive
                way through my faith in Jesus Christ, interactions, and work.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side ~ Image Side */}
        <div className="relative ml-24 mt-52 h-96 w-1/3">
          <img src={imageBg} className="absolute -right-4 -top-40" />
          <img src={section2Img} className="absolute -bottom-1" />
          <div className="absolute -bottom-7 right-0 bg-gradient px-4 py-2 text-[1.5rem]">
            <p>Frontend Developer</p>
            <p>and Designer</p>
          </div>
        </div>
      </section>

      {/* Section 3 ~ Vertical Timeline*/}
      <section></section>

      {/* Section 4 ~ Share Div */}
      <section></section>

      {/* Section 5 ~ Services */}
      <section></section>

      {/* Section 6 ~ Skills */}
      <section></section>

      {/* Section 7 ~ Core Values */}
      <section></section>

      {/* Section 8 ~ Carousel*/}
      <section></section>

      {/* Section 9 ~ Explore My Works */}
      <section></section>

      {/* Section 10 ~ Get in Touch */}
      <section></section>
    </div>
  )
}

export default HomeScreen
