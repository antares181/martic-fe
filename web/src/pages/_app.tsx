import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "../styles/global.scss";
import { App, ConfigProvider } from "antd";
import { ANTD_THEME } from "@/styles/antd.theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={ANTD_THEME}>
      <App>
        <Component {...pageProps} />
      </App>
    </ConfigProvider>
  );
}

export default MyApp;
