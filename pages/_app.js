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
import Script from 'next/script'
 
function MyApp({ Component, pageProps }) {
  return (
    <>
//     <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
//     <Script
//       id='google-analytics'
//       strategy="afterInteractive"
//       dangerouslySetInnerHTML={{
//         __html: `
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'G-FQ3GHWYDES', {
//             page_path: window.location.pathname,
//           });
//         `,
//         }}
//     />
    <span className="theme-bejamas" />
    <Component {...pageProps} />
    
    </>
  )
}
 
export default MyApp
