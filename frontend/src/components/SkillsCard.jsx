import { PropTypes } from 'prop-types'

const SkillsCard = ({ title, icon, percent }) => {
  return (
    <div className="m-[1rem] flex w-[50%]  flex-col rounded-[1rem] bg-[#333333] px-5 py-5">
      <div className="wrapper h-12 gap-3 ">
        <div className=" block w-fit font-sans text-lg  dark:text-white">
          {title}
        </div>
        <div className="flex flex-row gap-px">
          <div className="progress-wrapper w-[95%] ">
            <div
              className=" h-2.5 rounded-full bg-[#4F4F4F]"
              style={{ width: '100%' }}
            ></div>
            <div
              className="r-100 relative -top-2.5 h-2.5 rounded-full bg-gradient"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <div className=" relative -top-[5px] pl-2 text-base font-thin  dark:text-white">
            {percent}%
          </div>
        </div>
      </div>
      <div className="Name-wraper flex h-10 gap-8  pt-2">
        <div className="block w-fit">Icon</div>
        <div className="px-5">
          Level: <span className="bg-gradient px-1.5">Advance</span>
        </div>
      </div>
    </div>
  )
}

export default SkillsCard

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
}
