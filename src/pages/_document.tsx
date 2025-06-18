import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Load Font Awesome icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnH2N2bKZm7djzLbJb07ZCkIwN0ZL6fnBqYoCeu6sIp5Wh+kgiKtRfEv7co0w+5z5z+znZyFQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
