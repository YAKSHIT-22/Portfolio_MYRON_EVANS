import React from "react";
import { useInView, animated, useSpring } from '@react-spring/web'


const LineIcon = ({ i }) => {

    const [refTextSpring, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })
    const textSprings = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(100%)' : 'translateX(30%)',
        config: { duration: 800 },
    })
    const interpolatedOpacity = textSprings.transform.to(
        (translateX) => 1 - Math.abs(parseFloat(translateX)) / 100,
    )

    return (
        <div className={`${i % 2 ? "" : "rotate-180"}`}>
            <animated.div
                ref={refTextSpring}
                style={{
                    opacity: interpolatedOpacity.opacity,
                    transform: textSprings.transform,
                }}
                className=" bg-primary w-10 h-[0.48rem] rounded-l-xl absolute"
            ></animated.div>

            <div className={`bg-white w-10 h-[0.45rem] rounded-l-xl`}>

            </div>
        </div>
    );
};

export default LineIcon;