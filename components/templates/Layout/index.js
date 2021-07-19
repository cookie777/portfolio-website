import NavigationBar from "@components/organism/Navbar";
import fetchCurrentDomain from "@lib/fetchDomain";
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, title, description, image }) {

  const url = fetchCurrentDomain()

  const defaultTitle = `tak8`
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  const defaultDescription = `'tak8' is a portfolio website includes blogs and works articles.`
  const metaDescription = description ? description : defaultDescription

  const defaultImage = `${url}/site-thumbnail.jpg`
  const metaImage = image ? image : defaultImage

  const router = useRouter()
  const metaURL = `${url}${router.asPath}`

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
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <NavigationBar />
      {children}
    </>
  )
}

