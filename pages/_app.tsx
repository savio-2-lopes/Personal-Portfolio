import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-3 px-5 my-10 lg:mb-0 md:mb-16 sm:px-5 md:px-6 lg:px-6 xl:px-10">
        <div className="p-10 col-span-12 text-base text-center bg-white lg:col-span-3 rounded-2xl shadow-custom-light">
          <Sidebar />
        </div>

        <div className="flex flex-col p-10 col-span-12 overflow-hidden bg-white shadow-custom-light rounded-2xl lg:col-span-9">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
      <Script
        id="crisp-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.$crisp=[];window.CRISP_WEBSITE_ID="af129585-75b7-40a3-9bd4-b815ba3597ba";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
      `,
        }}
      />
    </div>
  );
}

export default MyApp;
