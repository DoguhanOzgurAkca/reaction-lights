// src/components/og-tags/og-tags.js
import Head from "next/head";

const OGTags = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="og:url"
        content={typeof window !== "undefined" ? window.location.href : ""}
      />
      <meta property="og:type" content="website" />
      {/* Add other meta tags as needed */}
    </Head>
  );
};

export default OGTags;
