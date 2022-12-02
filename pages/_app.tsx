// import '../styles/globals.css'
// import { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import React from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps}) {
  return <Component {...pageProps} />
}

export default MyApp
