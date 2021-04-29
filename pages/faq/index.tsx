import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { Chill } from "../../component/Chill";

const FAQ = () => {
  return (
    <Layout title="FAQ">
      {/* Banner */}
      <Banner page="FAQ" />

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
              We are always available to answer any question that is not
              captured below
            </p>
          </div>
        </div>
      </div>

      {/* Invest and Chill */}
      <Chill bgColor="bg-white" />
    </Layout>
  );
};

export default FAQ;
