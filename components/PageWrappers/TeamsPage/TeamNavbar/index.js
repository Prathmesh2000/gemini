import { useStore } from "../../../../contexts/StoreContext";
import NavMenu from "../../../NavMenu";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [menu, openMenu] = useState(false);
  let {
    data: { paths, contact_us },
  } = useStore();

  return (
    <div className="nav_section contact_us_section">
      <div className="contact_us_background"></div>
      <div className="nav_content">
        <NavMenu
          menu={menu}
          openMenu={openMenu}
          paths={paths}
          dark_menu={true}
        />
      </div>
    </div>
  );
};

export default Navbar;
