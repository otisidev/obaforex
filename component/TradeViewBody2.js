import { useEffect } from "react";

export const TradeViewBody2 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 770,
      height: 400,
      currencies: [
        "EUR",
        "USD",
        "JPY",
        "GBP",
        "CHF",
        "AUD",
        "CAD",
        "NZD",
        "CNY",
      ],
      isTransparent: false,
      colorTheme: "light",
      locale: "en",
    });
    document.getElementById("trade-container2")?.appendChild(script);
  }, []);

  return (
    <div className="section-block section-sm partners">
      <div className="container">
        {/* Title and Desc. */}
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold font-size-35">
            Obaforex Technical Analysis
          </h3>
          <div className="section-heading-line line-thin mb-5"></div>
          <div className="tradingview-widget-container" id="trade-container2">
            <div class="tradingview-widget-container__widget"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/markets/currencies/forex-heat-map/"
                rel="noopener"
                target="_blank"
              >
                <span class="blue-text">Obaforex Heat Map</span>
              </a>{" "}
              by TradingView
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
