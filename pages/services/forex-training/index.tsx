import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import WhyTrain from "../../../data/whyTrain.json";

const forexTraining = () => {
  return (
    <Layout title="Forex Training">
      {/* Banner */}
      <Banner page="Training" />

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
          <div className="row">
            {/* Beginner Class */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card2">
                <h5>Beginner Class</h5>
                <div className="testmonial-item-5-text mb-3">
                  <p>
                    <strong className="text-primary">Cost: </strong>
                    <span className="text-success" style={{ fontSize: "24px" }}>
                      Free
                    </span>
                  </p>
                  <p>
                    <strong className="text-primary">Period: </strong>Two Days
                    (2days)
                  </p>
                  <p>
                    <strong className="text-primary">Duration: </strong>Two
                    hours (2hrs)
                  </p>
                  <p>
                    <strong className="text-primary">Requirement: </strong>
                    Laptop / Smart Devices, Internet connection
                  </p>
                </div>
                <div className="mt-20">
                  <a href="#" className="button-primary button-md">
                    Start Today
                  </a>
                </div>
              </div>
            </div>

            {/* Intermediate Class */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card2">
                <h5>Intermediate Class</h5>
                <div className="testmonial-item-5-text mb-3">
                  <p>
                    <strong className="text-primary">Cost: </strong>
                    <span style={{ fontSize: "24px" }}>$250</span>
                  </p>
                  <p>
                    <strong className="text-primary">Period: </strong>One Month
                    (1Mnth, 3 times a week) (2days)
                  </p>
                  <p>
                    <strong className="text-primary">Duration: </strong>Two
                    hours (2hrs)
                  </p>
                  <p>
                    <strong className="text-primary">Requirement: </strong>
                    Laptop / Smart Devices, Internet connection
                  </p>
                </div>
                <div className="mt-20">
                  <a href="#" className="button-primary button-md">
                    Start Today
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Class */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card2">
                <h5>Professional Class</h5>
                <div className="testmonial-item-5-text mb-3">
                  <p>
                    <strong className="text-primary">Cost: </strong>
                    <span style={{ fontSize: "24px" }}>$450</span>
                  </p>
                  <p>
                    <strong className="text-primary">Period: </strong>One Week
                    (1Wk, Every day) (2days)
                  </p>
                  <p>
                    <strong className="text-primary">Duration: </strong>Two
                    hours (2hrs)
                  </p>
                  <p>
                    <strong className="text-primary">Requirement: </strong>
                    Live Trading Account, Laptop / Smart Devices, Internet
                    connection, Minimum balance of $500
                  </p>
                </div>
                <div className="mt-20">
                  <a href="#" className="button-primary button-md">
                    Start Today
                  </a>
                </div>
              </div>
            </div>

            {/* Master Class */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card2">
                <h5>Master Class</h5>
                <div className="testmonial-item-5-text mb-3">
                  <p>
                    <strong className="text-primary">Cost: </strong>
                    <span style={{ fontSize: "24px" }}>$550</span>
                  </p>
                  <p>
                    <strong className="text-primary">Period: </strong>One Week
                    (1Wk, Every day) (2days)
                  </p>
                  <p>
                    <strong className="text-primary">Duration: </strong>Two
                    hours (2hrs)
                  </p>
                  <p>
                    <strong className="text-primary">Requirement: </strong>
                    Trading Account, Laptop / Smart Devices, Internet
                    connection, Minimum balance of $500
                  </p>
                </div>
                <div className="mt-20">
                  <a href="#" className="button-primary button-md">
                    Start Today
                  </a>
                </div>
              </div>
            </div>

            {/* Binary Class */}
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div className="testmonial-item-5 test-card2">
                <h5>Binary Class</h5>
                <div className="testmonial-item-5-text mb-3">
                  <p>
                    <strong className="text-primary">Cost: </strong>
                    <span style={{ fontSize: "24px" }}>$600</span>
                  </p>
                  <p>
                    <strong className="text-primary">Period: </strong>One Week
                    (1Wk, Every day) (2days)
                  </p>
                  <p>
                    <strong className="text-primary">Duration: </strong>Two
                    hours (2hrs)
                  </p>
                  <p>
                    <strong className="text-primary">Requirement: </strong>
                    Trading Account, Laptop / Smart Devices, Internet
                    connection, Minimum balance of $250
                  </p>
                </div>
                <div className="mt-20">
                  <a href="#" className="button-primary button-md">
                    Start Today
                  </a>
                </div>
              </div>
            </div>
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
                    <div className="contact-icon-box callback-block p-5 why-train-card">
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
                  <a href="#" className="button-primary button-md">
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
                  <a href="#" className="button-primary button-md">
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
                  <a href="#" className="button-primary button-md">
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
                  <a href="#" className="button-primary button-md">
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default forexTraining;
