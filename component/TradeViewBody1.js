import { useEffect } from "react";

export const TradeViewBody1 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.innerHTML = JSON.stringify(
      new TradingView.widget({
        width: 1024,
        height: 810,
        symbol: "FX:EURUSD",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        studies: [
          "MACD@tv-basicstudies",
          "MAExp@tv-basicstudies",
          "PSAR@tv-basicstudies",
          "RSI@tv-basicstudies",
        ],
        container_id: "tradingview_8c7a9",
      })
    );
    // document.getElementById("trade-container1")?.appendChild(script);
  }, []);

  return (
    <div className="section-block grey-bg background-shape-3 border-bottom">
      <div className="container">
        {/* Title and Desc. */}
        <div className="section-heading text-center mb-5">
          <h3 className="semi-bold font-size-35">
            We Are Always Ahead Of The Market
          </h3>
          <div className="section-heading-line line-thin mb-5"></div>

          <div className="tradingview-widget-container" id="trade-container1">
            <div id="tradingview_8c7a9"></div>
            <div class="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/symbols/FX-EURUSD/"
                rel="noopener"
                target="_blank"
              >
                <span class="blue-text">EURUSD Chart</span>
              </a>{" "}
              by TradingView
            </div>
            <script
              type="text/javascript"
              src="https://s3.tradingview.com/tv.js"
            ></script>
          </div>
        </div>
      </div>
    </div>
  );
};
