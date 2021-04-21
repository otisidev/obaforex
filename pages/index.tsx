import { Layout } from "../component/Layout";
import { Slider } from "../component/Slider";
import chooseUs from "../data/chooseUs.json";

const Home = () => {
  return (
    <>
      <Layout title="Home">
        {/* Home Slider */}
        <Slider />

        {/* Welcome to Obaforex */}
        <div
          className="section-block-bg"
          style={{ backgroundImage: "url('img/content/business/bg5.jpg')" }}
        >
          <div className="container">
            {/* Title and Desc. */}
            <div className="section-heading text-center">
              <h3 className="semi-bold font-size-35">Welcome to Obaforex</h3>
              <div className="section-heading-line line-thin"></div>
              <p>
                We are Obaforex.
                <br />
                The leading global Investment / Trading Company.
              </p>
            </div>

            <div className="row mt-30">
              {/* Result Driven */}
              <div className="col-md-4 col-sm-12 col-12">
                <div className="service-block">
                  <img src="img/content/services/value-img-1.png" alt="img" />
                  <div className="service-block-content">
                    <h4>Result-Driven</h4>
                    <p>We are result oriented and we believe you are too</p>
                    <a href="#" className="service-block-content-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Reliable */}
              <div className="col-md-4 col-sm-12 col-12">
                <div className="service-block">
                  <img src="img/content/services/value-img-2.png" alt="img" />
                  <div className="service-block-content">
                    <h4>Reliable</h4>
                    <p>We are Obaforex for a reason, we keep our promises</p>
                    <a href="#" className="service-block-content-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Responsive */}
              <div className="col-md-4 col-sm-12 col-12">
                <div className="service-block">
                  <img src="img/content/services/value-img-3.png" alt="img" />
                  <div className="service-block-content">
                    <h4>Responsive</h4>
                    <p>We are responsive to your ever-changing needs</p>
                    <a href="#" className="service-block-content-button">
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statement from the CEO, the king himself */}
        <div className="section-block grey-bg background-shape-3">
          <div className="container">
            <div className="row">
              {/* Statement */}
              <div className="col-md-5 col-12">
                <div className="section-heading">
                  <small className="uppercase">Who we are</small>
                  <h4 className="semi-bold">We're Obaforex</h4>
                </div>
                <div className="text-content mt-15 text-justify">
                  <p>
                    We are a global foreign currency and investment company that
                    works with you to address your most critical business
                    priorities. To obtain higher performance, our team first
                    identifies the critical obstacles toward progress and then
                    develop a coherent approach to overcoming them. We help you
                    achieve your financial freedom and goals.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <ul className="primary-list mt-20">
                      <li>
                        <i className="fas fa-check-circle"></i>We help manage
                        your forex account
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>We give you
                        accurate signals
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>We train on Forex
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <ul className="primary-list mt-20">
                      <li>
                        <i className="fas fa-check-circle"></i>We provide
                        partnership
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>We trade, you
                        invest and earn
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i>We support you
                        all the way
                      </li>
                    </ul>
                  </div>
                </div>

                <a href="#" className="button-md button-primary mt-30">
                  Read More
                </a>
              </div>

              {/* CEO image */}
              <div className="col-md-6 col-12 offset-md-1">
                <img
                  src="img/content/home-images/ceo.png"
                  className="position-relative extra-rounded-border shadow-primary z-index-9 mt-30-xs"
                  alt="img"
                />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      marginTop: "40px",
                      display: "inline-bloack",
                    }}
                  >
                    <img
                      src="img/signature.png"
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
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose us */}
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Title and Desc. */}
                <div className="section-heading text-center my-5">
                  <h3 className="semi-bold font-size-35">Why Choose Us?</h3>
                  <div className="section-heading-line line-thin"></div>
                  <p>
                    We are experts in creating a value for you and your business
                  </p>
                </div>

                <div className="row">
                  {chooseUs.map((rec, idx) => (
                    <div key={idx} className="col-xs-12 col-md-6 mt-2">
                      <div className="contact-icon-box callback-block p-5">
                        <div className="testmonial-box-icon numb">
                          {idx + 1}
                        </div>
                        <div className="testmonial-box-content">
                          <h3>{rec?.title}</h3>
                          <p>{rec?.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More about Us : Our Mission, Vision and Strategies */}
        <div
          className="section-block grey-bg jarallax"
          data-jarallax
          data-speed="0.9"
          style={{ backgroundImage: "url('img/content/business/bg-map.png')" }}
        >
          <div className="container">
            <div className="row">
              {/* Video Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="video-video-box full-width">
                  <img
                    src="img/video-img.png"
                    alt="img"
                    className="shadow-primary"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-video-box-overlay">
                    <div className="video-video-box-button-sm">
                      <button
                        className="video-video-play-icon pulsebox-1"
                        data-izimodal-open=".izimodal"
                      >
                        <i className="fa fa-play"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="izimodal"
                  data-iziModal-width="800px"
                  data-iziModal-fullscreen="true"
                >
                  <iframe
                    height="415"
                    src="https://www.youtube.com/embed/nrJtHemSPW4"
                    className="full-width shadow-primary"
                  ></iframe>
                </div>
              </div>

              {/* Text Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="pl-45-md">
                  <div className="section-heading">
                    <h3 className="semi-bold">More About Us</h3>
                    <p>
                      We help our clients achieve their goals to financial
                      freedom.
                    </p>
                  </div>
                  <div>
                    <div className="contact-icon-box">
                      <i className="icon-phone-book"></i>
                      <h4>Our Mission</h4>
                      <h5>
                        To provide education and tools in order to improve
                        people's financial knowledge and thus generate a
                        significant change in their economy.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-opened-email-outlined-interface-symbol"></i>
                      <h4>Our Vision</h4>
                      <h5>
                        Simplifying worldwide trading and maximizing Africa's
                        investment opportunity.
                      </h5>
                    </div>
                    <div className="contact-icon-box">
                      <i className="icon-location"></i>
                      <h4>Our Strategies</h4>
                      <h5>
                        Integrity and transparency are the values that define
                        Obaforex. We are governed by a strong ethical conduct.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You found Us */}
        <div
          className="section-block-parallax jarallax black-overlay-70 found-us"
          data-jarallax
          data-speed="0.6"
        >
          <div className="container">
            <div className="large-heading text-center">
              <h4 className="semi-bold white-color">
                You found Us, <br /> Now let us help you gain financial freedom!
              </h4>
              <div className="section-heading-line"></div>
            </div>
            <div className="mt-25 text-center">
              <a href="#" className="button-md button-white-bordered mt-10">
                Join Us
              </a>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <div className="section-block section-sm border-bottom partners">
          <div className="container">
            <div className="section-heading text-center mb-5">
              <h3 className="semi-bold">Our Partners</h3>
              <div className="section-heading-line"></div>
              <p>Our Top Partners</p>
            </div>
            <div
              className="owl-carousel owl-theme customizable-carousel mt-50"
              data-loop="true"
              data-items="4"
              data-md-items="4"
              data-sm-items="1"
              data-xs-items="1"
              data-space="15"
              data-autoplay="true"
              data-autospeed="4000"
              data-nav-dots="true"
              data-nav-arrows="false"
            >
              <div className="item">
                <img
                  className="part-img"
                  src="img/partners/hotforex-logo.png"
                  alt="img"
                />
              </div>
              <div className="item">
                <img
                  className="part-img"
                  src="img/partners/binary-logo.png"
                  alt="img"
                />
              </div>
              <div className="item">
                <img
                  className="part-img"
                  src="img/partners/xm-broker-logo.png"
                  alt="img"
                />
              </div>
              <div className="item">
                <img
                  className="part-img"
                  src="img/partners/berry-logo.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Invest and Chill */}
        <div className="action-box action-box-md grey-bg center-holder-xs">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-12">
                <h3 className="bold">Invest and Chill</h3>
                <p>
                  Join Us let's help you with all the complexities of Forex
                  Trading
                </p>
              </div>
              <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
                <a href="#" className="button-md button-primary">
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
