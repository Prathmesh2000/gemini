import React, { useEffect, useState, Fragment } from "react";

import TeamsPage from "../../components/PageWrappers/TeamsPage";
import Seo from "../../components/Seo";

import {
  getNavData,
  getContactUsPageData,
  getTeamsPageDataSeo,
} from "../../lib/api";
import { useStore, processStore } from "../../contexts/StoreContext";

export default function AboutUs(props) {
  const { data, setData } = useStore();
  useEffect(() => {
    let new_data = processStore(data, props, [
      "paths",
      "contact_us",
      "seoData",
    ]);
    if (new_data.status) setData(new_data.data);
  }, [props]);

  return data.loading ? (
    "loading"
  ) : (
    <Fragment>
      <Seo data={data.seoData} />
      <TeamsPage />
    </Fragment>
  );
}

export async function getStaticProps() {
  // const services = await getServicePageData();
  const paths = await getNavData();
  const seoData = await getTeamsPageDataSeo();
  const contact_us = await getContactUsPageData();

  return {
    props: { paths, contact_us, seoData },
    revalidate: 10,
  };
}
