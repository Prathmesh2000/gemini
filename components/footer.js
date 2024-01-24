import React, { Component, useState } from "react";
import GeminiLogo from "../assets/images/gemini_logo.svg";
import FooterBackground from "../assets/images/footer.svg";
import Image from "next/image";
import styles from "../assets/css/footer.module.css";

import { useStore } from "../contexts/StoreContext";
import { width } from "@mui/system";

const Footer = () => {
  let { data } = useStore();
  let paths = data.paths;
  let Footer = paths.Footer[0];
  return (
    <div className={styles.footer}>
      <div className={styles.footerDistributed}>
        <div className={styles.footerContainerTop}>
          <div className={styles.containerTopLeft}>
            <Image src={GeminiLogo} />
          </div>
          <div className={styles.containerTopRight}>
            <div className={styles.containerTopBar}>{"\u00A0"}</div>
          </div>
        </div>
        <div className={styles.footerContainerCenter}>
          <div className={styles.containerCenterLeft}>
            <div className={styles.containerContacts}>
              <p className={styles.footerLinks}>
                {Footer.LHS_Fields.map((item, index) => (
                  <span className={styles.link1} key={item.id}>
                    {item.field_name}
                    <br />
                    {item.value}
                  </span>
                ))}
              </p>
              <div className={styles.footerIcons}>
                {Footer.Social_Links.map((item, index) => (
                  <Icon key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.containerCenterRight}>
            <div className={styles.containerCenterRightBlock}>
              <div className={styles.containerDiv}>
                <div className={styles.containerHeading}>
                  <h4 className={styles.containerHeadingText}>Solutions</h4>
                  <div className={styles.containerBar}>{"\u00A0"}</div>
                </div>
                <div className={styles.containerDetails}>
                  {(Footer.Solutions || []).map((link, index) => (
                    <a key={`solution-${index}`} href={`/${link.slug}`}>
                      <h4 className={styles.containerDetailsText}>
                        {link.name}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.containerCenterRightBlock}>
              <div className={styles.containerDiv}>
                <div className={styles.containerHeading}>
                  <h4 className={styles.containerHeadingText}>Technologies</h4>
                  <div className={styles.containerBar}>{"\u00A0"}</div>
                </div>
                <div className={styles.containerDetails}>
                  {(Footer.Technologies || []).map((link, index) => (
                    <a key={`tech-${index}`} href={`/${link.slug}`}>
                      <h4 className={styles.containerDetailsText}>
                        {link.name}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.containerCenterRightBlock}>
              <div className={styles.containerDiv}>
                <div className={styles.containerHeading}>
                  <h4 className={styles.containerHeadingText}>People</h4>
                  <div className={styles.containerBar}>{"\u00A0"}</div>
                </div>
                <div className={styles.containerDetails}>
                  {(Footer.People || []).map((link, index) => (
                    <a key={`people_link-${index}`} href={`/${link.slug}`}>
                      <h4 className={styles.containerDetailsText}>
                        {link.name}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.containerCenterRightBlock}>
              <div className={styles.containerDiv}>
                <div className={styles.containerHeading}>
                  <h4 className={styles.containerHeadingText}>Quick Links</h4>
                  <div className={styles.containerBar}>{"\u00A0"}</div>
                </div>
                <div className={styles.containerDetails}>
                  {(Footer.Quick_Links || []).map((link, index) => (
                    <a key={`quick_link-${index}`} href={`/${link.slug}`}>
                      <h4 className={styles.containerDetailsText}>
                        {link.name}
                      </h4>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MobileFooterIcons}>
          {Footer.Social_Links.map((item, i) => (
            <Icon item={item} key={i} />
          ))}
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.copyrightBarWrapper}>
            {/* <div className={styles.verticalLine}>{"\u00A0"}</div> */}
            <img
              src="./Footerfooter.svg"
              alt="footer"
              className={styles.verticalImage}
            />
            <div className={styles.copyrightBar}>{"\u00A0"}</div>
          </div>
          <div className={styles.copyrightContent}>
            <h4 className={styles.copyrightHeading}>{Footer.Footer_credits}</h4>
            <div className={styles.copyrightTermsPolicy}>
              <a
                key={`footer_bottom_1`}
                href={`/${Footer.footer_bottom_1.slug}`}
              >
                <h4
                  style={{ marginRight: "3vw" }}
                  className={styles.copyrightsubText}
                >
                  {Footer.footer_bottom_1.name}
                </h4>
              </a>
              <a
                key={`footer_bottom_2`}
                href={`/${Footer.footer_bottom_2.slug}`}
              >
                <h4
                  style={{ marginRight: "3vw" }}
                  className={styles.copyrightsubText}
                >
                  {Footer.footer_bottom_2.name}
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// single icon Component
const Icon = ({ item }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <a
      href={`https://${item.link}`}
      style={{ margin: "2rem 2rem 0rem 0rem" }}
      rel="noreferrer"
      target="_blank"
      id={item.icon.data[0].caption}
      key={item.id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={
          !isHovering
            ? item.icon.data[0].attributes.url
            : item.icon_color.data && item.icon_color.data.attributes.url
        }
        alt={item.icon.data[0].caption}
        style={{ width: "40px" }}
      />
    </a>
  );
};

export default Footer;
