import { Banner } from "../../../component/Banner";
import { CreateTheFuture } from "../../../component/CreateTheFuture";
import { Layout } from "../../../component/Layout";
import { TradeViewBody1 } from "../../../component/TradeViewBody1";
import { TradeViewBody2 } from "../../../component/TradeViewBody2";
import { TradeViewBody3 } from "../../../component/TradeViewBody3.js";
import { TradeViewTop } from "../../../component/TradeViewTop";

const ObaforexTools = () => {
  return (
    <Layout title="Obaforex Tools">
      {/* Banner */}
      <Banner page="Obaforex Tools" />

      {/* Trade View */}
      <div id="top-bar">
        <TradeViewTop />
      </div>

      {/* We Are Always Ahead Of The Market */}
      <TradeViewBody1 />

      {/* Obaforex Technical Analysis */}
      <TradeViewBody2 />

      {/* Obaforex Fundamental Analysis */}
      <TradeViewBody3 />

      {/* Create the future you want */}
      <CreateTheFuture bgColor="bg-white" />
    </Layout>
  );
};

export default ObaforexTools;
