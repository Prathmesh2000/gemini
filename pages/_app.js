import { NextSeo } from "next-seo";
import "../styles/styles.css";
import "../assets/css/style.css";
import "../styles/globals.css";
import "../assets/css/navbar.css";
import "../styles/fonts.css";
import { StoreProvider } from "../contexts/StoreContext";
import { Fragment } from "react";
import { CookiesProvider } from 'react-cookie';

function App({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Fragment>
        <NextSeo noindex={process.env.NO_INDEX} nofollow={process.env.NO_INDEX} />
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </Fragment>
    </CookiesProvider>
  );
}

export default App;
