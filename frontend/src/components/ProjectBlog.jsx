import { useSelector } from 'react-redux'
import { useSpring, useInView, animated } from '@react-spring/web'
import { useState } from 'react'

const ProjectBlog = ({ img, desc, title }) => {
  const [position, setPosition] = useState(0)

  const blogselector = useSelector((state) => state)

  const classDisplay = blogselector.blog.insideBlog ? 'hidden' : 'flex'

  const props = useSpring({
    from: {
      top: '0px',
      backgroundImage: `url('${img}')`,
      height: '28rem',
    },
    to: {
      top: blogselector.blog.insideBlog ? `-${position - 10}px` : '0px',
      backgroundImage: `url('${img}')`,
      height: blogselector.blog.insideBlog ? `28rem` : '28rem',
    },
  })
  const [refs, springs] = useInView(() => ({
    from: {
      opacity: '0%',
    },
    to: {
      opacity: '100%',
    },
  }))

  return (
    <div className={'w-full flex justify-center my-10'}>
      <animated.div
        className={`relative mt-12 flex max-w-full flex-col-reverse rounded-[2rem] bg-no-repeat md:w-[72rem]`}
        style={props}
        ref={(el) => {
          // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
          if (!el) return

          console.log(el.getBoundingClientRect().top)
          setPosition(el.getBoundingClientRect().top)
        }}
      >
        <div id="background-image-holder">
          <div
            className={`${classDisplay} flex-col items-start gap-8 rounded-[2rem] bg-gradient-to-t from-black to-[rgb(0,0,0,0)] p-10`}
            id="divToHide"
          >
            <h1 className="text-center text-section-heading">{title}</h1>
            <p>{desc}</p>
            <div className="flex gap-8">
              <animated.button
                style={springs}
                ref={refs}
                // onClick={clickButton}
                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
              >
                Read More
              </animated.button>
              <animated.button
                // onClick={clickButton}
                style={springs}
                ref={refs}
                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
              >
                Download
              </animated.button>
              <animated.button
                // onClick={clickButton}
                style={springs}
                ref={refs}
                className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
              >
                View
              </animated.button>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default ProjectBlog
