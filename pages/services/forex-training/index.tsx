import { Banner } from "../../../component/Banner";
import { JoinUs } from "../../../component/JoinUs";
import { Layout } from "../../../component/Layout";
import WhyTrain from "../../../data/whyTrain.json";
import trainingPackages from "../../../data/trainingPackages.json";

const forexTraining = () => {
  return (
    <Layout title="Forex Training">
      {/* Banner */}
      <Banner page="Forex Training" />

      {/* Obaforex Academy */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Obaforex Academy</h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Now that you are here, it shows you have interest in trading. This
              is how you can benefit from it. Below is our training packages
              based on where you are in the forex market. Our training Classes
              are aimed at developing individuals and organizations to be
              successful in forex trading. We also offer a free three month
              mentorship for graduates of the institute to ensure their success
              in the Forex Market
            </p>
          </div>

          {/* Plans */}
          <div className="row no-gutters justify-content-center">
            {trainingPackages.map((rec, idx) => (
              <div
                key={idx}
                className="col-md-6 col-sm-12 col-lg-4 col-12 wow fadeInLeftSm"
                data-wow-delay="0.7s"
              >
                <div
                  className="pricing-section"
                  style={{
                    backgroundColor: rec?.bg_color,
                    marginTop: "50px",
                    minHeight: "380px",
                  }}
                >
                  <div className="pricing-section-price pb-0">
                    <h4>{rec?.title}</h4>
                    <h2>
                      {idx != 0 && <sup>$</sup>}
                      {rec?.cost}
                    </h2>
                  </div>
                  <ul>
                    <li>
                      <b>Period: </b> {rec?.period}
                    </li>
                    <li>
                      <b>Duration: </b>
                      {rec?.duration}
                    </li>
                    <li>
                      <b>Requirements: </b>
                      {rec?.requirements}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Train with us */}
      <div className="pb-5 section-block grey-bg jarallax">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Title and Desc. */}
              <div className="section-heading text-left pt-5">
                <h3 className="semi-bold mt-5">Why Train With Us?</h3>
                <div className="section-heading-line line-thin"></div>
                <p>We have the best hands. Meet Our Team Of Professionals</p>
              </div>

              <div className="row">
                {WhyTrain.map((rec, idx) => (
                  <div key={idx} className="col-xs-12 col-md-6 mt-2">
                    <div
                      className="contact-icon-box callback-block p-5 why-train-card"
                      style={{ backgroundColor: rec?.bg_color }}
                    >
                      <div className="testmonial-box-icon numb">{idx + 1}</div>
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

      {/* Training Curriculums */}
      <div className="section-block section-sm border-bottom partners">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Training Curriculums</h3>
            <div className="section-heading-line line-thin"></div>
            <p>Download Obaforex training curriculums</p>
          </div>
          <div className="row">
            {/* Beginner Class */}
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="testmonial-item-5 bg-light-blue">
                <h5 className="text-center">Beginner Class</h5>
                <div className="mt-20 text-center">
                  <a
                    href="/documents/beginners-class.pdf"
                    target="_blank"
                    className="button-primary button-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Intermediate Class */}
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="testmonial-item-5 bg-light-blue">
                <h5 className="text-center">Intermediate Class</h5>
                <div className="mt-20 text-center">
                  <a
                    href="/documents/intermediate-class.pdf"
                    target="_blank"
                    className="button-primary button-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Class */}
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="testmonial-item-5 bg-light-blue">
                <h5 className="text-center">Professional Class</h5>
                <div className="mt-20 text-center">
                  <a
                    href="/documents/professional-class.pdf"
                    className="button-primary button-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>

            {/* Master Class */}
            <div className="col-xs-12 col-md-6 col-lg-3">
              <div className="testmonial-item-5 bg-light-blue">
                <h5 className="text-center">Master Class</h5>
                <div className="mt-20 text-center">
                  <a
                    href="/documents/professional-class.pdf"
                    className="button-primary button-md"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us and Relax */}
      <JoinUs />
    </Layout>
  );
};

export default forexTraining;
