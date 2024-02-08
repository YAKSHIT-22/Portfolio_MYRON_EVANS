import { PropTypes } from 'prop-types'

const SkillsCard = ({ id, title, icon, percent, altText }) => {
  const level =
    percent >= 90
      ? 'Advanced'
      : percent < 90 && percent > 80
        ? 'Proficient'
        : 'Novice'

  return (
    <div
      className={`${id % 2 && 'mr-4'} ${id > 2 && 'mt-4'} w-[49%] rounded-2xl bg-[#333333] px-5 py-5`}
    >
      <div className="h-12">
        <div className="block w-fit text-body text-white">{title}</div>
        <div className="flex flex-row items-center gap-px">
          <div className="relative w-[85%] ">
            <div
              className=" h-2.5 rounded-full bg-[#4F4F4F]"
              style={{ width: '100%' }}
            ></div>
            <div
              className="absolute top-0 h-2.5 rounded-full bg-gradient"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <div className="font-mulish pl-2 text-button font-medium dark:text-white">
            {percent}%
          </div>
        </div>
      </div>
      <div className="flex h-10 items-center gap-2  pt-2">
        <img src={icon} alt={altText} className="h-10" />
        <h3 className="px-5 font-arial text-body font-bold">
          Level:{' '}
          <span className="rounded-[0.2rem] bg-gradient px-4 py-1">
            {level}
          </span>
        </h3>
      </div>
    </div>
  )
}

export default SkillsCard

SkillsCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string,
  percent: PropTypes.number.isRequired,
}
