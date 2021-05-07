import Head from 'next/head'
import Image from 'next/image'
import Menu from './menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tak8 portfolio</title>
        <meta name="description" content="This is my portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Menu></Menu>
      <footer>
      </footer>
    </div>
  )
}
