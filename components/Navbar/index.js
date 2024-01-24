import Image from "next/image";
import BottomArrow from "../../assets/images/bottomArrow.svg";

import { useStore } from "../../contexts/StoreContext";
import NavMenu from "../NavMenu";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [menu, openMenu] = useState(false);
  let {
    data: { paths },
  } = useStore();

  return (
    <div
      className={"nav_section"}
      style={{
        // backgroundImage: `url(home_video.mp4)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ position: "absolute", height: "95vh", width: "100vw" }}>
        <video
          controls={false}
          autoPlay
          loop
          muted
          width={"100%"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="./home_video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={"nav_content"}>
        <NavMenu menu={menu} openMenu={openMenu} paths={paths} />
        <div className={"homeWrapper"}>
          <div style={{ flex: 1 }}>
            <div className={"companySlogans"}>
              <h2 className={"sloganMain"}>{data.heading1}</h2>
              <h4 className={"sloganChild"}>{data.heading2}</h4>
            </div>
            <div className={"buttonWrapper"}>
              <a href={data.button.slug} className={"buttonKnowMore"}>
                {data.button.name}
              </a>
            </div>
            <div className={"bottomArrow"}>
              <Image src={BottomArrow} alt="title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
