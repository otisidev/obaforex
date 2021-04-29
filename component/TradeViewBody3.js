import { useEffect } from "react";

export const TradeViewBody3 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false,
      width: "770",
      height: "400",
      locale: "en",
      importanceFilter: "-1,0,1",
      currencyFilter: "USD,AUD,CAD,CNY,ATS,EUR,DEM,JPY,ITL,MXN,SGD,GBP",
    });
    document.getElementById("trade-container3")?.appendChild(script);
  }, []);

  return (
    <div className="section-block section-sm border-bottom grey-bg bg-dot-right">
      <div className="container">
        {/* Title and Desc. */}
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold font-size-35">
            Obaforex Fundamental Analysis
          </h3>
          <div className="section-heading-line line-thin mb-5"></div>
          <div className="tradingview-widget-container" id="trade-container3">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/markets/currencies/economic-calendar/"
                rel="noopener"
                target="_blank"
              >
                <span class="blue-text">Economic Calendar</span>
              </a>{" "}
              by TradingView
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
