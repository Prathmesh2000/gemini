import React, { useEffect, Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "../components/PageWrappers/HomePage";
import Seo from "../components/Seo";
import Cookies from '../components/CookiesSnackBar'
import EventModal from "../components/EventModal"

import { getHomePageData, getNavData } from "../lib/api";
import { useStore, processStore } from "../contexts/StoreContext";

export default function Home(props) {
  const { data, setData } = useStore();
  useEffect(() => {
    let new_data = processStore(data, props, ["paths", "home"]);
    if (new_data.status) setData(new_data.data);
  }, [props]);

  return data.loading ? (
    "loading"
  ) : (
    <Fragment>
      <EventModal />
      <Cookies />
      <Seo data={data.home} />
      <HomePage />
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  // const services = await getServicePageData();
  const paths = await getNavData();
  const home = await getHomePageData();
  return {
    props: { paths, home },
    revalidate: 10,
  };
}
