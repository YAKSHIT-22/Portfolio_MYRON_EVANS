import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
//icons imports
import myPurposeIcon from '../assets/Animations/icons animation/My Purpose/LottieJSON.json'
import myAmbitionIcon from '../assets/Animations/icons animation/My Ambition/LottieJSON.json'
import softwareDesignIcon from '../assets/Animations/icons animation/Software Design/LottieJSON.json'
import softwareDeveloperIcon from '../assets/Animations/icons animation/Software Development/LottieJSON.json'
import faceAnimation from '../assets/Animations/Face Animation/Preview.gif'
import imageBg from '../assets/svgs/img-bg.svg'
import section2Img from '../assets/images/Home Page/Section 2 img.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import Section4 from '../assets/images/Home Page/Section4.jpeg'

import { Experience } from '../assets/data'
import whatDrivesMe from '../assets/Animations/Title Animation/Home Page Desktop/What Drives me_/What Drives me.json'
import VerticalTime from '../components/VerticalTime'
import SkillsCard from '../components/SkillsCard'
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
        <h1 className="-mt-16 text-center text-main-heading">
          <p>The Synthesis of</p>
          <p>Technology and Design</p>
        </h1>
        <Link
          to="/my-work"
          className="mt-7 rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
        >
          Explore My Work
        </Link>
      </section>

      {/* Section 2 ~ What Drives Me*/}
      <section className="mt-24 w-full md:flex md:flex-wrap md:items-center md:justify-evenly">
        {/* Left Side ~ Text Side */}
        <div className="w-1/2">
          <div>
            <h3 className="bg-gradient bg-clip-text text-content-heading font-bold text-transparent">
              What drives me
            </h3>
            <h2 className="text-section-heading font-bold">
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
              <h2 className="mt-4 text-content-heading font-extrabold">
                My Ambition
              </h2>
              <p className="mt-4 text-body text-secondary">
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
              <p className="mt-4 text-body text-secondary">
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
          <h1 className="absolute -bottom-10 right-0 bg-gradient px-6 py-2 text-[1.5rem]">
            <p>Frontend Developer</p>
            <p>and Designer</p>
          </h1>
        </div>
      </section>

      {/* Section 3 ~ Vertical Timeline*/}
      <section>
        <div className='mt7'>
          <VerticalTimeline >
            {Experience && Experience.map((n) => (

              <VerticalTime date={n.date} subtitle={n.subtitle} title={n.title} description={n.description} id={n.id} key={n.id} />
            ))}
          </VerticalTimeline >
        </div>


      </section>

      {/* Section 4 ~ Share Div */}

      <section>
        <div className="mt-7 w-full flex justify-center items-center relative">
          {/* Background image div */}
          <div className='absolute left-auto right-auto w-5/6 inset-0 rounded-[2rem] h-[39rem] bg-no-repeat bg-center bg-cover opacity-40 duration-500 ease-in-out hover:opacity-20' style={{ backgroundImage: "url('/Section4.jpeg')" }} ></div>

          {/* Text content div  cerate it responsive for md */}

          <div className='relative z-10 h-[39rem] flex flex-col items-center justify-center mt-6rem ml-7rem text-white'>
            <h1 className='w-[42rem] text-5xl text-center'>Share my website and story with someone it can help</h1>
            <span className='w-[42rem] mt-[4rem]'>We all have struggles and failures in life, please share my website with anyone you believe my story can help. If you are inspired by my story and would like to support me, please contact me for a project, refer a client to me using my affiliate referral program, or visit my store, some of the proceeds from my store will go towards helping my freelance career grow and the rest will go to Bridging Tech and Tech Kids Unlimited. </span>
            <Link to="/my-work" className="hover:shadow-custom text-center w-fit h-15 mt-7 rounded-full bg-gradient px-10 py-3 transition-all">
              SHARE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 ~ Services */}
      <section className='mt-28'>
        <div className='Services-container flex flex-col justify-center items-center'>
          <div className='heading-container flex flex-col items-center w-[52rem]'>
            <h1 className="text-5xl leading-12">
              My <span className='px-2 bg-gradient'>Services</span>
            </h1>
            <p className='text-lg leading-6 gap-4 pt-4 text-[rgba(238, 238, 238, 0.7)]'>Throughout the years I have fostered skills that help me create interesting and unique projects. Check them out and see if I have a skill that could benefit you and your customers.</p>
          </div>
          <div className='Service-Cards-Holder flex justify-evenly'>
            <div className="Service-Card-1 flex flex-col justify-center h-fit w-[50rem] bg-primary shadow-2xl mx-16 my-28">
              <div className="flex flex-col items-center my-9 ">
                <div className='icon-holder-software bg-secondary rounded-xl  py-4 px-2 my-10  -top-40'>
                  <Lottie
                    title="Software Design"
                    options={defaultOptions(softwareDesignIcon)}
                    height={98}
                    width={115}
                    renderer={''}
                    isClickToPauseDisabled
                    style={{ margin: 0, cursor: 'unset' }}
                  />
                </div>
                <div className='service-content-wrapper flex flex-col items-center w-[25rem]'>
                  <h1 className='text-4xl my-9'>Software Design</h1>
                  <p className='text-lg'>UX/UI, UX Research, Wireframes, Design System Creation, Design Mockups, Design Prototypes, Animations Using Figma</p>
                </div>
              </div>
              <div className='h-20 w-100 bg-primary'></div>
              <div className='h-2 w-100 bg-gradient'></div>


            </div>
            <div className="Service-Card-2 h-fit w-[50rem] bg-primary shadow-2xl mx-16 my-28">
              <div className="flex flex-col items-center my-9 ">
                <div className='icon-holder-software bg-secondary rounded-xl py-4 px-2 my-10 -top-40'>
                  <Lottie
                    title="Software Development"
                    options={defaultOptions(softwareDeveloperIcon)}
                    height={98}
                    width={115}
                    renderer={''}
                    isClickToPauseDisabled
                    style={{ margin: 0, cursor: 'unset' }}
                  />
                </div>
                <div className='service-content-wrapper flex flex-col items-center w-[25rem]'>
                  <h1 className='text-4xl my-9'>Software Development</h1>
                  <p className='text-lg'> Cross Platform Apps, Apps for iOS,Android and Web, Full Stack Development, Mobile App Development, Web App Development.</p>
                </div>
              </div>
              <div className='h-20 w-100 bg-primary'></div>
              <div className='h-2 w-100 bg-gradient'></div>

            </div>
          </div>

        </div>
      </section>


      {/* Section 6 ~ Skills */}
      <section className='mt-20'>
        <div className='flex flex-col jsutify-center items-center'>
          <h1 className='text-5xl'> My <span className='bg-gradient px-3'>Skills</span></h1>
          <p className='text-lg font-sans w-5/6 mt-10'>Throughout the years I have fostered skills that help me create interesting and unique projects.  Check them out and see if I have a skill that could benefit you and your customers.</p>
          <div className='flex flex-col justify-items-start items-start w-5/6 mt-10 '>
            <h3 className='text-lg w-100 inline'>Full Stack Developer with:</h3>
            <div className='flex w-full'>
              <SkillsCard title="FLutter/Dart" percent={45} icon="icon" />
            </div>
          </div>
        </div>
      </section>

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
