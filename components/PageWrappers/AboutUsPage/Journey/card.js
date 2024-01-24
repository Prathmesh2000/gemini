import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import css from "./index.module.css";

const Card = ({ title, location, text, date, button, index }) => {
  let marked = index % 2 != 0;
  return (
    <VerticalTimelineElement
      className={css.verticalTimelineElement}
      contentStyle={{
        background: "transparent",
        border: "none",
        boxShadow: "none",
        padding: "0rem"
      }}
      contentArrowStyle={{
        display: "none"
      }}
      date={<Date date={date} marked={marked} />}
      dateClassName={css.dateMainWrapper}
      iconClassName={css.iconStyles}
      //   icon={<WorkIcon />}
    >
      <div
        className={`${css.locationWrapper} 
        ${marked && css.reverseLocationWrapper} `}
      >
        <h3 className={css.card_title}>{title}</h3>
        <h4 className={css.card_subtitle}>{location}</h4>
      </div>
      <div
        className={`${css.textWrapper}
       ${!marked && css.reverseTextWrapper}`}
      >
        <p className={css.main_text}>{text}</p>
        <a href="#" className={css.visit_us}>
          {`${button} >`}
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

export default Card;

const Date = ({ date, marked }) => {
  return (
    <div
      className={`${css.VerticalTimelineDateWrapper} ${
        marked && css.reversedVerticalTimelineDateWrapper
      }`}
    >
      <h4 className={css.VerticalTimelineDate}>{date}</h4>
    </div>
  );
};
