import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import { Chill } from "../../../component/Chill";

const investment = () => {
  return (
    <Layout title="Investment">
      {/* Banner */}
      <Banner page="Fund Management" />

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
            <p className="mt-2">
              {" "}
              Our Investment Packages Are: <br />
              <strong>
                Monthly Package: 25% ROI | Quarterly Package: 80% ROI
              </strong>
            </p>

            <a
              href="/documents/investment-policy.pdf"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "40px" }}
            >
              Read Our Policy
            </a>
          </div>
        </div>
      </div>

      {/* Get Reliable Signals from Us */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

export default investment;
