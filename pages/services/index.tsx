import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import services from "../../data/services.json";
import testimonials from "../../data/testimonials.json";

const Services = () => {
  return (
    <Layout title="Services">
      {/* Banner */}
      <Banner page="Services" />

      {/* We Are Here To Help You */}
      <div className="section-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-none d-md-block">
              <img
                src="/img/about/about-img.png"
                className="rounded-border shadow-primary"
                alt=""
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary">Service We Provide</small>
                  <h3 className="semi-bold font-size-32">
                    We Are Here To Help You
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      Obaforex is a financial technology and automated trading
                      and investment service company. We offer sophisticated A.I
                      driven automated trading solutions for financial markets.
                      Our mission is to simplify investing and empower investors
                      with innovations in financial and machine learning
                      sciences.
                      <br />
                      <br />
                      Our artificial intelligence for algorithmic trading
                      formulates winning strategies and rigorous risk management
                      to grow client’s wealth.
                      <br />
                      <br />
                      We develop sophisticated trading models that are able to
                      continuously learn and improve using advances in A.I,
                      artificial neural network, machine learning, deep
                      learning, big data, and analytics to minimize client risk
                      and maximize returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="section-backdrop">
        <div className="overlay-clr">
          <div className="container py-5">
            {/* Title and Desc. */}
            <div className="section-heading text-center mb-5">
              <h3
                className="semi-bold font-size-35 pt-5 text-white"
                style={{ color: "white !important" }}
              >
                What We Do
              </h3>
              <div className="section-heading-line line-thin"></div>
              <p style={{ color: "#b1b1b1 !important" }}>
                Obaforex is here to make you wealthy
              </p>
            </div>

            <div className="row">
              {services.map((rec, idx) => (
                <div key={idx} className="col-xs-12 col-md-6 col-lg-4">
                  <div className="testmonial-item-5 text-center service-box">
                    <h5 className="mb-3" style={{ color: "white" }}>
                      {rec?.title}
                    </h5>
                    <p className="text-light-grey">{rec?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section-block grey-bg background-shape-3">
        <div className="container">
          <div className="section-heading text-center">
            <h3 className="semi-bold">Our Testmonials</h3>
            <div className="section-heading-line"></div>
            <p>View the Testimonials of few of Our Investors</p>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme testmonials-carousel">
              {testimonials.map((rec, idx) => (
                <div
                  key={idx}
                  className="testmonial-box"
                  style={{ background: rec?.bg }}
                >
                  <div className="testmonial-box-icon">
                    <img src={rec?.img} alt="img" />
                  </div>
                  <div className="testmonial-box-content">
                    <h3>{rec?.name}</h3>
                    <strong>{rec?.designation}</strong>
                    <p>{rec?.testimony}</p>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
