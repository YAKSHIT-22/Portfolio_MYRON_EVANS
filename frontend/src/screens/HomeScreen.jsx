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

import instagramIcon from '../assets/icons/instagram.svg'
import twitterIcon from '../assets/icons/x.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'

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

    // noinspection JSPotentiallyInvalidConstructorUsage
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current])

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      const { width, height } = container.getBoundingClientRect()
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
  const [refService2, serviceSprings2] = useInView(() => ({
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
            className="align-center fixed mt-9 flex justify-center"
            style={{
              height: innerHeight - 210,
              width: window.innerWidth - 480,
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
      <section className="mt-24 flex w-full flex-col items-center px-6 md:flex-row md:flex-wrap md:items-start md:justify-evenly md:px-10">
        {/* Left Side ~ Text Side */}
        <div className="md:w-1/2">
          <animated.div>
            <animated.h3 className="bg-gradient bg-clip-text text-left text-body font-bold text-transparent md:text-content-heading">
              What drives me
            </animated.h3>
            <animated.h2
              className="text-left text-content-heading font-extrabold md:text-section-heading"
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
          <img src={imageBg} className="absolute right-5 top-0 md:right-0" />
          <img
            src={section2Img}
            className="absolute right-[2.25rem] top-7 h-full md:right-6"
          />
          <animated.h1 className="absolute -bottom-16 right-6 bg-gradient px-6 py-2 text-[17px] md:-bottom-12 md:-right-4 md:text-[24px]">
            <p>Frontend Developer &amp;</p>
            <p>Design Enthusiast</p>
          </animated.h1>
        </div>
      </section>
      {/* </ParallaxLayer> */}

      {/* Section 3 ~ Vertical Timeline*/}
      <section className="mt-48 px-6 md:mt-24 md:px-10">
        <div className={'w-full'}>
          <h1
            className={
              'text-center text-content-heading md:text-section-heading'
            }
          >
            Educational and Professional{' '}
            <span className={'mx-auto block w-fit bg-gradient px-2 md:inline'}>
              Timeline Story
            </span>
          </h1>
          <p
            className={
              'mx-auto mt-4 text-center text-body text-secondary md:max-w-3xl'
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
                  title={n.title1 + ' ' + n.title2}
                  subtitle={n.subtitle}
                  description={n.description}
                />
              ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Section 4 ~ Share Div */}
      <section className="mt-24 px-6 md:px-10">
        <div className="relative mt-7 flex w-full items-center justify-center ">
          {/* Background image div */}
          <div
            className="absolute inset-0 left-auto right-auto w-full rounded-3xl bg-cover bg-center bg-no-repeat opacity-40 duration-500 ease-in-out hover:opacity-20 md:h-[35rem] md:max-h-[35rem] md:w-5/6"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Section4.jpeg')",
            }}
          ></div>

          {/* Text content div  cerate it responsive for md */}

          <animated.div
            className="relative z-10 flex h-full flex-col items-center justify-center py-14 text-white"
            ref={refShare}
            style={shareSprings}
          >
            <h1 className="w-full max-w-2xl px-8 text-center text-content-heading md:px-0 md:text-section-heading">
              Share my website and story with someone it can help
            </h1>
            <span className="mt-10 w-full max-w-2xl px-8 text-[14px] text-secondary md:px-0 md:text-body">
              We all have struggles and failures in life, please share my
              website with anyone you believe my story can help. If you are
              inspired by my story and would like to support me, please contact
              me for a project, refer a client to me using my affiliate referral
              program, or visit my store, some of the proceeds from my store
              will go towards helping my freelance career grow and the rest will
              go to Bridging Tech and Tech Kids Unlimited.{' '}
            </span>

            <button
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="h-15 mt-7 w-fit rounded-full bg-gradient px-10 py-3 text-center font-rubik font-medium transition-all hover:shadow-custom hover:shadow-golden"
            >
              SHARE NOW
            </button>
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
                ref={refService2}
                style={serviceSprings2}
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
      <section className="mt-24 flex w-full flex-col bg-secondary px-4 md:flex-col md:items-center md:justify-center md:px-10">
        <div className="flex w-full flex-col items-center pb-7 pt-24 text-center md:px-12 md:py-24">
          <h1 className="w-full max-w-3xl text-center text-content-heading md:text-section-heading">
            The Core Values that drive{'  '}
            <span className="inline bg-gradient px-2">Everything</span> I do
          </h1>
          <div className="flex w-full flex-col items-center gap-5 pb-6 pt-16 md:flex-row md:flex-wrap md:justify-evenly md:gap-0 md:py-16">
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
          <h3 className="hidden bg-gradient bg-clip-text px-6 text-left text-body text-transparent md:block md:px-0 md:text-center md:text-content-heading">
            Client Testimonials
          </h3>
          <h2 className="mx-auto mt-1 w-full max-w-2xl text-left text-center text-[24px] text-content-heading md:text-center md:text-section-heading">
            Check out the{' '}
            <span className="inline bg-gradient px-3">Feedback</span> From
            people I&apos;ve worked with
          </h2>
          <p className="mx-auto mt-4 w-full max-w-2xl px-6 text-center text-body text-secondary md:px-0">
            I work very hard to please my client here is just a few of the nice
            things people say about me and my work.
          </p>
        </div>
        <div className="flex justify-center">
          <div className={'flex max-w-[82rem] justify-center px-1'}>
            <Carousel />
          </div>
        </div>
      </section>

      {/* Section 9 ~ Explore My Works */}
      <section className="mt-24 flex flex-col-reverse items-start justify-evenly bg-primary px-6 py-12 md:flex-row md:bg-sm-primary md:px-10">
        <div
          className={'relative mb-6 mt-4 h-96 w-full max-w-72 md:mt-0 md:w-1/3'}
        >
          <img src={imageBg} className={'absolute left-3 md:static'} />
          <img
            src={section9Img}
            className="absolute left-10 top-7 h-full w-full md:left-7"
          />
        </div>

        <animated.div className="w-full md:w-2/4">
          <h3 className="mb-1 text-clip bg-gradient bg-clip-text text-body text-transparent md:text-content-heading">
            Born to serve
          </h3>
          <h2 className="mb-7 text-content-heading md:text-section-heading">
            <p className="inline-block">The perfect addition to any team</p>
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
      <section className="bg-secondary px-6 pt-12 md:px-10 md:pt-24">
        <div className={'hidden md:block'}>
          <h1 className="m-2 text-center text-content-heading md:text-section-heading">
            Get In Touch
          </h1>

          <p className="mb-20 text-wrap text-center text-body text-secondary">
            Let’s touch base and discuss how I can make a lasting positive
            impact on your company
          </p>
        </div>
        <div className="flex flex-col items-center justify-center pb-12 md:flex-row">
          <div className="mx-20 flex h-full w-full flex-col items-start justify-start md:w-1/2">
            <div className={'border-b-2 border-[#cecece] pb-10'}>
              <h1 className="text-center text-content-heading md:text-left md:text-section-heading">
                Let’s <span className="bg-gradient px-2">Talk</span>
              </h1>
              <p className="mt-2 max-w-[22rem] text-body">
                Send me an email or start a conversation by filling the form
                below.
              </p>
            </div>
            <div className={'mt-10 w-full'}>
              <h2 className={'text-content-heading'}>Follow me:</h2>
              <div className="mt-4 flex w-full items-center justify-start gap-12">
                <a
                  href={'https://www.instagram.com/'}
                  rel={'noreferrer'}
                  target={'_blank'}
                >
                  <img
                    src={instagramIcon}
                    className={'size-8 hover:text-black'}
                  />
                </a>
                <a
                  href={'https://twitter.com/'}
                  rel={'noreferrer'}
                  target={'_blank'}
                >
                  <img src={twitterIcon} className={'size-8'} />
                </a>
                <a
                  href={'https://www.linkedin.com/'}
                  rel={'noreferrer'}
                  target={'_blank'}
                >
                  <img src={linkedinIcon} className={'size-8'} />
                </a>
              </div>
            </div>
          </div>
          <form
            id={'get-in-touch'}
            className="mt-16 flex w-full flex-col gap-5 text-left md:mt-0 md:w-1/2 md:gap-8"
          >
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
              <div className="w-full md:max-w-[275px]">
                <label htmlFor={'full_name'}>Full Name *</label>
                <input
                  id={'full_name'}
                  type={'text'}
                  required={true}
                  className="mt-2 h-14 w-full rounded-full border-none bg-sm-primary px-4 font-nunito text-body outline-none "
                  placeholder="John David"
                />
              </div>
              <div className=" w-full md:max-w-[275px]">
                <label htmlFor={'email'}>Email *</label>
                <input
                  id={'email'}
                  type={'email'}
                  required={true}
                  className="mt-2 h-14 w-full rounded-full border-none bg-sm-primary px-4 font-nunito text-body outline-none "
                  placeholder="example@yourmail.com"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 md:flex-row md:gap-10">
              <div className="w-full md:max-w-[275px]">
                <label htmlFor={'phone_number'}>Phone *</label>
                <input
                  id={'phone_number'}
                  type={'tel'}
                  required={true}
                  className="mt-2 h-14 w-full rounded-full border-none bg-sm-primary px-4 font-nunito text-body outline-none "
                  placeholder="(000) 123 456"
                />
              </div>
              <div className="w-full md:max-w-[275px]">
                <label htmlFor={'subject'}>Subject *</label>
                <input
                  id={'subject'}
                  type={'text'}
                  required={true}
                  className="mt-2 h-14 w-full rounded-full border-none bg-sm-primary px-4 font-nunito text-body outline-none "
                  placeholder="ex. Project"
                />
              </div>
            </div>
            <div className="w-full md:w-[90%]">
              <label htmlFor={'message'}>Tell me about your project *</label>
              <textarea
                id={'message'}
                required={true}
                placeholder={
                  'Hello there! I would like to talk about how to...'
                }
                className="mt-2 h-44 w-full rounded-3xl border-none bg-sm-primary px-4 py-4 font-nunito text-body outline-none"
              />
            </div>

            <button
              type={'submit'}
              className="mx-auto max-w-fit rounded-full bg-gradient px-9 py-5 font-rubik text-button font-medium uppercase tracking-widest md:mx-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
