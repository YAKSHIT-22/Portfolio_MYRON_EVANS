import { useSelector } from 'react-redux'
import { useSpring, useInView, animated } from '@react-spring/web'
import  {useState} from 'react'
import figmaIcon from '../assets/icons/figma.svg'
import eyeIcon from '../assets/icons/eye.svg'
import downloadIcon from '../assets/icons/download.svg'

const ProjectBlog = ({ img, desc, title }) => {
  const [position, setPosition] = useState(0)
  const innerWidth = window.innerWidth

  const blogselector = useSelector((state) => state)

  const classDisplay = blogselector.blog.insideBlog ? 'hidden' : 'flex'

  const props = useSpring({
    from: {
      // top: '0px',
      // top: '0px',
      backgroundImage: `url('${img}')`,
      height: innerWidth < 768 ? '25rem' : '28rem',
      height: innerWidth < 768 ? '25rem' : '28rem',
    },
    to: {
      // top: blogselector.blog.insideBlog ? `-${position - 10}px` : '0px',
      // top: blogselector.blog.insideBlog ? `-${position - 10}px` : '0px',
      backgroundImage: `url('${img}')`,
      height:
        blogselector.blog.insideBlog && innerWidth >= 768
          ? `28rem`
          : innerWidth < 768
            ? '25rem'
            : '28rem',
      height:
        blogselector.blog.insideBlog && innerWidth >= 768
          ? `28rem`
          : innerWidth < 768
            ? '25rem'
            : '28rem',
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
        className={`relative mx-auto mt-12 flex w-full max-w-4xl flex-col-reverse rounded-[2rem] bg-cover bg-no-repeat`}
        className={`relative mx-auto mt-12 flex w-full max-w-4xl flex-col-reverse rounded-[2rem] bg-cover bg-no-repeat`}
        style={props}
        ref={(el) => {
          if (!el) return

          setPosition(el.getBoundingClientRect().top)
        }}
      >
        <div
          className={`${classDisplay} flex-col items-start gap-4 rounded-[2rem] bg-gradient-to-t from-black to-[rgb(0,0,0,0)] p-7 pt-2 md:p-10`}
        >
          <h1 className="text-center text-content-heading md:text-section-heading">
            {title}
          </h1>
          <p className={'max-w-2xl text-body text-secondary'}>{desc}</p>
          <div className="mx-auto flex items-center gap-8">
            <animated.button
              style={springs}
              ref={refs}
              className="group w-fit rounded-full bg-gradient p-0.5 text-body transition-all hover:shadow-custom hover:shadow-golden"
            >
              <span
                className={
                  'hidden h-full w-full rounded-full bg-sm-primary/90 py-3 transition-colors group-hover:bg-primary md:inline-block md:px-10'
                }
              >
                Design
              </span>
              <span
                className={
                  'flex items-center justify-center rounded-full p-3 md:hidden'
                }
              >
                <img src={figmaIcon} className={'size-10'} />
              </span>
            </animated.button>
            <animated.button
              style={springs}
              ref={refs}
              className="w-fit rounded-full bg-[#B79766] text-[14px] transition-all hover:bg-gradient hover:shadow-custom hover:shadow-golden md:px-10 md:text-body"
            >
              <span className={'hidden py-3 md:inline-block md:px-10'}>
        <div
          className={`${classDisplay} flex-col items-start gap-4 rounded-[2rem] bg-gradient-to-t from-black to-[rgb(0,0,0,0)] p-7 pt-2 md:p-10`}
        >
          <h1 className="text-center text-content-heading md:text-section-heading">
            {title}
          </h1>
          <p className={'max-w-2xl text-body text-secondary'}>{desc}</p>
          <div className="mx-auto flex items-center gap-8">
            <animated.button
              style={springs}
              ref={refs}
              className="group w-fit rounded-full bg-gradient p-0.5 text-body transition-all hover:shadow-custom hover:shadow-golden"
            >
              <span
                className={
                  'hidden h-full w-full rounded-full bg-sm-primary/90 py-3 transition-colors group-hover:bg-primary md:inline-block md:px-10'
                }
              >
                Design
              </span>
              <span
                className={
                  'flex items-center justify-center rounded-full p-3 md:hidden'
                }
              >
                <img src={figmaIcon} className={'size-10'} />
              </span>
            </animated.button>
            <animated.button
              style={springs}
              ref={refs}
              className="w-fit rounded-full bg-[#B79766] text-[14px] transition-all hover:bg-gradient hover:shadow-custom hover:shadow-golden md:px-10 md:text-body"
            >
              <span className={'hidden py-3 md:inline-block md:px-10'}>
                Download
              </span>
              <span
                className={'flex items-center justify-center p-3 md:hidden'}
              >
                <img src={downloadIcon} className={'size-12'} />
              </span>
            </animated.button>
            <animated.button
              style={springs}
              ref={refs}
              className="group w-fit rounded-full bg-gradient px-0.5 py-0.5 text-body transition-all hover:shadow-custom hover:shadow-golden"
            >
              <span
                className={
                  'hidden h-full w-full rounded-full bg-sm-primary/90 py-3  transition-colors group-hover:bg-primary md:inline-block md:px-10'
                }
              >
                Live
              </span>
              <span
                className={
                  'flex h-full items-center justify-center p-3 md:hidden'
                }
              >
                <img src={eyeIcon} className={'size-10'} />
              </span>
            </animated.button>
              </span>
              <span
                className={'flex items-center justify-center p-3 md:hidden'}
              >
                <img src={downloadIcon} className={'size-12'} />
              </span>
            </animated.button>
            <animated.button
              style={springs}
              ref={refs}
              className="group w-fit rounded-full bg-gradient px-0.5 py-0.5 text-body transition-all hover:shadow-custom hover:shadow-golden"
            >
              <span
                className={
                  'hidden h-full w-full rounded-full bg-sm-primary/90 py-3  transition-colors group-hover:bg-primary md:inline-block md:px-10'
                }
              >
                Live
              </span>
              <span
                className={
                  'flex h-full items-center justify-center p-3 md:hidden'
                }
              >
                <img src={eyeIcon} className={'size-10'} />
              </span>
            </animated.button>
          </div>
        </div>
      </animated.div>
    </div>
  )
}

export default ProjectBlog
