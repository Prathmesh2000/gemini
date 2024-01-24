import Image from "next/image";
import Background from "../../assets/images/background.jpg";
import BottomArrow from "../../assets/images/bottomArrow.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useStore } from "../../contexts/StoreContext";
import NavMenu from "./NavMenu";
import { useState } from "react";

import css from "./index.module.css";

const Navbar = ({ data }) => {
  const [menu, openMenu] = useState(false);
  let {
    data: { paths },
  } = useStore();

  return (
    <div className={css.nav_section}>
      <div className={css.nav_content}>
        <NavMenu menu={menu} openMenu={openMenu} paths={paths} />
      </div>
    </div>
  );
};

export default Navbar;
