import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

function AnimatedIcon({ iconData, height, width }) {
  return (
    <Player
      autoplay
      keepLastFrame
      src={iconData}
      style={{ height, width, margin: 0, cursor: 'unset' }}
    />
  )
}

export default AnimatedIcon

AnimatedIcon.propTypes = {
  iconData: PropTypes.object.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}
