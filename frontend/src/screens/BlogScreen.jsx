import { PropTypes } from 'prop-types'
import redRect from '../assets/svgs/redRect.svg'
import blockS from '../assets/svgs/blockS.svg'
import direction from '../assets/svgs/direction.svg'
import { redirect } from 'react-router-dom'
function BlogScreen({ img, title, desc }) {
  const dataJ = [
    {
      color: 'Red',
      icon: `${redRect}`

    },
    {
      color: 'blue',
      icon: `${redRect}`

    },
    {
      color: 'green',
      icon: `${redRect}`
    },
  ]
  return <section className='flex flex-col justify-center'>
    <div className=' flex flex-col justify-center  text-center p-14 '>
      <h1 className='self-center text-section-heading '> Bento Blog</h1>
      <p className='self-center w-3/4'>
        Bite-sized blog, a unique concept I thought of while designing this portfolio site, using the tri-color-coded uni-directional reading axis, follow the start point, color order pattern, and ordered direction of reading for a unique experience out of every issue (only on laptop or desktop). I upload every Sunday.
      </p>

    </div>
    <div className='bg-sm-primary w-3/4 self-center flex flex-col rounded-[2rem] px-12 py-4'>
      <h2 className='text-content-heading'>Reading Instructions</h2>
      <div className='space-x-3'>
        <h2>Color Order</h2>
        <div className='bg-primary rounded-[1.5rem]  justify-between p-2 flex px-9 py-5'>
          {dataJ.map((val, key) => (

            <div className='flex' key={key}>
              <h3 className='text-lg m-auto px-2'>1.{val.color}</h3>
              <img src={val.icon} alt='' />
            </div>
          ))}


          {/* <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={greenRect} alt='' />

          </div>
          <div className='flex'>
            <h3 className='text-lg'>1.Red</h3>
            <img src={blueRect} alt='' />

          </div> */}
        </div>
        <h2>Start Point</h2>

        <div className='bg-primary rounded-[1.5rem] w-[100%] px-6 flex justify-center items-center py-4 '>
          <h2 className='px-5'>Top Left</h2>
          <img src={blockS} />
        </div>
        <div >
          <h2>Direction of Reading</h2>
          <div className=' bg-primary rounded-[1.5rem] w-[100%] px-3 py-6 flex justify-center items-center'>
            <img src={direction} />

          </div>
        </div>


      </div>
    </div>
    <div className='Bento-blog-container'>


    </div>
  </section>
}

export default BlogScreen


BlogScreen.prototype = {
  img: PropTypes.string,
  desc: PropTypes.string,
  title: PropTypes.string

}