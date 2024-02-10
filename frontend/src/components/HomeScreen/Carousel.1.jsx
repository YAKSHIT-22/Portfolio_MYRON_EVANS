import { useState } from 'react'
import Slider from 'react-slick'
import testimonials from '../../data/testimonials'

export function Carousel() {
  const [imgIndex, setImgIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    // autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    // centerMode: true,
    // centerPadding: 0,
    className: 'mx-9',
    beforeChange: (_, next) => setImgIndex(next),
  }

  return (
    <div className="App">
      <Slider {...settings}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={testimonial.id}
            className={`slide ${imgIndex === idx && 'activeSlide'} my-12 inline-block h-fit bg-sm-primary shadow-2xl`}
          >
            <div className="mt-8 flex flex-col items-center pb-3">
              <div className="activeSlideImage mb-3 h-44 w-40 rounded-xl p-1">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full"
                />
              </div>
              <div className="w-[25rem] items-center">
                <h1 className="text-center text-content-heading">
                  {testimonial.name}
                </h1>
                <h3 className="text-body text-secondary">
                  <h5 className="-mb-2">{testimonial.position}</h5>
                  <h6>{testimonial.company}</h6>
                </h3>
                <div className="mt-7 pl-10 pr-7 text-left text-body text-secondary">
                  <p>{testimonial.testimony}</p>
                </div>
              </div>
            </div>
            <div className="h-2 bg-gradient"></div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
