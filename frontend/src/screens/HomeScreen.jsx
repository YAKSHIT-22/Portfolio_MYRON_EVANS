import { Link } from 'react-router-dom'
import faceAnimation from '../assets/Animations/Face Animation/Preview.gif'

function HomeScreen() {
  return (
    <div>
      {/* Section 1 ~ Face Animation */}
      <section className="flex flex-col items-center">
        <img
          src={faceAnimation}
          alt="Animated Face"
          className="-mt-16 w-[65%]"
        />
        <h1 className="text-main-heading -mt-16 text-center">
          <p>The Synthesis of</p>
          <p>Technology and Design</p>
        </h1>
        <Link
          to="/my-work"
          className="hover:shadow-custom hover:shadow-golden mt-7 rounded-full bg-gradient px-10 py-3 transition-all"
        >
          Explore My Work
        </Link>
      </section>

      {/* Section 2 ~ What Drives Me*/}
      <section></section>

      {/* Section 3 ~ Vertical Timeline*/}
      <section></section>

      {/* Section 4 ~ Share Div */}
      <section></section>

      {/* Section 5 ~ Services */}
      <section></section>

      {/* Section 6 ~ Skills */}
      <section></section>

      {/* Section 7 ~ Core Values */}
      <section></section>

      {/* Section 8 ~ Carousel*/}
      <section></section>

      {/* Section 9 ~ Explore My Works */}
      <section></section>

      {/* Section 10 ~ Get in Touch */}
      <section></section>
    </div>
  )
}

export default HomeScreen
