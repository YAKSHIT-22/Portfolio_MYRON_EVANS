import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import { useInView, animated, useSpring } from '@react-spring/web'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import locomotiveScroll from 'locomotive-scroll'

import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import myPurposeIcon from '../assets/Animations/icons animation/My Purpose/LottieJSON.json'
import myAmbitionIcon from '../assets/Animations/icons animation/My Ambition/LottieJSON.json'
import glassIcon from '../assets/Animations/icons animation/Glass icon/Glass_icon_V03_02.json'
import softwareDesignIcon from '../assets/Animations/icons animation/Software Design/LottieJSON.json'
import softwareDeveloperIcon from '../assets/Animations/icons animation/Software Development/LottieJSON.json'

import mt1 from '../assets/Animations/Face Animation/myron transparent bg 1.gif'
import mt2 from '../assets/Animations/Face Animation/myron transparent bg 1_2.gif'

import imageBg from '../assets/svgs/img-bg.svg'
import section2Img from '../assets/images/Home Page/Section 2 img.png'
import section9Img from '../assets/images/Home Page/Section 9.png'
import heroImg from '../assets/images/Home Page/hero_img.png'

import experienceData from '../data/experience.json'
import skillsData from '../data/skills.js'
import values from '../data/services.js'

import VerticalTime from '../components/HomeScreen/VerticalTime.jsx'
import SkillsCard from '../components/HomeScreen/SkillsCard.jsx'
import AnimatedIcon from '../components/Icons/AnimatedIcon.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Carousel from '../components/HomeScreen/Carousel.jsx'

gsap.registerPlugin(ScrollTrigger)

function HomeScreen() {
  const [scrolled, setScroll] = useState(30)
  const [innerHeight] = useState(window.innerHeight)
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  const images = []
  const imageSeq = {
    frame: scrolled,
  }
  const frameCount = 802
  const files = (i) => `/Animation/${i}.png`

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    const { width, height } = container.getBoundingClientRect()

    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')

    const locoScroll = new locomotiveScroll({
      el: canvas,
      smooth: true,
    })

    locoScroll.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(canvas, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: container.style.transform ? 'transform' : 'fixed',
    })

    locoScroll.update()
    ScrollTrigger.refresh()
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      img.src = files(i)
      images.push(img)
    }

    images[30].onload = render

    function render() {
      scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
      const canvas = ctx.canvas
      const hRatio = canvas.width / img.width
      const vRatio = canvas.height / img.height
      const ratio = Math.max(hRatio, vRatio)
      const centerShift_x = (canvas.width - img.width * ratio) / 2
      const centerShift_y = (canvas.height - img.height * ratio) / 2
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio,
      )
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.5,
        trigger: container,
        start: 'top top',
        end: '600% top',
        scroller: locoScroll.scrollContainer,
      },
      onUpdate: render,
    })
  }, [containerRef.current])

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      const { width, height } = container.getBoundingClientRect()
      console.log(width, height)
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [scrolled])

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollLen = Math.ceil(((scrollPx / winHeight) * 100) / 0.11) + 80

    if (scrollLen > 310) {
      setScroll(0)
      const divtoHide = document.getElementById('faceContainer')
      divtoHide.style.opacity = 0
      divtoHide.style.display = 'none'
      divtoHide.style.transition = 'opacity 0.3s ease-in-out'
      canvasRef.current.style.opacity = 0
      canvasRef.current.style.display = 'none'
      canvasRef.current.style.transition = 'opacity 0.3s ease-in-out'
    } else if (scrollLen <= 30) {
      const divtoHide = document.getElementById('faceContainer')
      divtoHide.style.display = 'block'
      divtoHide.style.opacity = 1
      divtoHide.style.transition = 'opacity 0.3s ease-in-out'
      canvasRef.current.style.display = 'block'
      canvasRef.current.style.opacity = 0
      canvasRef.current.style.transition = 'opacity 0.3s ease-in-out'
    } else {
      const divtoHide = document.getElementById('faceContainer')
      divtoHide.style.opacity = 0
      divtoHide.style.display = 'none'
      divtoHide.style.transition = 'opacity 0.3s ease-in-out'
      canvasRef.current.style.display = 'block'
      canvasRef.current.style.opacity = 1
      canvasRef.current.style.transition = 'opacity 0.3s ease-in-out'
      setScroll(scrollLen)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollProgress)

    return () => window.removeEventListener('scroll', scrollProgress)
  }, [scrolled])

  const [refSynth, SyhtnSprings] = useInView(() => ({
    from: {
      y: 60,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
    config: {
      duration: 500,
      tension: 120,
    },
  }))

  const [refTextSpring, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const [refTextSpring1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const textSprings = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(100%)' : 'translateX(0)',
    config: { duration: 2000 },
  })
  const textSprings1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateX(100%)' : 'translateX(0)',
    config: { duration: 2000 },
  })

  const interpolatedOpacity = textSprings.transform.to(
    (translateX) => 1 - Math.abs(parseFloat(translateX)) / 100,
  )

  const interpolatedOpacity1 = textSprings1.transform.to(
    (translateX) => 1 - Math.abs(parseFloat(translateX)) / 100,
  )
  const [refAmbition, ambitionSprings] = useInView(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 400,
      mass: 10,
      precision: 0.3,
    },
  }))
  const [refPurpose, purposeSprings] = useInView(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 400,
      mass: 10,
      precision: 0.3,
    },
  }))

  const [refShare, shareSprings] = useInView(() => ({
    from: {
      y: -40,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },

    config: {
      tension: 100,
      mass: 2,
    },
    duration: 2000,
  }))

  const [refs2, fromRight] = useInView(() => ({
    from: {
      x: 150,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    duration: 2000,
  }))
  const [refService, serviceSprings] = useInView(() => ({
    from: {
      y: -80,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },

    config: {
      tension: 100,
      mass: 2,
    },
    duration: 2000,
  }))

  return (
    <>
      {/* Section 1 ~ Face Animation */}
      <section className="flex w-full flex-col items-center md:px-10">
        <div
          className={`relative hidden justify-center scroll-smooth md:flex`}
          style={{
            height: innerHeight <= 585 ? innerHeight * 8 : innerHeight * 5.5,
          }}
        >
          <img
            ref={containerRef}
            style={{ transform: 'none !important' }}
            className="fixed bottom-0 -z-0 h-full opacity-0 will-change-transform"
            src={`Animation/${scrolled}.png`}
            alt=""
          />
          <canvas
            className="fixed top-12 h-full !transform-none"
            ref={canvasRef}
          ></canvas>

          <animated.div
            className="align-center fixed mt-9 flex justify-center border"
            style={{
              height: innerHeight - 210,
              width: window.innerWidth - 400,
            }}
            id="faceContainer"
          >
            <img src={mt2} className="z-10 mr-10 h-full w-full" />
            <img src={mt1} className="z-10 ml-10 h-full w-full" />
          </animated.div>
        </div>

        <div className={'mb-12 mt-16 size-72 md:hidden'}>
          <img src={heroImg} className={'h-full w-full'} />
        </div>

        <animated.h1
          className="text-center text-content-heading md:text-main-heading"
          ref={refSynth}
          style={SyhtnSprings}
        >
          <p>The Synthesis of</p>
          <p>Technology and Design</p>
        </animated.h1>
        <Link
          to="/my-work"
          className="mt-7 rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
        >
          Explore My Work
        </Link>
      </section>

      {/* Section 2 ~ What Drives Me*/}
      <section className="mt-24 flex w-full flex-col items-center px-8 md:flex-row md:flex-wrap md:items-start md:justify-evenly md:px-10">
        {/* Left Side ~ Text Side */}
        <div className="md:w-1/2">
          <animated.div>
            <animated.h3 className="bg-gradient bg-clip-text text-center text-body font-bold text-transparent md:text-start md:text-content-heading">
              What drives me
            </animated.h3>
            <animated.h2
              className="text-center text-content-heading font-extrabold md:text-start md:text-section-heading"
              style={fromRight}
              ref={refs2}
            >
              <p>Crafting stories through</p>
              <p>Development and Design</p>
            </animated.h2>
          </animated.div>

          <div className="w-full max-w-[40rem]">
            <div className="mt-7">
              <div className={'flex flex-col items-center md:items-start'}>
                <AnimatedIcon
                  iconData={myAmbitionIcon}
                  className={'h-20 w-24'}
                />

                <animated.h2
                  className="mt-4 text-content-heading font-extrabold"
                  ref={refAmbition}
                  style={ambitionSprings}
                >
                  My Ambition
                </animated.h2>
              </div>
              <animated.p
                className="mt-4 text-body text-secondary"
                style={ambitionSprings}
              >
                My ambition is to offer the pinnacle of perfect user centered
                software design and development to my clients. I aim to offer
                the best services and an outstanding experienceData to anyone
                who works with me. I have spent many years offering world class
                customer service in retail work environments, I strive to offer
                excellent service, I know how to satisfy my clients, and I’ll
                get to know what is best for yours.
              </animated.p>
            </div>
            <div className="mt-7">
              <div className={'flex flex-col items-center md:items-start'}>
                <AnimatedIcon
                  iconData={myPurposeIcon}
                  className={'h-20 w-24'}
                />
                <animated.h2
                  className="text-content-heading"
                  ref={refPurpose}
                  style={purposeSprings}
                >
                  My Purpose
                </animated.h2>
              </div>
              <animated.p
                className="mt-4 text-body text-secondary"
                ref={refPurpose}
                style={purposeSprings}
              >
                My purpose is to impact as many people as possible in a positive
                way through my faith in Jesus Christ, interactions, and work.
              </animated.p>
            </div>
          </div>
        </div>

        {/* Right Side ~ Image Side */}
        <div className="relative mt-12 h-96 max-h-96 w-full md:ml-24 md:w-1/3 ">
          <img src={imageBg} className="absolute right-0 top-0" />
          <img src={section2Img} className="absolute right-6 top-7 h-full" />
          <animated.h1 className="absolute -bottom-10 right-0 bg-gradient px-6 py-2 text-[1.5rem]">
            <p>Frontend Developer &amp;</p>
            <p>Design Enthusiast</p>
          </animated.h1>
        </div>
      </section>
      {/* </ParallaxLayer> */}

      {/* Section 3 ~ Vertical Timeline*/}
      <section className="mt-48 md:mt-24 md:px-10">
        <div className={'w-full'}>
          <h1
            className={
              'text-center text-content-heading md:text-section-heading'
            }
          >
            Educational and Professional{' '}
            <span className={'bg-gradient px-2'}>Timeline Story</span>
          </h1>
          <p
            className={
              'mx-auto mt-2 text-center text-body text-secondary md:max-w-3xl'
            }
          >
            I have been writing code for longer than I have been designing, but
            here is a visual representation of my educational and professional
            story. I hit a few road blocks, but with perseverance, I made it.{' '}
          </p>
        </div>
        <div className="mt-32">
          <VerticalTimeline>
            {experienceData &&
              experienceData.map((n) => (
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
      <section className="mt-24  md:px-10">
        <div className="relative mt-7 flex w-full items-center justify-center">
          {/* Background image div */}
          <div
            className="absolute inset-0 left-auto right-auto h-[36ren] w-5/6 rounded-3xl bg-cover bg-center bg-no-repeat opacity-40 duration-500 ease-in-out hover:opacity-20 md:h-[35rem] md:max-h-[35rem]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Section4.jpeg')",
            }}
          ></div>

          {/* Text content div  cerate it responsive for md */}

          <animated.div
            className="relative z-10 flex h-full flex-col items-center justify-center px-16 py-14 text-white"
            ref={refShare}
            style={shareSprings}
          >
            <h1 className="w-full max-w-2xl text-center text-content-heading md:text-section-heading">
              Share my website and story with someone it can help
            </h1>
            <span className="mt-10 w-full max-w-2xl text-[14px] text-secondary md:text-body">
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
              className="h-15 mt-7 w-fit rounded-full bg-gradient px-10 py-3 text-center font-rubik font-medium transition-all hover:shadow-custom hover:shadow-golden"
            >
              SHARE NOW
            </Link>
          </animated.div>
        </div>
      </section>

      {/* Section 5 ~ Services */}
      <section className="mt-24 md:flex md:flex-col md:items-center md:justify-center md:px-10">
        <div className="relative flex items-center justify-center">
          <animated.div
            ref={refTextSpring}
            style={{
              opacity: interpolatedOpacity.opacity,
              transform: textSprings.transform,
            }}
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-sm-primary md:bg-primary"
          ></animated.div>
          <h1 className="text-content-heading md:text-section-heading">
            <span className={'mr-1'}>My</span>
            <p className="inline bg-gradient px-2 ">Services</p>
          </h1>
        </div>
        <p className="max-w-3xl px-6 pt-4 text-center text-[14px] font-[300] text-secondary md:px-0">
          Throughout the years I have fostered skills that help me create
          interesting and unique projects. Check them out and see if I have a
          skill that could benefit you and your customers.
        </p>
        <div className="item-center flex w-full flex-col items-center px-6 md:flex-row md:justify-evenly md:px-0">
          <div className="mb-4 mt-8 h-fit w-full bg-primary shadow-2xl md:mx-8 md:my-16 md:w-1/2 md:bg-sm-primary">
            <div className="my-9 flex flex-col items-center pb-[6.7rem]">
              <div className="my-10 rounded-xl bg-sm-primary p-2 md:bg-primary">
                <AnimatedIcon
                  iconData={softwareDesignIcon}
                  className={'h-24 w-28'}
                />
              </div>
              <animated.div
                className="w-full"
                ref={refService}
                style={serviceSprings}
              >
                <h1 className="my-9 text-center text-content-heading">
                  Software Design
                </h1>
                <p
                  className={
                    'mx-auto max-w-sm px-3 text-center text-body text-secondary md:px-0'
                  }
                >
                  UX/UI, UX Research, Wireframes, Design System Creation, Design
                  Mockups, Design Prototypes, Animations Using Figma
                </p>
              </animated.div>
            </div>
            <div className="w-100 h-2 bg-gradient"></div>
          </div>
          <div className="mb-8 mt-4 h-fit w-full bg-primary shadow-2xl md:mx-8 md:my-16 md:w-1/2 md:bg-sm-primary">
            <div className="my-9 flex flex-col items-center pb-[6.7rem]">
              <div className="icon-holder-software -top-40 my-10 rounded-xl bg-sm-primary p-2 md:bg-primary">
                <AnimatedIcon
                  iconData={softwareDeveloperIcon}
                  className={'h-24 w-28'}
                />
              </div>
              <animated.div
                className="service-content-wrapper flex w-full flex-col items-center"
                ref={refService}
                style={serviceSprings}
              >
                <h1 className="my-9 text-center text-content-heading">
                  Software Development
                </h1>
                <p className="mx-auto max-w-sm px-3 text-center text-body text-secondary md:px-0">
                  Cross Platform Apps, Apps for iOS, Android and Web, Full Stack
                  Development, Mobile App Development, Web App Development.
                </p>
              </animated.div>
            </div>
            <div className="w-100 h-2 bg-gradient"></div>
          </div>
        </div>
      </section>

      {/* Section 6 ~ Skills */}
      <section className="mt-24 md:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <animated.div
              ref={refTextSpring1}
              style={{
                opacity: interpolatedOpacity1,
                transform: textSprings1.transform,
              }}
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-sm-primary md:bg-primary"
            ></animated.div>
            <h1 className="text-content-heading md:text-section-heading">
              My <span className="bg-gradient px-3">Skills</span>
            </h1>
          </div>
          <p
            className={
              'mt-2 max-w-3xl px-6 text-center text-[14px] text-secondary md:px-0 md:text-body'
            }
          >
            Throughout the years I have fostered skills that help me create
            interesting and unique projects. Check them out and see if I have a
            skill that could benefit you and your customers.
          </p>
          <div className="mt-16 flex w-full flex-col items-center justify-start md:items-start ">
            <h3 className="text-content-heading font-bold">
              Full Stack Developer with:
            </h3>
            <div className="mt-4 flex w-full flex-col items-center justify-start gap-5 px-4 md:flex-row md:flex-wrap md:gap-0">
              {skillsData.fsdSkills.map((skill) => (
                <SkillsCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  percent={skill.percent}
                  icon={skill.icon}
                  altText={skill.altText}
                />
              ))}
            </div>
          </div>
          <div className="mt-16 flex w-full flex-col items-center justify-start md:items-start ">
            <h3 className="text-content-heading font-bold">As a Designer:</h3>
            <div className="mt-4 flex w-full flex-col items-center justify-start gap-5 px-4 md:flex-row md:flex-wrap md:gap-0">
              {skillsData.designSkills.map((skill) => (
                <SkillsCard
                  key={skill.id}
                  id={skill.id}
                  title={skill.title}
                  percent={skill.percent}
                  icon={skill.icon}
                  altText={skill.altText}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 ~ Core Values */}
      <section className="mt-24 flex w-[100%] flex-col bg-[#201F1F] md:flex-col md:items-center md:justify-center md:px-10">
        <div className="flex w-full flex-col items-center px-12 py-24 text-center">
          <h1 className="text-section-heading">
            The Core Values That Drives
            <br /> <span className="inlnie bg-gradient px-2">Everything</span> I
            do
          </h1>
          <div className="values-containers flex w-full flex-wrap py-16 md:flex-row md:justify-evenly">
            {values.values &&
              values.values.map((vals) => (
                <ServiceCard
                  key={vals.id}
                  id={vals.id}
                  title={vals.title}
                  desc={vals.desc}
                  icon={vals.icon}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Section 8 ~ Carousel*/}
      <section className="mt-24 md:px-10">
        <div>
          <h3 className="bg-gradient bg-clip-text text-center text-content-heading text-transparent">
            Client Testimonials
          </h3>
          <div className="text-center text-section-heading">
            <h2>
              Check out the <span className="bg-gradient px-3">Feedback</span>
            </h2>
            <h2>From people I&apos;ve worked with</h2>
          </div>
          <div className="text-center text-secondary">
            <p className="font-arial text-body">
              I work very hard to please my client here is just a few of the
              nice things
            </p>
            <p className="font-arial text-body ">
              people say about me and my work.
            </p>
          </div>
        </div>
        <Carousel />
      </section>

      {/* Section 9 ~ Explore My Works */}
      <section className="mt-24 flex flex-col items-start justify-evenly bg-sm-primary pb-12 pt-12 md:flex-row md:px-10">
        <div className={'relative h-96 w-1/3 max-w-72'}>
          <img src={imageBg} className={''} />
          <img
            src={section9Img}
            className="absolute left-7 top-7 h-full w-full"
          />
        </div>

        <animated.div className="w-2/4">
          <h3 className="mb-1 text-clip bg-gradient bg-clip-text text-content-heading text-transparent">
            Born to serve
          </h3>
          <h2 className="mb-7 text-section-heading leading-[53px]">
            <p className="inline-block">The perfect addition to</p>
            <br />
            <p className="inline-block">any team</p>
          </h2>

          <div className="max-w-1/3 mb-4 text-body text-secondary">
            <p className={'w-full'}>
              I want to thank you for spending time on my portfolio site, I
              truly hope it is clear to you now that I am the right fit for your
              company. Cheers to the success of your business!{' '}
            </p>
          </div>

          <div className={'flex items-center justify-evenly'}>
            <AnimatedIcon iconData={glassIcon} className={'size-36'} />
            <Link
              to="/my-work"
              className="rounded-full bg-gradient px-3 py-3 font-rubik font-light transition-all hover:font-medium hover:shadow-custom hover:shadow-golden"
            >
              Explore My Works
            </Link>
          </div>
        </animated.div>
      </section>

      {/* Section 10 ~ Get in Touch */}
      <section className="bg-secondary pt-24 md:px-10">
        <h1 className="m-2 text-center text-section-heading">Get In Touch</h1>

        <p className="mb-20 text-wrap text-center text-body">
          Let’s touch base and discuss how I can make a lasting positive impact
          on your company
        </p>
        <div className="parent-get-in-touch-container flex flex-col items-center justify-center pb-12 text-center md:flex-row">
          <div className="w-80% mx-20 flex flex-col">
            <div className="flex  flex-col text-left">
              <div className="text-left">
                <h1 className="text-section-heading">
                  Let’s <span className="bg-gradient px-2">Talk</span>
                  <br />
                  About Your Project
                </h1>
              </div>
              <div className="text-body">
                Start a conversation
                <br />
                by filling the form to the right.
              </div>
            </div>
          </div>
          <div
            id={'get-in-touch'}
            className="flex w-1/2 flex-col gap-5 text-left "
          >
            <div className="flex gap-10">
              <div className="w-[40%]">
                <p className="py-2">Full Name*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="John David"
                />
              </div>
              <div className=" w-[40%]">
                <p className="py-2">email*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="example@yourmail.com"
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-[40%]">
                <p className="py-2">Phone*</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="Put Developement URL"
                />
              </div>
              <div className="w-[40%]">
                <p className="py-2">Subject</p>

                <input
                  className="h-14 w-[100%] rounded-full   border-none  bg-primary px-4 outline-none "
                  placeholder="Put Developement URL"
                />
              </div>
            </div>
            <div className="w-[90%]">
              <p className="py-2"> Textarea </p>
              <textarea className="h-44 w-[100%] rounded-3xl   border-none  bg-primary px-4 outline-none " />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
