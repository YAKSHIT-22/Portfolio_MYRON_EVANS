import AnimatedIcon from './Icons/AnimatedIcon'
import { PropTypes } from 'prop-types'

const ServiceCard = ({ id, title, icon, desc }) => {
  return (
    <div className="mt-12 flex h-[32rem] w-[28%] flex-col items-center rounded-xl bg-primary text-center  shadow-2xl md:w-[28%] ">
      <div className=" mt-16 flex flex-col items-center text-center">
        <div className="icon-container flex h-28 w-28 items-center justify-center rounded-xl  bg-sm-primary py-5">
          <AnimatedIcon iconData={icon} width={72} height={75} />
        </div>

        <h1 className="py-7 text-center text-content-heading">{title}</h1>
        <p className="px-6 text-body">{desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard

ServiceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  desc: PropTypes.string,
}
