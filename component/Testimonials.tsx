import testimonials from "../data/testimonials.json";

export const Testimonials = () => {
  return (
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
  );
};
