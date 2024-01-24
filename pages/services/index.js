import React, { useEffect, Fragment } from "react";

import Services from "../../components/PageWrappers/Services";
// import Seo from "../components/Seo";

import { getNavData, getServicePageData, getHomePageData } from "../../lib/api";
import { useStore, processStore } from "../../contexts/StoreContext/index";

export default function Service(props) {
    const { data, setData } = useStore();
    useEffect(() => {
        let new_data = processStore(data, props, ["paths", "services", "home"]);
        if (new_data.status) setData(new_data.data);
    }, [props]);

    return data.loading ? (
        "loading"
    ) : (
        <Fragment>
            {/* <Seo data={data.home} /> */}
            <Services />
        </Fragment>
    );
}

export async function getStaticProps({ params }) {
    const services = await getServicePageData(null);
    const paths = await getNavData();
    const home = await getHomePageData();
    return {
        props: { paths, services, home },
        revalidate: 10,
    };
}
