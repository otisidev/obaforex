import { Layout } from "../component/Layout";
import { Slider } from "../component/Slider";
import { Partners } from "../component/Partners";
import { Team } from "../component/Team";
import { JoinUs } from "../component/JoinUs";

const Home = () => {
  return (
    <>
      <Layout title="Home">
        {/* Sliders */}
        <Slider />

        {/* Why choose Obaforex */}
        <section className="real-world">
          <div
            className="real-world-shape wow slideInLeft"
            data-wow-delay="100ms"
            data-wow-duration="2500ms"
            style={{
              backgroundImage: "url(assets/images/shapes/real-world-shape.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Why Choose Obaforex</h2>
              <span className="section-title__tagline">
                We are the largest Forex trading / investment Company in
                Nigeria!
              </span>
            </div>
            <div className="row">
              {/* Result Driven */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="real-world__single">
                  <div className="icon-lg clr-primary">
                    <span className="icon-wealth"></span>
                  </div>
                  <h2 className="real-world__title">Result Driven</h2>
                  <p>We are result oriented and we believe you are too.</p>
                </div>
              </div>
              {/* Reliable */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="real-world__single">
                  <div className="icon-lg clr-primary">
                    <span className="icon-data-analytics"></span>
                  </div>
                  <h2 className="real-world__title">Reliable</h2>
                  <p>We are Obaforex for a reason - We keep our promises.</p>
                </div>
              </div>
              {/* Responsive */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="real-world__single">
                  <div className="icon-lg clr-primary">
                    <span className="icon-report"></span>
                  </div>
                  <h2 className="real-world__title">Responsive</h2>
                  <p>
                    We are constantly responding to your ever-changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statement from the CEO. The King himself */}
        <section className="welcome-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="welcome-one__left">
                  <div className="welcome-one__img-box">
                    <img src="assets/images/resources/ceo.png" alt="" />
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          marginTop: "40px",
                          display: "inline-bloack",
                        }}
                      >
                        <img
                          src="assets/images/signature.png"
                          alt=""
                          style={{
                            display: "inline-block",
                            marginTop: "-40px",
                          }}
                        />
                        <div
                          style={{
                            display: "inline-block",
                            marginLeft: "20px",
                          }}
                        >
                          <h3>M.B. Samuel</h3>
                          <p>Co-founder and CEO</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=osnUQfGzqzU"
                      className="welcome-one__video-btn video-popup"
                    >
                      <div className="welcome-one__video-btn-icon">
                        <i className="fa fa-play"></i>
                        <span className="ripple"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="welcome-one__right">
                  <h2 className="welcome-one__title">
                    Obaforex is leading in the market
                  </h2>
                  <p className="welcome-one__text">
                    We are a global foreign currency and investment company that
                    works with you to address your most critical business
                    priorities. To obtain higher performance, our team first
                    identifies the critical obstacles toward progress and then
                    develop a coherent approach to overcoming them. We help you
                    achieve your financial freedom and goals.
                    <br />
                    <br />
                    <a
                      href="/join"
                      className="thm-btn our-mission__btn"
                      style={{ border: "1px solid #3c72fc" }}
                    >
                      Join Us
                    </a>
                  </p>
                  <p className="welcome-one__text-two">
                    We are great players in the Forex industry.{" "}
                    <a href="#">
                      <b>Join us</b>
                    </a>{" "}
                    today and start off your journey to financial freedom.
                  </p>
                  <div className="welcome-one__call">
                    <div className="welcome-one__call-icon">
                      <span className="icon-phone-ringing"></span>
                    </div>
                    <div className="welcome-one__call-text">
                      <p>Have any question? Give us a call</p>
                      <a href="tel:+92-666-888-0000">+234 904 343 0808</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Box Statements */}
        <section className="two-boxes">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        We know WHAT to trade
                      </h3>
                      <p className="two-boxes__text">
                        With a team of dedicated experts, we know the right
                        commodity to trade for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        We know WHEN to trade
                      </h3>
                      <p className="two-boxes__text">
                        We have a good understanding of times and seasons, we
                        are 24/7 committed to success
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        We know WHERE to trade
                      </h3>
                      <p className="two-boxes__text">
                        We help our clients make the best decisions with the
                        help of our powerful AI systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">We know HOW to trade</h3>
                      <p className="two-boxes__text">
                        We've got the right strategise in place, all our clients
                        are assured of amazing results
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">
                        We Are CAC Certified Company
                      </h3>
                      <p className="two-boxes__text">
                        We have achieved CAC RC:3005196 certification. NDIC and
                        SEC in process
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="two-boxes__single">
                  <div className="two-boxes__single-content">
                    <div className="two-boxes__count">
                      <span></span>
                    </div>
                    <div className="two-boxes__content">
                      <h3 className="two-boxes__title">We Are Obaforex!</h3>
                      <p className="two-boxes__text">
                        We are the leading Global Forex trading company. Become
                        part of what we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission, Vision and Strategy */}
        <section className="cases-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">More About Us</h2>
              <span className="section-title__tagline">
                We help our clients achieve their goals to financial freedom.
              </span>
            </div>
            <div className="row">
              {/* Our Mission */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-mobile-analytics"></span>
                      </div>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">Our Mission</a>
                      </h2>
                      <p className="cases-one__tagline">
                        To provide education and tools in order to improve
                        people's financial knowledge and thus generate a
                        significant change in their economy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-research"></span>
                      </div>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">Our Vision</a>
                      </h2>
                      <p className="cases-one__tagline">
                        Simplifying worldwide trading and maximizing Africa's
                        investment opportunity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our Strategies */}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="cases-one__single">
                  <div className="cases-one__img-box">
                    <div className="cases-one__img">
                      <img
                        src="assets/images/resources/cases-1-img-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cases-one__content">
                      <div className="cases-one__icon">
                        <span className="icon-creative"></span>
                      </div>
                      <h2 className="cases-one__tilte">
                        <a href="cases-details.html">Our Strategies</a>
                      </h2>
                      <p className="cases-one__tagline">
                        Integrity and transparency are the values that define
                        Obaforex. We are governed by a strong ethical conduct.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You found Us */}
        <section className="our-mission">
          <div
            className="our-mission-bg jarallax"
            data-jarallax
            data-speed="0.2"
            data-imgPosition="50% 0%"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/our-mission-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="our-mission__inner">
                  <h2 className="our-mission__title">
                    You Found Us, <br />
                    Now Let Us Help You <br />
                    Gain Financial Freedom
                  </h2>
                  <a href="/join" className="thm-btn our-mission__btn">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invest and Chill */}
        <section className="faq-one">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="section-title__title">Invest and Chill</h2>
              <span className="section-title__tagline">
                Join Us, let's help you with all the complexities of Forex
                Trading.
              </span>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="welcome-one__left">
                  <div className="welcome-one__img-box">
                    <img src="assets/images/logo-img.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-one__right">
                  <div className="faq-one__img">
                    <img src="assets/images/oba-team.png" alt="Obaforex Team" />
                  </div>
                  <div className="faq-one__bottom">
                    <div className="faq-one__list-box">
                      <ul className="list-unstyled faq-one__list">
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We help manage your forex account</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We give you accurate signals</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We train on Forex</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We provide partnership</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We trade, you invest and earn</p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <span className="icon-tick"></span>
                          </div>
                          <div className="text">
                            <p>We support you all the way</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="faq-one__experience-box">
                      <h2>12</h2>
                      <p>
                        Years of <br /> Expeirence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners */}
        <Partners />

        {/* Our Team */}
        <Team />

        {/* Google Map */}
        <section className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.237450532857!2d8.863871717443848!3d9.830413700000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375a46a35b1a7%3A0xe6245d4ae13fdfc6!2sObaforex%20Global%20Trading!5e0!3m2!1sen!2sng!4v1618650461578!5m2!1sen!2sng"
            className="google-map__one"
            allowFullScreen
          ></iframe>
        </section>

        {/* Join us tag */}
        <JoinUs />
      </Layout>
    </>
  );
};
export default Home;
