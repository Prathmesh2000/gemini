import React, { useEffect, Fragment } from "react";

import AboutUsPage from "../../components/PageWrappers/AboutUsPage";
import Seo from "../../components/Seo";

import {
  getAboutUsPageDat,
  getAboutUsPageData,
  getHomePageData,
  getNavData,
} from "../../lib/api";
import { useStore, processStore } from "../../contexts/StoreContext";

export default function AboutUs(props) {
  const { data, setData } = useStore();
  useEffect(() => {
    let new_data = processStore(data, props, ["paths", "home", "about_us"]);
    if (new_data.status) setData(new_data.data);
  }, [props]);

  return data.loading ? (
    "loading"
  ) : (
    <Fragment>
      <Seo data={data.home} />
      <AboutUsPage />
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  // const services = await getServicePageData();
  const paths = await getNavData();
  const home = await getHomePageData();
  const about_us = await getAboutUsPageData();
  return {
    props: { paths, home, about_us },
    revalidate: 10,
  };
}
