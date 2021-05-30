import { useEffect } from "react";

export const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
  }, []);
  return <> </>;
};
