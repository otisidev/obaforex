import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { ScrollToTop } from "./ScrollToTop";
import { Search } from "./Search";

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="preloader">
        <img
          className="preloader__image"
          width="60"
          src="assets/images/loader.png"
          alt=""
        />
      </div>
      {/* preloader */}
      <div className="page-wrapper">
        {/* Header */}
        <Header />
        {/* Page content */}
        {children}
        {/* Footer */}
        <Footer />
      </div>
      {/* Mobile Navigation */}
      <MobileNav />
      {/* Search Popup */}
      <Search />
      {/* ScrollToTop */}
      <ScrollToTop />
    </>
  );
};
