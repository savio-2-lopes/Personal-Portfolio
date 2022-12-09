import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="See more about me, some of my certifications and some of my projects"
          />
          <meta
            name="image"
            content="https://savioaugustolopes.netlify.app/screenshots.png"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href="https://savioaugustolopes.netlify.app"
            data-baseprotocol="https:"
            data-basehost="savioaugustolopes.netlify.app"
          />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#4E56FF" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="msapplication-TileColor" content="#4E56FF" />
          <meta name="google" content="notranslate" />
          <meta
            property="og:url"
            content="https://savioaugustolopes.netlify.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Savio Lopes · Portfólio" />
          <meta
            property="og:description"
            content="See more about me, some of my certifications and some of my projects"
          />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Savio Lopes · Portfólio" />
          <meta
            property="og:image"
            content="https://savioaugustolopes.netlify.app/screenshots.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://savioaugustolopes.netlify.app/screenshots.png"
          />
          <meta
            property="og:image:alt"
            content="See more about me, some of my certifications and some of my projects"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Savio Lopes · Portfólio" />
          <meta name="twitter:site" content="@savio-dev-lopes" />
          <meta name="twitter:creator" content="@savio-dev-lopes" />
          <meta
            name="twitter:image"
            content="https://savioaugustolopes.netlify.app/screenshots.png"
          />
          <meta
            name="twitter:image:src"
            content="https://savioaugustolopes.netlify.app/screenshots.png"
          />
          <meta
            name="twitter:image:alt"
            content="See more about me, some of my certifications and some of my projects"
          />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="630" />
          <link rel="apple-touch-icon" sizes="48x48" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="72x72" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="96x96" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="144x144" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="192x192" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="256x256" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="384x384" href="/avatar.jpeg" />
          <link rel="apple-touch-icon" sizes="512x512" href="/avatar.jpeg" />
          <meta name="next-head-count" content="43" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body className="flex flex-col bg-dark-200 min-h-screen items-center justify-center">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
