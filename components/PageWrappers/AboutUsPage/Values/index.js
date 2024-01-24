import * as React from "react";
import css from "./index.module.css";
import SimpleSlider from "./card";

// mui imports
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Values = ({ data }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <div className={css.valueWrapper}>
      <div className={css.tabWrapper}>
        <div>
          <h4 className={css.mainTitle}>{data.Title}</h4>
          <h4 className={css.mainHeading}>{data.Heading}</h4>
        </div>
        <div>
          <div className={css.carousel}>
            <Box>
              <AppBar
                position="static"
                style={{
                  boxShadow: "none",
                  background: "white",
                  color: "black"
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  aria-label="wrapped label tabs example"
                >
                  {data.Sections.map((item, index) => (
                    <Tab
                      label={`0${index + 1} ${item.title}`}
                      {...a11yProps(0)}
                      className={css.singleTab}
                    />
                  ))}
                </Tabs>
              </AppBar>
            </Box>
          </div>
        </div>
        <div className={css.mobileCarousel}>
          <SimpleSlider data={data} />
        </div>
      </div>
      <div className={css.carouselCards}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {data.Sections.map((item, index) => (
            <TabPanel
              value={value}
              index={index}
              dir={theme.direction}
              title={item.title}
              sub_title={item.sub_title}
              description={item.description}
              image={item.image}
            />
          ))}
        </SwipeableViews>
      </div>
    </div>
  );
};
export default Values;

// extra components below
function TabPanel(props) {
  const {
    children,
    value,
    index,
    title,
    sub_title,
    description,
    image,
    ...other
  } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      π
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div className={css.cardWrapper}>
            <img
              src="./valuePlus.svg"
              alt="plus"
              className={css.cardImagePlus}
            />
            <div className={css.cardImageWrapper}>
              <h4 className={css.cardImageText}>{title}</h4>
              <img src={image.data.attributes.url} className={css.cardImage} />
            </div>
            <div style={{ width: "47%" }} className={css.cardTextWrapper}>
              <div style={{ position: "relative" }}>
                <div className={css.CardNumber}>{`0${index + 1}`}</div>
                <h4 className={css.cardTitle}>{title}</h4>
              </div>
              <h4 className={css.cardSubTitle}>{sub_title}</h4>
              <p className={css.cardParagraph}>{description}</p>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}
