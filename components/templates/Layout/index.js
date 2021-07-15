import NavigationBar from "@components/organism/Navbar";
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, title, description, image }) {
  // console.log(title, description, image)

  const defaultTitle = "tak8"
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  const defaultDescription = "'tak8' is a portfolio website includes blogs and works articles."
  const metaDescription = description ? description : defaultDescription

  const defaultImage = ""
  const metaImage = image ? image : defaultImage

  const router = useRouter()
  const metaURL = `https://tak8.dev${router.asPath}`

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription}></meta>
        <meta property="og:image" content={metaImage}></meta>
        <meta property="og:description" content={metaDescription}></meta>
        <meta property="og:title" content={metaTitle}></meta>

        <meta name="twitter:url" content={metaURL}></meta>
        <meta name="twitter:title" content={metaTitle}></meta>
        <meta name="twitter:description" content={metaDescription}></meta>
        <meta name="twitter:image" content={metaImage}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <NavigationBar />
      {children}
    </>
  )
}

