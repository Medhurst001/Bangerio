import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
