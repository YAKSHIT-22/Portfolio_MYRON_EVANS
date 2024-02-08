import { Link } from 'react-router-dom'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import myPurposeIcon from '../assets/Animations/icons animation/My Purpose/LottieJSON.json'
import myAmbitionIcon from '../assets/Animations/icons animation/My Ambition/LottieJSON.json'
import faceAnimation from '../assets/Animations/Face Animation/Preview.gif'
import imageBg from '../assets/svgs/img-bg.svg'
import section2Img from '../assets/images/Home Page/Section 2 img.png'

import { Experience } from '../assets/data'

import VerticalTime from '../components/VerticalTime'
import SkillsCard from '../components/SkillsCard'
import AnimatedIcon from '../components/AnimatedIcon'

function HomeScreen() {
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
            <h2 className="text-section-heading font-extrabold">
              <p>Crafting stories through</p>
              <p>Development and Design</p>
            </h2>
          </div>

          <div className="w-full">
            <div className="mt-7">
              <AnimatedIcon iconData={myAmbitionIcon} height={42} width={70} />
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
              <AnimatedIcon iconData={myPurposeIcon} height={62} width={80} />
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
        <div className="mt7">
          <VerticalTimeline>
            {Experience &&
              Experience.map((n) => (
                <VerticalTime
                  key={n.id}
                  id={n.id}
                  date={n.date}
                  title1={n.title1}
                  title2={n.title2}
                  subtitle={n.subtitle}
                  description={n.description}
                />
              ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Section 4 ~ Share Div */}
      <section>
        <div className="relative mt-7 flex w-full items-center justify-center">
          {/* Background image div */}
          <div
            className="absolute inset-0 left-auto right-auto h-[35rem] w-5/6 rounded-3xl bg-cover bg-center bg-no-repeat opacity-40 duration-500 ease-in-out hover:opacity-20"
            style={{ backgroundImage: "url('/Section4.jpeg')" }}
          ></div>

          {/* Text content div  cerate it responsive for md */}

          <div className="pl-18 relative z-10 flex h-full flex-col items-center justify-center py-14 text-white">
            <h1 className="w-[42rem] text-center text-section-heading">
              Share my website and story with someone it can help
            </h1>
            <span className="mt-16 w-[42rem] text-body">
              We all have struggles and failures in life, please share my
              website with anyone you believe my story can help. If you are
              inspired by my story and would like to support me, please contact
              me for a project, refer a client to me using my affiliate referral
              program, or visit my store, some of the proceeds from my store
              will go towards helping my freelance career grow and the rest will
              go to Bridging Tech and Tech Kids Unlimited.{' '}
            </span>
            <Link
              to="/my-work"
              className="h-15 font-rubik mt-7 w-fit rounded-full bg-gradient px-10 py-3 text-center font-medium transition-all hover:shadow-custom hover:shadow-golden"
            >
              SHARE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 ~ Services */}
      <section className="mt-10"></section>

      {/* Section 6 ~ Skills */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl">
            {' '}
            My <span className="bg-gradient px-3">Skills</span>
          </h1>
          <p className="mt-10 w-5/6 font-sans text-lg">
            Throughout the years I have fostered skills that help me create
            interesting and unique projects. Check them out and see if I have a
            skill that could benefit you and your customers.
          </p>
          <div className="mt-10 flex w-5/6 flex-col items-start justify-items-start ">
            <h3 className="w-100 inline text-lg">Full Stack Developer with:</h3>
            <div className="flex w-full">
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
