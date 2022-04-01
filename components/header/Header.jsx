import Head from "next/head";
export default function Header({ title, imageUrl, imageAlt, description }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      {title && <title>{title}</title>}
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={"https://www.inmuebles1a.com/"} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="fb:app_id" content={"3224959157737305"} />

      <meta property="twitter:card" content={"summary_large_image"} />
      <meta property="twitter:url" content={"https://www.inmuebles1a.com/"} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}
    </Head>
  );
}
