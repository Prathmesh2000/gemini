import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import CrossIcon from "../../assets/images/cross_icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import SearchIconDark from "../../assets/images/search_icon_dark.svg";
import RightArrow from "../../assets/images/right_arrow.svg";
import RightArrowHead from "../../assets/images/right-arrow-head.svg";
import RightArrowHeadDark from "../../assets/images/right_arrow_head_dark.svg";
import ArrowHeadPrimary from "../../assets/images/bottom_arrow_primary.svg";
import Slider from "../../assets/images/slider.svg";

export default function NavMenu({
  menu,
  openMenu,
  paths,
  dark_menu,
  normal_logo,
}) {
  const [solutionsMenu, setSolutionsMenu] = useState(false);
  const [scrolledMenu, setScrolledMenu] = useState(false);

  const handleMenu = (e) => {
    openMenu(!menu);
  };

  const handleScroll = () => {
    let positionDiv = document.getElementsByClassName("empty-div");
    positionDiv = (positionDiv.length && positionDiv[0]) || null;
    if (positionDiv) {
      var rect = positionDiv.getBoundingClientRect();
      setScrolledMenu(rect.top < 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const header = paths.Header;
  const sol_menu =
    header.find((option) => option.__component == "nav.header-menu") || {};
  const logo_normal = paths.logo_at_header.data.attributes;
  const logo_dark = sol_menu.logo_at_menu.data.attributes;
  return (
    <div
      id="nav-menu-fixed"
      style={{ position: scrolledMenu ? "fixed !important" : "" }}
      className={`nav_wrapper ${menu && "full_menu"} ${
        scrolledMenu && "full_menu_scrolled"
      } ${menu && "navbar_small_open"}`}
    >
      {/* medium and large */}
      <nav className="navbar">
        <div id="padding_wrapper" className={`padding_wrapper`}>
          <a href="/" className={"logo_wrapper"}>
            <Image
              src={
                menu || scrolledMenu || (dark_menu && normal_logo)
                  ? logo_dark.url
                  : logo_normal.url
              }
              layout="intrinsic"
              width={200}
              height={52}
              className={"brandLogo"}
            />
          </a>
          <div className={"menu_list"}>
            <ul>
              {(header || []).map((option, index) => {
                let is_menu = option.__component == "nav.header-menu";
                return (
                  <li className="flex-center" key={option.slug + index}>
                    <div
                      className={`menu_item ${
                        is_menu && "solutions"
                      } flex-center`}
                      onClick={(e) => is_menu && handleMenu(e)}
                    >
                      {is_menu ? (
                        <Fragment>
                          <span>{option.name}</span>
                          <div className={"sol_menu_arrow"}>
                            <Image
                              src={
                                (scrolledMenu || dark_menu) && !menu
                                  ? RightArrowHeadDark
                                  : menu
                                  ? ArrowHeadPrimary
                                  : RightArrowHead
                              }
                              layout="intrinsic"
                              width="8"
                              height="12"
                            />
                          </div>
                        </Fragment>
                      ) : (
                        <a href={option.slug}>{option.name} </a>
                        /* TODO: */
                      )}
                    </div>
                  </li>
                );
              })}
              <li className={`search_icon flex-center`}>
                <Image
                  src={
                    menu || scrolledMenu || dark_menu
                      ? SearchIconDark
                      : SearchIcon
                  }
                  layout="intrinsic"
                  width="19"
                  height="19"
                />
              </li>
            </ul>
          </div>
        </div>
        {menu && (
          <div className={`full_menu_wrapper open_menu`}>
            <div className={"h_line"}></div>
            <div className={"full_menu_content"}>
              <div className={"details"}>
                <div className={"details_content"}>{sol_menu.LHS_title}</div>
                <div className={"links"}>
                  {(sol_menu.LHS_hyperlinks || []).map((link) => (
                    <div className={"link"}>
                      <a href={link.slug}>
                        <span className={"content"}>{link.name}</span>
                        <Image
                          src={RightArrow}
                          alt=""
                          layout="intrinsic"
                          width="18"
                          height="11"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className={"options"}>
                {(sol_menu.RHS_hyperlinks || []).map((option, index) => {
                  return (
                    <a
                      href={option.slug}
                      className={`option`}
                      key={"key-" + index}
                    >
                      <span className={"option_head"}>{option.name}</span>
                      <span className={"option_content"}>
                        {option.description}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
      <nav className={`${"navbar_small"}`}>
        <div className={"mobile_nav"}>
          <div className={"logo"}>
            <Image
              layout="fill"
              src={logo_dark.url}
              className={"mobile_logo"}
            />
          </div>
          <div className={"menu_icon"} onClick={handleMenu}>
            <Image
              layout="fill"
              src={menu ? CrossIcon : Slider}
              className={"brandTitle"}
            />
          </div>
        </div>
        {menu && (
          <div className={"mobile_nav_content"}>
            <div
              className={`mobile_menu_options ${
                solutionsMenu && "solutions_open"
              }`}
            >
              {(header || []).map((option) => {
                let is_menu = option.__component == "nav.header-menu";
                return (
                  <Fragment key={`${"mobile-menu-" + option.slug}`}>
                    <div className={"mobile_menu_option"}>
                      <div className={"mobile_menu_option_wrapper"}>
                        <div
                          className={`mobile_menu_option_content ${
                            is_menu && "solutions_menu"
                          }`}
                          onClick={(e) =>
                            is_menu && setSolutionsMenu(!solutionsMenu)
                          }
                        >
                          {is_menu ? (
                            <Fragment>
                              <span>{option.name}</span>
                              {is_menu && (
                                <div className={"menu_open_icon"}>
                                  <Image
                                    layout="fill"
                                    src={
                                      solutionsMenu
                                        ? ArrowHeadPrimary
                                        : RightArrowHeadDark
                                    }
                                  />
                                </div>
                              )}
                            </Fragment>
                          ) : (
                            <a href={option.slug}>
                              <span>{option.name}</span>
                            </a>
                          )}
                        </div>
                        {is_menu && solutionsMenu && (
                          <div className={"mobile_solutions_sub_menu"}>
                            {(sol_menu.RHS_hyperlinks || []).map(
                              (option, index) => (
                                <a
                                  href={option.slug}
                                  className={"mobile_menu_item"}
                                  key={"nav-mennu-" + index}
                                >
                                  <span className={"menu_item_head"}>
                                    {option.name}
                                  </span>
                                  <span className={"menu_item_content"}>
                                    {option.description}
                                  </span>
                                </a>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
