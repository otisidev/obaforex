export const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div
          className="site-footer-shape wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="3500ms"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-shape.png)",
          }}
        ></div>
        <div className="container">
          <div className="site-footer__top">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__column footer-widget__about">
                  <div className="footer-widget__about-logo">
                    <a href="index.html">
                      <img src="assets/images/logo-1.png" alt="Logo" />
                    </a>
                  </div>
                  <p className="footer-widget__text">
                    Welcome to Obaforex Global Trading ltd, your ticket to
                    financial freedom.
                  </p>
                  <ul className="list-unstyled footer-widget__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-phone-square-alt"></i>
                      </div>
                      <div className="text">
                        <p>
                          <a href="tel:+92-666-888-0000">
                            +2349043430808 or +2349043430909
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:helpdesk@obaforex.com">
                            helpdesk@obaforex.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="text">
                        <p>
                          No. 233 Building Material Along Bukuru Express Way,
                          Jos, Nigeria.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__column footer-widget__explore clearfix">
                  <h3 className="footer-widget__title">Explore</h3>
                  <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                    <li>
                      <a href="assets/document/Obaforex-PRIVACY-POLICY.pdf">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="assets/document/Obaforex-Disclaimer.pdf">
                        Disclaimer
                      </a>
                    </li>
                    <li>
                      <a href="assets/document/Anti-Money-Laundering-Policy-OBAFOREX.pdf">
                        Anti-Money Laundering
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-6 col-md-8 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title footer-widget__title-news">
                    Newsletter
                  </h3>
                  <form className="footer-widget__newsletter-form">
                    <p className="footer-widget__newsletter-text">
                      Subsrcibe for latest articles and resources
                    </p>
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Full Risk Disclosure */}
          <div className="site-footer-bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer-bottom__inner">
                  <p>
                    FULL RISK DISCLOSURE: Trading contains substantial risk and
                    is not for every investor. An investor could potentially
                    lose all or more than the initial investment. Risk capital
                    is money that can be lost without jeopardizing ones
                    financial security or life style. Only risk capital should
                    be used for trading and only those with sufficient risk
                    capital should consider trading. Past performance is not
                    necessarily indicative of future results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="site-footer-bottom">
            <div className="row">
              <div className="col-xl-12">
                <div className="site-footer-bottom__inner">
                  <div className="site-footer-bottom__left">
                    <p>
                      © Copyright 2021 OBAFOREX LTD, All rights reserved.
                      developed by{" "}
                      <a href="http://looptrace.com">looptrace.com</a>
                    </p>
                  </div>
                  <div className="site-footer__social">
                    <a
                      href="https://web.facebook.com/Obaforexglobal"
                      target="_blank"
                      className="clr-fb"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="https://twitter.com/Obaforex_global"
                      target="_blank"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://web.instagram.com/Obaforex_global"
                      target="_blank"
                      className="clr-ins"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://t.me/obaforex_global"
                      target="_blank"
                      title="Telegram"
                    >
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a href="mailto:support@obaforex.com" title="Send Mail">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="https://wa.me/+2348098989862"
                      target="_blank"
                      title="Whatsapp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/obaforexglobal"
                      target="_blank"
                      title="Linkedin"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="tel:+2348098989862" target="_blank" title="Phone">
                      <i className="fas fa-phone"></i>
                    </a>
                    <a
                      href="https://www.youtube.com/user/Obaforex"
                      target="_blank"
                      title="Youtube"
                    >
                      <i className="fas fa-video"></i>
                    </a>
                    <a
                      href="https://obaforex.airtime.pro"
                      target="_blank"
                      title="Obaforex 92.1 FM"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
