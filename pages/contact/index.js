import React, { useEffect, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContactUsPage from "../../components/PageWrappers/ContactUsPage";
import Seo from "../../components/Seo";

import {
  getContactUsPageData,
  getHomePageData,
  getNavData,
} from "../../lib/api";
import { useStore, processStore } from "../../contexts/StoreContext";

export default function ContactUs(props) {
  const { data, setData } = useStore();
  useEffect(() => {
    let new_data = processStore(data, props, ["paths", "home", "contact_us"]);
    if (new_data.status) setData(new_data.data);
  }, [props]);

  return data.loading ? (
    "loading"
  ) : (
    <Fragment>
      <Seo data={data.contact_us} />
      <ContactUsPage />
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  // const services = await getServicePageData();
  const paths = await getNavData();
  const home = await getHomePageData();
  const contact_us = await getContactUsPageData();
  return {
    props: { paths, home, contact_us },
    revalidate: 10,
  };
}
