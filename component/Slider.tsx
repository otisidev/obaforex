import sliders from "../data/slider.json";
export const Slider = () => {
  return (
    <>
      <section className="main-slider">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true,
            "effect": "fade",
            "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
            },
            "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
                "delay": 5000
            }}'
        >
          <div className="swiper-wrapper">
            {sliders?.map((slider, idx) => (
              <div key={idx} className="swiper-slide">
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${slider?.img_path})`,
                  }}
                ></div>
                <div className="image-layer-overlay"></div>
                <div className="main-slider-shape-1"></div>
                <div className="main-slider-shape-2"></div>
                <div className="main-slider-shape-3"></div>
                <div className="main-slider-shape-4"></div>
                <div className="main-slider-shape-5"></div>
                {/* image-layer */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="main-slider__content">
                        {slider?.title?.map((rec, idx) => (
                          <h2 key={idx}>
                            {" "}
                            <span>
                              {rec}
                              <br />
                            </span>
                          </h2>
                        ))}
                        <p>{slider?.desc}</p>
                        <a href="/join" className="thm-btn">
                          Join Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* navigation buttons */}
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="main-slider__next-text">Next</span>
              <i className="icon-right-arrow icon-left-arrow"></i>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="main-slider__prev-text">Prev</span>
              <i className="icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
