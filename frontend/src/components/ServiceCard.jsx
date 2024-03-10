import AnimatedIcon from './Icons/AnimatedIcon'
import { animated, useInView } from '@react-spring/web'
import { useRef, useState } from 'react'

const ServiceCard = ({ title, icon, desc, className }) => {
  const [refTits, titSprings] = useInView(() => ({
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
  const [refDet, detSprings] = useInView(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },

    config: {
      friction: 1000,
      mass: 10,
      duration: 2000,
    },
  }))

  const parentRef = useRef(null)
  const [hover, setHover] = useState(false)

  return (
    <div
      ref={parentRef}
      className={`flex w-full flex-col items-center rounded-xl bg-primary pb-6 pt-9 text-center shadow-lg transition-all md:mt-12 md:h-[34rem] md:w-[30%] md:hover:scale-105 ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="icon-container flex h-28 w-28 items-center justify-center rounded-xl bg-sm-primary py-5">
        <AnimatedIcon
          name={name}
          iconData={icon}
          width={72}
          height={75}
          hover={hover}
        />
      </div>

      <animated.h1
        className="py-7 text-center text-content-heading"
        ref={refTits}
        style={titSprings}
      >
        {title}
      </animated.h1>
      <animated.p
        className="h-fit overflow-visible px-6 text-body text-secondary"
        style={detSprings}
        ref={refDet}
      >
        {desc}
      </animated.p>
    </div>
  )
}

export default ServiceCard
