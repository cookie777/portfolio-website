import NavigationBar from "@components/organism/Navbar";
import Head from "next/head";
import { PageMeta } from "types";
import { ReactNode } from "react";
import { fetchCurrentDomain, fetchCurrentURL } from "@lib/fetchDomain";

export default function Layout({
  children,
  title,
  description,
  image,
}: { children: ReactNode } & PageMeta) {
  const domain: string = fetchCurrentDomain();

  const defaultTitle: string = `tak8`;
  const metaTitle: string = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const defaultDescription: string = `'tak8' is an individual website, which host portfolio, blog's and work's articles.`;
  const metaDescription: string = description
    ? description
    : defaultDescription;

  const defaultImage: string = `${domain}/thumbnail.png`;
  const metaImage: string = image ? image : defaultImage;

  const metaURL: string = fetchCurrentURL();

  return (
    <>
      <Head>
        {/* website */}
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription}></meta>
        <meta property="og:image" content={metaImage}></meta>
        <meta property="og:description" content={metaDescription}></meta>
        <meta property="og:title" content={metaTitle}></meta>

        {/* twitter  */}
        <meta name="twitter:url" content={metaURL}></meta>
        <meta name="twitter:title" content={metaTitle}></meta>
        <meta name="twitter:description" content={metaDescription}></meta>
        <meta name="twitter:image" content={metaImage}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>

        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <NavigationBar />
      {children}
    </>
  );
}
