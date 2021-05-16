import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { Chill } from "../../component/Chill";
import faq from "../../data/faq.json";
import { TradeViewTop } from "../../component/TradeViewTop";

const FAQ = () => {
  return (
    <Layout title="FAQ">
      {/* Banner */}
      <Banner page="FAQ" />

      {/* Trade View */}
      <div id="top-bar">
        <TradeViewTop />
      </div>

      {/* Do You Have Any Questions? */}
      <div className="section-block grey-bg background-shape-3 border-bottom">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center mb-5">
            <h3 className="semi-bold font-size-35">
              Do You Have Any Questions?
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              We are here to meet your every need. Check through our collection
              of questions and thier corresponding answers.
              <br />
              We are always available to answer any of your questions that is
              not captured below
            </p>
          </div>

          {/* Accordions */}
          <div id="accordion" role="tablist" className="mt-15">
            {faq.map((rec, idx) => (
              <div className="card card-primary">
                <div
                  className="card-header card-header-primary"
                  role="tab"
                  id={`tab${idx}`}
                >
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    href={`#collapse${idx}`}
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ fontSize: "18px" }}
                  >
                    {rec?.title}
                  </a>
                </div>
                <div
                  id={`collapse${idx}`}
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby={`tab${idx}`}
                  data-parent="#accordion"
                >
                  <div className="card-body card-body-primary">
                    <p>{rec?.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invest and Chill */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

export default FAQ;
