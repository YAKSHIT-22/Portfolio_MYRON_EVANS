import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LineIcon from './LineIcon';
const VerticalTime = ({ date, title, subtitle, description, id }) => {
    return (

        <VerticalTimelineElement
            key={id}
            className={`vertical-timeline-element--work w-90 -mb-[10rem]`}
            contentStyle={{ background: '#2C2B2B', color: '#fff', boxShadow: "none" }}
            contentArrowStyle={{ display: 'none' }}
            iconStyle={{ border: "0px", boxShadow: "none", width: "34px", transform: `${(id % 2 === 0) ? "rotate(180deg) translateX(-1.44rem)" : ""}` }}
            // fix the paddigns for resposnive design margin and svg --remove padding
            icon={<LineIcon />}
            position={(id % 2) ? "left" : "right"}
        >

            <div className="reltive items-left space-x-2 mb-1">




            </div>
            <h3 className="vertical-timeline-element-subtitle font-medium text-secondary"> {date}</h3>
            <h4 className="vertical-timeline-element-title text-[#8D611D] w-80 text-3xl font-[400] ">{title}</h4>
            <h5 className='text-primary'> {subtitle}</h5>
            <p className='text-primary text-lg font-light leading-7'>
                {description}                </p>
        </VerticalTimelineElement>




    )
}

export default VerticalTime