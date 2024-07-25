// components/Meta.js
import Head from "next/head";

const Meta = ({ title, description, url, image }) => (
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Your Site Name" />
    <meta property="og:locale" content="en_US" />
    <title>{title}</title>
  </Head>
);

export default Meta;
