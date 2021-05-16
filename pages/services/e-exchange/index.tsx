import { Banner } from "../../../component/Banner";
import { Layout } from "../../../component/Layout";
import eExchange from "../../../data/eExchangeSteps.json";

const EExchange = () => {
  return (
    <Layout title="E-Exchange">
      {/* Banner */}
      <Banner page="E-Exchange" />

      {/* Buy And Sell E-Currencies */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">
              Buy And Sell E-Currencies
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Obaforex Global Trading offers the most competitive prices with
              respect to eCurrency and giftcards. We aim at making transactions
              simple and fast
            </p>

            {/* Steps */}
            <div className="row">
              {eExchange.map((rec, idx) => (
                <div key={idx} className="col-xs-12 col-md-4 mt-2">
                  <div
                    className="contact-icon-box callback-block p-5 why-train-card text-left"
                    style={{
                      backgroundColor: rec?.bg_color,
                      minHeight: "300px !important",
                      marginTop: "30px",
                    }}
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

          <div className="row justify-content-center">
            {/* Exchange Now button*/}
            <div className="col-12 text-center">
              <br />
              <a
                href="#"
                className="button-md button-primary"
                style={{ zIndex: 1, marginTop: "30px" }}
              >
                Exchange Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EExchange;
