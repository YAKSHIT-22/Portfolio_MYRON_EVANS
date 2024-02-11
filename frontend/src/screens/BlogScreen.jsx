import { PropTypes } from 'prop-types'
function BlogScreen({ img, title, desc }) {
  return <section>
    <div>
      Go Back Button
    </div>
    <div className="flex flex-col">
      <div className={`mt-12 flex flex-col-reverse  w-[72rem] h-[44rem]  bg-no-repeat rounded-[2rem]`} style={{ backgroundImage: `url('${img}')` }}>
      </div>
      <div>
        <h1 className='text-section-heading'>
          {title}
        </h1>
        <p className='text-body'>
          {desc}
        </p>
      </div>
    </div>
  </section>
}

export default BlogScreen


BlogScreen.prototype = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string

}