import { useSelector } from 'react-redux'
import ProjectBlog from '../components/ProjectBlog.jsx'
import { useState } from 'react'

import { animated, useSpring } from '@react-spring/web'

function MyWorkScreen() {
  const [activeTab, setActiveTab] = useState(
    parseInt(localStorage.getItem('work_activeTab')) || 0,
  )
  const blogselector = useSelector((state) => state)

  const propsToHide = useSpring({
    from: {
      opacity: 1,
    },
    to: {
      opacity: blogselector.blog.insideBlog ? 0 : 1,
    },
  })

  return (
    <div className={'px-6 pb-20 pt-12 md:px-16 md:pb-36'}>
      <animated.div
        className={`flex w-full flex-col items-center text-center `}
        style={propsToHide}
      >
        <h1 className="text-content-heading md:text-section-heading">
          My Case Studies
        </h1>
        <p className="my-5 text-cart-item-text md:text-body">
          Here are a few of the project I have worked on that I feel are the
          best examples of my work.
        </p>
      </animated.div>

      <div className="work-conteiner ">
        <animated.div
          className={`flex w-full items-center justify-center bg-[#383636]`}
          style={propsToHide}
        >
          <div className="flex h-full items-center md:h-fit md:py-2">
            <button
              onClick={() => {
                setActiveTab(0)
                localStorage.setItem('work_activeTab', 0)
              }}
              disabled={activeTab === 0}
              className={`h-full w-52 border-b-2 px-4 py-[0.7rem] text-center text-body ${activeTab === 0 ? 'border-[#8D611D] bg-primary' : 'border-[#8D611D]/50 bg-primary/40'}`}
            >
              Design Projects
            </button>
            <button
              onClick={() => {
                setActiveTab(1)
                localStorage.setItem('work_activeTab', 1)
              }}
              disabled={activeTab === 1}
              className={`w-52 border-b-2 px-4 py-[0.7rem] text-center text-body ${activeTab === 1 ? 'border-[#8D611D] bg-primary' : 'border-[#8D611D]/50 bg-primary/40'}`}
            >
              Dev Projects
            </button>
          </div>
        </animated.div>
        <div className={''}>
          <ProjectBlog
            img={'ph1.jpeg'}
            desc="A barbershop management app. Shop management, barber management, client management."
            title="Barbershop"
          />
        </div>
      </div>
    </div>
  )
}

export default MyWorkScreen
