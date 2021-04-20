import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Top } from "./Top";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
