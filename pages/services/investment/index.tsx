import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import { Signal } from "../../../component/Signal";
import packages from "../../../data/investmentPackages.json";

const Investment = () => {
  return (
    <Layout title="Investment">
      {/* Banner */}
      <Banner page="Investment" />

      {/* Invest And Earn */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">Invest And Earn</h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              This type of investment is a fix investment capital, We give juicy
              returns on investments (ROI) to our investors which ranges from
              monthly to quarterly. Funds are invested into Foreign Exchange
              Market, Energy Futures (Oil, Natural Gas) Commodities Futures
              (Coffee, Cotton, Sugar, Corn, Soya beans, Wheat) for trading
              purposes and at the end of the month or quarter the investor is
              given a fix Return on Investment (ROI). Are:
            </p>
            <br />
            {/* Read Our Policy button */}
            <a
              href="/documents/investment-policy.pdf"
              target="_blank"
              style={{ zIndex: 2 }}
            >
              Read Our Policy
            </a>
            <br />
            {/* Join Now and Invest button */}
            <a
              href="/documents/investment-policy.pdf"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "40px", zIndex: 2 }}
            >
              Join Now and Invest
            </a>
          </div>
          {/* Our Investment packages are */}
          <div className="text-center">
            <strong style={{ display: "block", margin: "40px 0" }}>
              Our Investment Packages Are
            </strong>{" "}
            <div className="row">
              {packages.map((rec, idx) => (
                <div key={idx} className="col-xs-12 col-md-6 mt-2">
                  <div className="contact-icon-box callback-block p-5">
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

      {/* Get Reliable Signals from Us */}
      <Signal />
    </Layout>
  );
};

export default Investment;
