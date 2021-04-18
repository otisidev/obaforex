import { Banner } from "../../component/Banner";
import { JoinUs } from "../../component/JoinUs";
import { Layout } from "../../component/Layout";
import { MoreAboutUs } from "../../component/MoreAboutUs";
import { Partners } from "../../component/Partners";
import { Team } from "../../component/Team";

const About = () => {
  return (
    <Layout title="About Us">
      {/* Page Banner */}
      <Banner page="About" />

      {/* About  */}
      <section className="about" style={{ paddingBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="about__img-box">
                <div className="">
                  <img src="assets/images/the-king.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__right">
                <h2 className="about__title">
                  We Trade. We Manage. We Train. We Signal
                </h2>
                <p className="about__right-text">
                  We are a global foreign currency and investment company which
                  started operations in March, 2019 to take advantage of the
                  blockchain and emerging technologies and build a sustainable
                  financial system for investors.
                  <br />
                  We focus on delivering quantifiable results for our clients,
                  based on a well-tested methodology and solid experience.
                  Obaforex is managed by a young team with expertise and
                  experience from the fields of management, information
                  technology, finance, sales and marketing.
                </p>
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
              <div className="two-boxes__single" style={{ minHeight: "250px" }}>
                <div className="two-boxes__single-content">
                  <div className="two-boxes__count">
                    <span></span>
                  </div>
                  <div className="two-boxes__content">
                    <h3 className="two-boxes__title">Flexibility</h3>
                    <p className="two-boxes__text">
                      We believe in creative adaptation to changing business
                      realities for sustainability and increased profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="two-boxes__single" style={{ minHeight: "250px" }}>
                <div className="two-boxes__single-content">
                  <div className="two-boxes__count">
                    <span></span>
                  </div>
                  <div className="two-boxes__content">
                    <h3 className="two-boxes__title">Integrity</h3>
                    <p className="two-boxes__text">
                      We believe that a lasting and rewarding relationship is
                      built on mutual respect and trust
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="two-boxes__single" style={{ minHeight: "250px" }}>
                <div className="two-boxes__single-content">
                  <div className="two-boxes__count">
                    <span></span>
                  </div>
                  <div className="two-boxes__content">
                    <h3 className="two-boxes__title">Transparency</h3>
                    <p className="two-boxes__text">
                      We conduct our transactions and process with high
                      efficiency and transparency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="two-boxes__single" style={{ minHeight: "250px" }}>
                <div className="two-boxes__single-content">
                  <div className="two-boxes__count">
                    <span></span>
                  </div>
                  <div className="two-boxes__content">
                    <h3 className="two-boxes__title">Profitability</h3>
                    <p className="two-boxes__text">
                      We believe that our primary aim is to produce healthy
                      profit to our investors. we are commited to our promises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We are here for You */}
      <section className="counters-one" style={{ minHeight: "400px" }}>
        <div
          className="counters-one-bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/counter-one-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div
            className="section-title text-center"
            style={{ marginBottom: "0" }}
          >
            <h2
              className="section-title__title"
              style={{ color: "white", paddingTop: "100px" }}
            >
              We are here for you
            </h2>
            <span className="section-title__tagline">
              Here are a few more things about Us
            </span>
          </div>
        </div>
      </section>

      {/* More things abou Us */}
      <MoreAboutUs />

      {/* How it Works */}
      <section className="team-one team-page">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title__title">How it Works</h2>
            <span className="section-title__tagline">
              Three simple steps to financial freedom!
            </span>
          </div>
          <div className="row">
            {/* Step One */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                className="services-details__help-box"
                style={{ minHeight: "300px" }}
              >
                <div
                  className="services-details__help-box-bg"
                  style={{
                    backgroundImage: "url(assets/images/services/pic-bg.png)",
                  }}
                ></div>
                <div className="services-details__help-box-bg-overly"></div>
                <h3 className="services-details__help-box-title">
                  Create an Account
                </h3>
                <p className="services-details__help-box-text">
                  Start your journey by registering with us
                </p>
                <a href="#" className="services-details__phone">
                  Create Account
                </a>
              </div>
            </div>

            {/* Step Two */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                className="services-details__help-box"
                style={{ minHeight: "300px" }}
              >
                <div
                  className="services-details__help-box-bg"
                  style={{
                    backgroundImage: "url(assets/images/services/pic-bg.png)",
                  }}
                ></div>
                <div className="services-details__help-box-bg-overly"></div>
                <h3 className="services-details__help-box-title">
                  Fund Your Account
                </h3>
                <p className="services-details__help-box-text">
                  Next, make payments to your account
                </p>
                <a href="#" className="services-details__phone">
                  Fund Account
                </a>
              </div>
            </div>

            {/* Step Two */}
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div
                className="services-details__help-box"
                style={{ minHeight: "300px" }}
              >
                <div
                  className="services-details__help-box-bg"
                  style={{
                    backgroundImage: "url(assets/images/services/pic-bg.png)",
                  }}
                ></div>
                <div className="services-details__help-box-bg-overly"></div>
                <h3 className="services-details__help-box-title">
                  See Results
                </h3>
                <p className="services-details__help-box-text">
                  Watch your earnings grow daily by 5%. You deserve to be rich
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <Team />

      {/* Our Partners */}
      <Partners />

      {/* Join us tag */}
      <JoinUs />
    </Layout>
  );
};

export default About;
