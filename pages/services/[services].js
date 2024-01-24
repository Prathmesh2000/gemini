import React, { useEffect, Fragment } from "react";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router"
import Services from "../../components/PageWrappers/Services";
import { getNavData, getServicePageData, getHomePageData } from "../../lib/api";
import { useStore, processStore } from "../../contexts/StoreContext/index";

const serviceDetails = (props) => {
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
    const serviceName = params.services
    const services = await getServicePageData(serviceName);
    const paths = await getNavData();
    const home = await getHomePageData();
    return {
        props: { paths, services, home },
        revalidate: 10,
    }
}

export async function getStaticPaths({ params }) {
    const services = await getServicePageData();
    let paths = services.list.map((e) => {
        return {
            params: { services: e.attributes.slug }
        }
    })
    return {
        paths,
        fallback: false,
    };
}
export default serviceDetails
