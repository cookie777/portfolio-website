import Document, { Html, Head, Main, NextScript } from 'next/document';
import NavigationBar from '../components/organism/navigation-bar';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Tak8 portfolio</title>
          <meta name="description" content="This is my portfolio website." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NavigationBar></NavigationBar>
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;