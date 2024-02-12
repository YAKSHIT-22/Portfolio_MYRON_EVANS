import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const ProjectBlog = ({ img, desc, title }) => {

    const clickButton = () => {
        const divToShift = document.getElementById('background-image-holder')
        const ofSet = divToShift.offsetTop;
        console.log(ofSet)
        divToShift.parentElement.style.top = `-${(ofSet - 100) / 16}rem`
        divToShift.className = `mt-4 top-[${(ofSet - 100) / 16}rem] flex  w-[58rem] h-[34rem] bg-no-repeat rounded-[2rem]`
        const divToShow = document.getElementById('description')
        divToShow.className = "block"
        const divToHide = document.getElementById('divToHide')
        divToHide.style.display = "none"


    }

    return (
        <div>
            <div className={`mt-12 flex flex-col-reverse  w-[72rem] h-[44rem]  bg-no-repeat rounded-[2rem]`} id='background-image-holder' style={{ backgroundImage: `url('${img}')` }}>

                <div className='flex  flex-col p-10 gap-8 rounded-[2rem]  items-start bg-gradient-to-t from-black to-[rgb(0,0,0,0)]' id='divToHide'>
                    <h1 className='text-section-heading text-center'>{title}</h1>
                    <p>{desc}</p>

                    <button
                        onClick={() => clickButton()}
                        className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
                    >
                        Read More
                    </button>

                </div>

            </div>
            <div className='hidden ' id='description'>
                <p>{desc}</p>                    </div>

        </div>

    )
}

export default ProjectBlog

ProjectBlog.propTypes = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
}
