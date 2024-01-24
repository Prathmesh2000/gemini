import React, { Fragment, useState } from "react";
import Image from "next/image";

import CrossIcon from "../../assets/images/cross_icon.svg";
import SearchIcon from "../../assets/images/search-icon.svg";
import SearchIconDark from "../../assets/images/search_icon_dark.svg";
import RightArrow from "../../assets/images/right_arrow.svg";
import RightArrowHead from "../../assets/images/right-arrow-head.svg";
import RightArrowHeadDark from "../../assets/images/right_arrow_head_dark.svg";
import ArrowHeadPrimary from "../../assets/images/bottom_arrow_primary.svg";
import Slider from "../../assets/images/slider.svg";

import css from "./index.module.css";

export default function NavMenu({ menu, openMenu, paths }) {
  const [solutionsMenu, setSolutionsMenu] = useState(false);
  const [solMenuHover, setSolMenuHover] = useState(false);

  const handleMenu = (e) => {
    openMenu(!menu);
  };

  const header = paths.Header;
  const sol_menu =
    header.find((option) => option.__component == "nav.header-menu") || {};
  const logo_normal = paths.logo_at_header.data.attributes;
  const logo_dark = sol_menu.logo_at_menu.data.attributes;
  return (
    <div
      className={`${css.nav_wrapper} ${menu && css.full_menu}  ${
        menu && css.navbar_small_open
      }`}
    >
      {/* medium and large */}
      <nav className={css.navbar}>
        <div className={css.padding_wrapper}>
          <a href="/" className={css.logo_wrapper}>
            <Image
              src={logo_dark.url}
              layout="intrinsic"
              width={200}
              height={52}
              className={css.brandLogo}
            />
          </a>
          <div className={css.menu_list}>
            <ul>
              {(header || []).map((option, index) => {
                let is_menu = option.__component == "nav.header-menu";
                return (
                  <li className="flex-center" key={option.slug + index}>
                    <div
                      className={`${css.menu_item} ${
                        is_menu && css.solutions
                      } flex-center`}
                      onClick={(e) => is_menu && handleMenu(e)}
                    >
                      {is_menu ? (
                        <Fragment>
                          <span>{option.name}</span>
                          <div className={css.sol_menu_arrow}>
                            <Image
                              src={menu ? ArrowHeadPrimary : RightArrowHead}
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
              <li className={`${css.search_icon} flex-center`}>
                <Image
                  src={SearchIconDark}
                  layout="intrinsic"
                  width="19"
                  height="19"
                />
              </li>
            </ul>
          </div>
        </div>
        {menu && (
          <div className={`${css.full_menu_wrapper} ${css.open_menu}`}>
            <div className={css.h_line}></div>
            <div className={css.full_menu_content}>
              <div className={css.details}>
                <div className={css.details_content}>{sol_menu.LHS_title}</div>
                <div className={css.links}>
                  {(sol_menu.LHS_hyperlinks || []).map((link) => (
                    <div className={css.link}>
                      <a href={link.slug}>
                        <span className={css.content}>{link.name}</span>
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
              <div className={css.options}>
                {(sol_menu.RHS_hyperlinks || []).map((option, index) => {
                  return (
                    <a
                      href={option.slug}
                      className={`${css.option}`}
                      key={"key-" + index}
                    >
                      <span className={css.option_head}>{option.name}</span>
                      <span className={css.option_content}>
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
      <nav className={`${css.navbar_small}`}>
        <div className={css.mobile_nav}>
          <div className={css.logo}>
            <Image
              layout="fill"
              src={logo_dark.url}
              className={css.mobile_logo}
            />
          </div>
          <div className={css.menu_icon} onClick={handleMenu}>
            <Image
              layout="fill"
              src={menu ? CrossIcon : Slider}
              className={css.brandTitle}
            />
          </div>
        </div>
        {menu && (
          <div className={css.mobile_nav_content}>
            <div
              className={`${css.mobile_menu_options} ${
                solutionsMenu && css.solutions_open
              }`}
            >
              {(header || []).map((option) => {
                let is_menu = option.__component == "nav.header-menu";
                return (
                  <Fragment key={`${"mobile-menu-" + option.slug}`}>
                    <div className={css.mobile_menu_option}>
                      <div className={css.mobile_menu_option_wrapper}>
                        <div
                          className={`${css.mobile_menu_option_content} ${
                            is_menu && css.solutions_menu
                          }`}
                          onClick={(e) =>
                            is_menu && setSolutionsMenu(!solutionsMenu)
                          }
                        >
                          {is_menu ? (
                            <Fragment>
                              <span>{option.name}</span>
                              {is_menu && (
                                <div className={css.menu_open_icon}>
                                  <Image
                                    layout="fill"
                                    src={
                                      solutionsMenu || solMenuHover
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
                          <div className={css.mobile_solutions_sub_menu}>
                            {(sol_menu.RHS_hyperlinks || []).map(
                              (option, index) => (
                                <a
                                  href={option.slug}
                                  className={css.mobile_menu_item}
                                  key={"nav-mennu-" + index}
                                >
                                  <span className={css.menu_item_head}>
                                    {option.name}
                                  </span>
                                  <span className={css.menu_item_content}>
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
