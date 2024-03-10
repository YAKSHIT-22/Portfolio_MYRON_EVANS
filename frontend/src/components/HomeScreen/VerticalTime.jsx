import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import LineIcon from '../Icons/LineIcon.jsx'

const VerticalTime = ({ date, title, subtitle, description, id }) => {
  const innerWidth = window.innerWidth
  return (
    <VerticalTimelineElement
      key={id}
      className={`vertical-timeline-element--work -mb-[10rem] w-full ${id % 2 && 'md:ml-[-3.5rem]'} ${id % 2 === 0 && 'md:mr-[-3.5rem]'}`}
      contentStyle={{
        background: innerWidth >= 768 ? '#2C2B2B' : '#333',
        color: '#fff',
        boxShadow: 'none',
      }}
      contentArrowStyle={{ display: 'none' }}
      iconStyle={{
        border: '0px',
        boxShadow: 'none',
        width: '34px',
        transform: `${id % 2 === 0 && window.innerWidth >= 768 ? 'rotate(180deg) translateX(-1.44rem)' : window.innerWidth < 768 ? 'translateX(1.04rem)' : ''}`,
      }}
      // fix the paddinGs for responsive design margin and svg --remove padding
      icon={<LineIcon />}
      position={id % 2 ? 'left' : 'right'}
    >
      <div className="items-left relative mb-1 space-x-2"></div>
      <h3 className="vertical-timeline-element-subtitle ml-1 font-mulish text-button font-medium text-secondary">
        {date}
      </h3>
      <h4 className="vertical-timeline-element-title mt-3 min-w-80 bg-gradient bg-clip-text text-content-heading text-transparent">
        <p
          className={'w-[90%]'}
          style={{
            marginTop: 0,
            fontWeight: 800,
            paddingRight: innerWidth >= 768 ? '0' : '1.7rem',
            fontSize: '26px',
            lineHeight: '32px',
            // width: '100%',
          }}
        >
          {title}
        </p>
      </h4>
      <h5 className="te mt-3 text-[20px] text-primary"> {subtitle}</h5>
      <p
        className="mt-3 text-body leading-7 text-secondary"
        style={{
          fontWeight: 300,
          marginTop: '1rem',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        }}
      >
        {description}
      </p>
    </VerticalTimelineElement>
  )
}

export default VerticalTime
