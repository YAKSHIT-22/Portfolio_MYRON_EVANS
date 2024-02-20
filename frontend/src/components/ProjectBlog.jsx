import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { insideBlog } from '../redux/actions/myblogActions'
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'

const ProjectBlog = ({ img, desc, title }) => {
    const disp = useDispatch();
    const [classname, setclassname] = useState('')
    const blogselector = useSelector((state) => state);

    const classDisplay = (blogselector.blog.insideBlog) ? 'hidden' : 'flex'
    const classToshow = (blogselector.blog.insideBlog) ? 'flex' : 'hidden';
    const props = useSpring(
        {
            from: {
                backgroundImage: `url('${img}')`,
                height: '44rem'
            },
            to: {
                backgroundImage: `url('${img}')`
                , height: blogselector.blog.insideBlog ? `22rem` : '44rem'
            },
        },

    )
    console.log(props.classname)

    const clickButton = () => {

        // const divToShift = document.getElementById('background-image-holder')
        // const ofSet = divToShift.offsetTop;
        // console.log(ofSet)
        // console.log(divToShift.offsetHeight)
        // if (blogselector.blog.insideBlog)
        // divToShift.parentElement.style.top = `-${(ofSet - 200) / 16}rem`
        // api.start({
        //     from: {
        //         height: "72rem",
        //         y: ofSet,
        //     },
        //     to: {
        //         height: "52rem",
        //         y: -(ofSet - 100),
        //     },
        // })
        // divToShift.className = `mt-4 top-[${(ofSet - 100) / 16}rem] flex  w-[58rem] h-[34rem] bg-no-repeat rounded-[2rem]`

        // const divToShow = document.getElementById('description')
        // divToShow.className = "block"
        // const divToHide = document.getElementById('divToHide')
        // divToHide.style.display = "none"
        disp(insideBlog());


    }
    console.log(blogselector)
    const props2 = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: blogselector.blog.insideBlog ? 1 : 0

        }
    })


    return (
        <div>
            <animated.div className={`mt-12 flex flex-col-reverse  w-[72rem] bg-no-repeat rounded-[2rem]`} style={props}><div id='background-image-holder' >

                <div className={`${classDisplay}  flex-col p-10 gap-8 rounded-[2rem]  items-start bg-gradient-to-t from-black to-[rgb(0,0,0,0)]`} id='divToHide'>
                    <h1 className='text-section-heading text-center'>{title}</h1>
                    <p>{desc}</p>

                    <button
                        onClick={clickButton}
                        className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden">
                        Read More
                    </button>

                </div>

            </div>
            </animated.div>
            <animated.div style={props2}>
                <div >
                    <p>{desc}</p>
                </div>
            </animated.div>

        </div>

    )
}

export default ProjectBlog

ProjectBlog.propTypes = {
    img: PropTypes.string,
    desc: PropTypes.string,
    title: PropTypes.string,
}
