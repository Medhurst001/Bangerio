// import '../styles/globals.css';
// import 'prismjs/themes/prism-tomorrow.css';

// import Script from 'next/script'

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <span className="theme-bejamas" />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import '../styles/globals.css'
import 'prismjs/themes/prism-tomorrow.css';
import Layout from '../components/Layout/Layout'
import Script from 'next/script'
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"
 
function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
 
    router.events.on("routeChangeComplete", handleRouteChange);
 
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
 
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></Script>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FQ3GHWYDES', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
<span className="theme-bejamas" />
      <Component {...pageProps} />
{/*     <Layout>
      <Component {...pageProps} />
    </Layout> */}
    </>
  )
}

export default MyApp
