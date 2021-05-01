import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Top } from "./Top";
import { TradeViewTop } from "./TradeViewTop";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Trade View Currency pair */}
      <div id="top-bar">
        <TradeViewTop />
      </div>
      <div></div>
      {/* Short contact info */}
      <Top />

      {/* Header with Navigation */}
      <Header />
      {children}
      {/* Footer  */}
      <Footer />
      <a href="#" className="scroll-to-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </>
  );
};
