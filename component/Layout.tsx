import Head from "next/head";
import { AppName } from "../app/context";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Top } from "./Top";

export const Layout = ({ children, title }) => {
    // useEffect(() => {
    //   const script = document.createElement("script");
    //   script.src = "/js/live.chat.js";
    //   script.async = true;
    //   document.getElementById("live-chat")?.appendChild(script);
    // }, []);

    return (
        <>
            <Head>
                <title>
                    {title} | {AppName}
                </title>
            </Head>

            {/* Short contact info */}
            <Top />

            {/* Header with Navigation */}
            <Header />
            {children}
            {/* Footer  */}
            <Footer />
            <div id="live-chat">
                <noscript>
                    <a href="https://www.livechatinc.com/chat-with/12588699/" rel="nofollow">
                        Chat with us
                    </a>
                    , powered by{" "}
                    <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">
                        LiveChat
                    </a>
                </noscript>
            </div>
            <a href="#" className="scroll-to-top">
                <i className="fas fa-chevron-up"></i>
            </a>
        </>
    );
};
