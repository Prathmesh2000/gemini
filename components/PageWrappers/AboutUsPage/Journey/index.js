import css from "./index.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Card from "./card";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Journey = ({ data }) => {
  return (
    <div className={css.journeyWrapper}>
      <div className={css.journeyHeadingWrapper}>
        <h4 className={css.journeyTitle}>{data.Title}</h4>
        <h4 className={css.journeyHeading}>{data.Heading}</h4>
      </div>
      <VerticalTimeline lineColor={"#d1dae7"} className={css.VerticalTimeline}>
        {(data.Cards || []).map((card, i) => (
          <Card
            title={card.heading}
            location={card.Location}
            text={card.description}
            date={card.Date}
            button={card.Button}
            index={i}
            key={i}
          />
        ))}
        <VerticalTimelineElement
          icon={<ArrowDownwardIcon sx={{ fontSize: 80 }} />}
          iconClassName={css.iconStyles}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Journey;
