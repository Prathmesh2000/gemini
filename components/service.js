import React, { useEffect, useState } from "react";
import ServiceMoblie from "./service_moile_view";
import ServiceWeb from "./service_web_view";

export default function service({ data }) {
  const [webView, setWebView] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 800) {
        setWebView(false);
      }
    }
    if (typeof window !== "undefined") {
      if (window.innerWidth > 800) {
        setWebView(true);
      }
    }
  }, []);
  return (
    <div>
      {webView ? <ServiceWeb data={data} /> : <ServiceMoblie data={data} />}
    </div>
  );
}
