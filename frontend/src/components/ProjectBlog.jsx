import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'


const ProjectBlog = ({ img, desc, title }) => {
    return (
        <div className={`mt-12 flex flex-col-reverse  w-[72rem] h-[44rem]  bg-no-repeat rounded-[2rem]`} style={{ backgroundImage: `url('${img}')` }}>

            <div className='flex  flex-col p-10 gap-8 rounded-[2rem]  items-start bg-gradient-to-t from-black to-[rgb(0,0,0,0)]'>
                <h1 className='text-section-heading text-center'>{title}</h1>
                <p>{desc}</p>

                <Link
                    to="/my-work"
                    className="w-fit rounded-full bg-gradient px-10 py-3 transition-all hover:shadow-custom hover:shadow-golden"
                >
                    Read More
                </Link>
            </div>

        </div>
    )
}

export default ProjectBlog

ProjectBlog.prototype = {
    img: PropTypes.string,
    desc: PropTypes.string,
    title: PropTypes.string
}