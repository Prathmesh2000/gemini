import { useStore } from "../../../../contexts/StoreContext";
import NavMenu from "../../../NavMenu";
import ContactUsForm from "../ContactUsForm";
import { useState } from "react";

const Navbar = ({ data }) => {
  const [menu, openMenu] = useState(false);
  let {
    data: { paths, contact_us },
  } = useStore();

  return (
    <div className="nav_section contact_us_section">
      <div className="contact_us_background">
        <img
          src={contact_us.Background.data.attributes.url}
          alt={contact_us.Background.data.attributes.alternativeText}
        />
      </div>
      <div className="nav_content">
        <NavMenu
          menu={menu}
          openMenu={openMenu}
          paths={paths}
          dark_menu={true}
        />
        <div className="contact-us-wrapper">
          <div className="contact-us-content">
            <ContactUsForm contact_us={contact_us} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
