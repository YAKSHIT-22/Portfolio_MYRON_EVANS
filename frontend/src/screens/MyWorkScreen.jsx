import { useDispatch, useSelector } from 'react-redux';
import ProjectBlog from '../components/ProjectBlog'
import { useState } from 'react'
import { outsideBlog } from '../redux/actions/myblogActions';

function MyWorkScreen() {
  const disp = useDispatch();
  const [ReadM, useReadM] = useState({ img: '', title: '', desc: '' })
  const blogselector = useSelector((state) => state);
  const classToHide = (blogselector.blog.insideBlog) ? 'hidden' : 'flex';
  const classToshow = (blogselector.blog.insideBlog) ? 'flex' : 'hidden';

  return (
    <div>
      <div className={`${classToHide} w-full flex-col items-center text-center`} >
        <h1 className="text-section-heading"> My Case Studies</h1>
        <p className="my-5">
          Here are a few of the project I have worked on that I feel are the
          best examples of my work.
        </p>
      </div>

      <div className="work-conteiner flex flex-col items-center align-middle">
        <div className={`${classToHide} w-full items-center justify-center bg-[#383636]`}>
          <div className=" flex py-2">
            <div className="border-b-2 border-[#8D611D] px-4 py-[0.7rem] text-center">
              Design Projects
            </div>
            <div className="border-b-2 border-[#8D611D] px-4 py-[0.7rem] text-center">
              Design Projects
            </div>
          </div>
        </div>
        <div className={`${classToshow}`} onClick={()=>{disp(outsideBlog())}}>Back Button</div>
        <ProjectBlog
          img={'ph1.jpeg'}
          desc="A barbershop management app. Shop management, barber management,  client management.  "
          title="Barbershop"
        />
      </div>
    </div>
  )
}

export default MyWorkScreen
