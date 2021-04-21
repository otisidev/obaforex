import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { Partners } from "../../component/Partners";
import { Team } from "../../component/Team";
import moreAboutUs from "../../data/moreAboutUs.json";

const About = () => {
  return (
    <Layout title="About Us">
      {/* Banner */}
      <Banner page="About Us" />

      {/* About Obaforex */}
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12">
              <img
                src="img/about/about-img.png"
                className="rounded-border shadow-primary"
                alt=""
              />
            </div>
            <div className="col-md-6 col-sm-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary">Who we are</small>
                  <h3 className="semi-bold font-size-32">
                    We Trade. We Manage. We Train. We Signal
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      We are a global foreign currency and investment company
                      which started operations in March, 2019 to take advantage
                      of the blockchain and emerging technologies and build a
                      sustainable financial system for investors.
                      <br />
                      We focus on delivering quantifiable results for our
                      clients, based on a well-tested methodology and solid
                      experience. Obaforex is managed by a young team with
                      expertise and experience from the fields of management,
                      information technology, finance, sales and marketing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flexibility, Integrity and Profitability */}
          <div className="row mt-40">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-locked-combination-padlock-stroke"></i>
                </div>
                <div className="features-box-content">
                  <h3>Flexibility</h3>
                  <p>
                    We believe in creative adaptation to changing business
                    realities for sustainability and increased profitability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-marketing"></i>
                </div>
                <div className="features-box-content">
                  <h3>Integrity and Transparency</h3>
                  <p>
                    We believe that a lasting and rewarding relationship is
                    built on mutual respect and trust
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="features-box">
                <div className="features-box-icon">
                  <i className="icon-chess"></i>
                </div>
                <div className="features-box-content">
                  <h3>Profitability</h3>
                  <p>
                    We believe that our primary aim is to produce healthy profit
                    to our investors. we are commited to our promises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <Team />

      {/* We are here for you */}
      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold">We Are Here For You</h3>
            <div className="section-heading-line"></div>
            <p>Here Are Few More Things About Us</p>
          </div>
          <div
            className="owl-carousel owl-theme customizable-carousel mt-40"
            data-loop="true"
            data-items="1"
            data-md-items="1"
            data-sm-items="1"
            data-xs-items="1"
            data-space="15"
            data-autoplay="false"
            data-autospeed="3500"
            data-nav-dots="true"
            data-nav-arrows="true"
          >
            {moreAboutUs.map((rec, idx) => (
              <div key={idx} className="item">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-12">
                    <img
                      src={rec?.img_path}
                      className="rounded-border"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    <div className="pl-30-md">
                      <div className="section-heading text-left mt-5">
                        <small className="text-scondary">{rec?.title_sm}</small>
                        <h3 className="semi-bold font-size-32">{rec?.title}</h3>
                        <div className="section-heading-line line-thin"></div>
                        <div className="text-content">
                          {rec?.body_text?.map((text, idx) => (
                            <p key={idx}>{text}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="section-block grey-bg background-shape-3">
        <div className="container">
          <div className="section-heading text-center">
            <h3 className="semi-bold font-size-33">How It Works</h3>
            <div className="section-heading-line line-thin"></div>
            <p>Three simple steps to financial freedom</p>
          </div>
          <div className="row">
            {/* Create Account */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card">
                <div className="testmonial-item-5-img numb-sm">
                  <h2 className="text-primary mt-2">1</h2>
                </div>
                <div className="testmonial-item-5-name">
                  <h4>Create An Account</h4>
                </div>
                <div className="testmonial-item-5-text mb-3">
                  <p className="text-center">
                    Start your journey by registering with us
                  </p>
                </div>
                <div className="text-center mt-20">
                  <a href="#" className="button-primary button-md">
                    Create Account
                  </a>
                </div>
              </div>
            </div>

            {/* Fund Your Account */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card">
                <div className="testmonial-item-5-img numb-sm">
                  <h2 className="text-primary mt-2">2</h2>
                </div>
                <div className="testmonial-item-5-name">
                  <h4>Fund Your Account</h4>
                </div>
                <div className="testmonial-item-5-text mb-3">
                  <p className="text-center">
                    Next, make payments to your account
                  </p>
                </div>
                <div className="text-center mt-20">
                  <a href="#" className="button-primary button-md">
                    Fund Account
                  </a>
                </div>
              </div>
            </div>

            {/* See Result */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card">
                <div className="testmonial-item-5-img numb-sm">
                  <h2 className="text-primary mt-2">3</h2>
                </div>
                <div className="testmonial-item-5-name">
                  <h4>See Result</h4>
                </div>
                <div className="testmonial-item-5-text mb-3">
                  <p className="text-center">
                    Watch your earnings grow daily by 5%. You deserve to be rich
                  </p>
                </div>
                <div className="text-center mt-20">
                  <a href="#" className="button-primary button-md">
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners */}
      <Partners />
    </Layout>
  );
};

export default About;
