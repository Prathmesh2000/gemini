import React, { Fragment } from "react";
import Head from "next/head";

export default function Seo({ data }) {
  const seo = data.seo;
  const facebook = (data.seo.metaSocial || []).find(
    (tag) => tag.socialNetwork == "Facebook"
  );
  const twitter = (data.seo.metaSocial || []).find(
    (tag) => tag.socialNetwork == "Twitter"
  );
  return (
    <Fragment>
      <Head>
        {seo.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seo.structuredData),
            }}
          />
        )}
        {seo.metaTitle && <title>{seo.metaTitle}</title>}
        {seo.metaViewport && (
          <meta name="viewport" content={seo.metaViewport} />
        )}
        {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        {seo.description && (
          <meta name="keywords" content={seo.metaDescription} />
        )}
        {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
        {seo.favicon && seo.favicon.data && (
          <link
            rel="icon"
            type="image/x-icon"
            href={seo.favicon.data.attributes.url}
          />
        )}
        {twitter && (
          <Fragment>
            {twitter.cardType && (
              <meta name="twitter:card" content={twitter.cardType} />
            )}
            {twitter.image && twitter.image.data && (
              <meta
                name="twitter:image"
                content={twitter.image.data.attributes.url}
              />
            )}
            {twitter.title && (
              <meta name="twitter:title" content={twitter.title} />
            )}
            {twitter.description && (
              <meta name="twitter:description" content={twitter.description} />
            )}
          </Fragment>
        )}
        <meta property="og:type" content="website" />
        {facebook && (
          <Fragment>
            {facebook.image && facebook.image.data && (
              <meta
                name="og:image"
                content={facebook.image.data.attributes.url}
              />
            )}
            {facebook.title && (
              <meta name="og:title" content={facebook.title} />
            )}
            {facebook.description && (
              <meta name="og:description" content={facebook.description} />
            )}
          </Fragment>
        )}
      </Head>
    </Fragment>
  );
}

{
  /* <title>Doctors Galaxy - Health care knowledge sharing platform</title>
<meta
  name="description"
  content="Doctors Galaxy is a digital network for health professionals, life sciences professionals, students in these domains and general users. The primary objective is to provide members with access to relevant updates on areas shared by their peers. Members can connect and collaborate with their peers and seekers."
/>
<meta name="keywords" content="doctors, galaxy" /> */
}
