import { useEffect } from "react";

export const TradeViewTop = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          description: "",
          proName: "FX:EURUSD",
        },
        {
          description: "",
          proName: "FX:GBPUSD",
        },
        {
          description: "",
          proName: "FX:USDCAD",
        },
        {
          description: "",
          proName: "FX:USDCHF",
        },
        {
          description: "",
          proName: "FX:XAUUSD",
        },
        {
          description: "",
          proName: "FX:EURGBP",
        },
        {
          description: "",
          proName: "FX:GBPJPY",
        },
        {
          description: "",
          proName: "FX:GBPCAD",
        },
        {
          description: "",
          proName: "BITBAY:BTCUSD",
        },
        {
          description: "",
          proName: "FX:EURJPY",
        },
        {
          description: "",
          proName: "FX:AUDUSD",
        },
        {
          description: "",
          proName: "FX:USDJPY",
        },
        {
          description: "",
          proName: "NASDAQ:FB",
        },
        {
          description: "",
          proName: "FX:NZDUSD",
        },
      ],
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });
    document.getElementById("trade-container")?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" id="trade-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};
