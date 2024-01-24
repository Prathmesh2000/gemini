import VisibilitySensor from "react-visibility-sensor";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

const Circle = ({heading,subHeading,width,visibility,pathColor,trailColor}) => {
return(
    <VisibilitySensor>
                    {({ isVisible }) => {
                      const percentage = isVisible ? 100 : 0;
                      return (
                        <CircularProgressbarWithChildren
                          value={percentage}
                          strokeWidth={7}
                          styles={buildStyles({
                            root: { width: 24 },
                            width: {width},
                            strokeLinecap: 'rounded',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            textColor: "#fff",
                            pathColor: {pathColor},
                            trailColor: {trailColor}
                          })}
                        >
                          <h4>{heading}</h4>
                          <h4>{subHeading}</h4>
                          </CircularProgressbarWithChildren>
                      );
                    }}
                  </VisibilitySensor>
)
}


export default Circle