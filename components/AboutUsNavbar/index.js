import { useStore } from "../../contexts/StoreContext";
import NavMenu from "../NavMenu";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [menu, openMenu] = useState(false);
  let {
    data: { paths }
  } = useStore();

  return (
    <div
      className={"nav_section"}
      style={{
        backgroundImage: `url(${data.background.data.attributes.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className={"nav_content"}>
        <NavMenu menu={menu} openMenu={openMenu} paths={paths} />
        <div className={"homeWrapper AboutUsWrapper"}>
          <div className={"aboutUsFlex"}>
            <div className={"aboutUsContentFlex"}>
              <div className={"aboutUsDetails"}>
                <span className={"aboutHead"}>{data.title}</span>
                <span className={"aboutHeading"}>{data.heading}</span>
                <span className={"aboutDesc"}>{data.description}</span>
              </div>
              <div className={"aboutUsImagesWrapper"}>
                <div className={"aboutUsImages"}>
                  {(data.Awards.data || []).map(award => (
                    <div className={"aboutUsAward"} key={award.id}>
                      <img src={award.attributes.url} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
