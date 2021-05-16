import { Banner } from "../../../component/Banner";
import { Chill } from "../../../component/Chill";
import { Layout } from "../../../component/Layout";
import strategyInfo from "../../../data/strategyInfo.json";
import { useRouter } from "next/router";
import { TradeViewTop } from "../../../component/TradeViewTop";

const ForexStrategy = () => {
  const router = useRouter();
  return (
    <Layout title="Forex Strategy">
      {/* Banner */}
      <Banner page="Forex Strategy" />

      {/* Trade View */}
      <div id="top-bar">
        <TradeViewTop />
      </div>

      {/* Obaforex Best Strategy Shop */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title, Desc. and Strategies */}
          <div className="section-heading text-center mb-5">
            {/* Title */}
            <h3 className="semi-bold font-size-35">
              Obaforex Best Strategy Shop
            </h3>
            <div className="section-heading-line line-thin"></div>

            {/* Description */}
            <p>
              Picking the Best Forex Strategy for You, When it comes to
              clarifying what the best and most profitable Forex trading
              strategy is, there really is no single answer. Here's why: The
              best FX strategies will be suited to the individual. This means
              you need to consider your personality and work out the best Forex
              strategy that suit you.
            </p>
            <p className="mt-2">
              {" "}
              Obaforex Group can provide you with the best FX Strategy that will
              meet your specific needs. <br />
              <strong>Choose below</strong>
            </p>

            {/* Strategies */}
            <div className="row  pt-5">
              {strategyInfo.map((info, idx) => (
                <>
                  {idx + 1 != strategyInfo.length && (
                    <div
                      key={idx}
                      className="col-md-6 col-sm-12 col-lg-3 col-12 wow fadeInLeftSm"
                      data-wow-delay="0.9s"
                    >
                      <div className="pricing-section pricing-section-advanced shadow-primary">
                        <div className="pricing-section-price">
                          <h4>{info?.name}</h4>
                          <h3>
                            <sup>N</sup>
                            {info?.amount}
                          </h3>
                        </div>
                        <ul>
                          {info?.list?.map((li, idx) => (
                            <li key={idx}>{li}</li>
                          ))}
                        </ul>

                        <a
                          href={`../strategy-payment/${info.id}`}
                          className="button-primary button-md"
                          style={{ marginTop: "40px" }}
                        >
                          Get Strategy
                        </a>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Invest and Chill */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

export default ForexStrategy;
