import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const ProjectBlog = ({ img, desc, title }) => {
  return (
    <div
      className={`mt-12 flex h-[44rem]  w-[72rem] flex-col-reverse  rounded-[2rem] bg-no-repeat`}
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="flex  flex-col items-start gap-8 rounded-[2rem]  bg-gradient-to-t from-black to-[rgb(0,0,0,0)] p-10">
        <h1 className="text-center text-section-heading">{title}</h1>
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

ProjectBlog.propTypes = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string,
}
