import ProjectBlog from "../components/ProjectBlog"
import Ph1 from "../../public/ph1.jpeg"

function MyWorkScreen() {
  return (
    <div>
      <div className="w-full flex flex-col items-center text-center ">
        <h1 className="text-section-heading"> My Case Studies</h1>
        <p className="my-5">Here are a few of the project I have worked on that I feel are the best examples of my work.</p>

      </div>

      <div className="work-conteiner flex flex-col align-middle items-center">
        <div className="bg-[#383636] flex justify-center items-center w-full">
          <div className=" flex py-2">
            <div className="text-center py-[0.7rem] px-4 border-b-2 border-[#8D611D]">Design Projects</div>
            <div className="text-center py-[0.7rem] px-4 border-b-2 border-[#8D611D]">Design Projects</div>

          </div>

        </div>
        <ProjectBlog img={Ph1} desc="A barbershop management app. Shop management, barber management,  client management.  " title="Barbershop" />

      </div>
    </div>
  )
}

export default MyWorkScreen