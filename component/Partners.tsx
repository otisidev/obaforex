export const Partners = () => {
  return (
    <section className="counters-one">
      <div
        className="counters-one-bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/counter-one-bg.jpg)",
        }}
      ></div>
      <div className="container">
        <div
          className="section-title text-center"
          style={{ marginBottom: "0" }}
        >
          <h2
            className="section-title__title"
            style={{ color: "white", paddingTop: "100px" }}
          >
            Our Partners
          </h2>
          <span className="section-title__tagline">Obaforex Top Partners</span>
        </div>
        <ul className="counters-one__box list-unstyled">
          <li className="counter-one__single">
            <img src="assets/images/hotforex.png" alt="HotForex Logo" />
            <p className="counter-one__text">Hot Forex</p>
          </li>
          <li className="counter-one__single">
            <img src="assets/images/binary.png" alt="HotForex Logo" />
            <p className="counter-one__text">Binary</p>
          </li>
          <li className="counter-one__single">
            <img src="assets/images/xm-broker.png" alt="HotForex Logo" />
            <p className="counter-one__text">XM Broker</p>
          </li>
          <li className="counter-one__single">
            <img src="assets/images/berry.png" alt="HotForex Logo" />
            <p className="counter-one__text">Berry Market</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
